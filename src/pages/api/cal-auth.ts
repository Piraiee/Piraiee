import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import {
  calCookieOptions,
  createCalSession,
  getCalCookieName,
  timingSafeEqual
} from "../../lib/calAuth";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const expectedPassword = env.CAL_PAGE_PASSWORD;
  const authSecret = env.CAL_AUTH_SECRET;

  if (!expectedPassword || !authSecret) {
    return redirect("/cal?error=setup", 303);
  }

  const origin = request.headers.get("origin");
  const requestUrl = new URL(request.url);
  if (origin && !isSameOrigin(origin, requestUrl)) {
    return new Response("Invalid origin", { status: 403 });
  }

  const form = await request.formData();
  const password = String(form.get("password") ?? "");

  if (!timingSafeEqual(password, expectedPassword)) {
    return redirect("/cal?error=invalid", 303);
  }

  if (!env.GOOGLE_SCRIPT_URL || !env.GOOGLE_SCRIPT_SECRET) {
    return redirect("/cal?error=delivery", 303);
  }

  try {
    const deliveryResponse = await fetch(env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        formName: "Private Calendar Access",
        name: "Private scheduling visitor",
        email: "ahmad@piraiee.com",
        topic: "Private calendar access authorized",
        message: "A visitor entered a valid private scheduling access code.",
        source: "piraiee.com/cal",
        fields: { access_result: "Authorized" },
        page: request.headers.get("referer") || "",
        submittedAt: new Date().toISOString(),
        webhookSecret: env.GOOGLE_SCRIPT_SECRET
      }),
      redirect: "follow"
    });
    const result = await deliveryResponse.json() as { ok?: boolean; rowSaved?: boolean; emailSent?: boolean };
    if (!deliveryResponse.ok || !result.ok || !result.rowSaved || !result.emailSent) {
      return redirect("/cal?error=delivery", 303);
    }
  } catch (error) {
    console.error("Private calendar access notification failed", error);
    return redirect("/cal?error=delivery", 303);
  }

  cookies.set(getCalCookieName(), await createCalSession(authSecret), calCookieOptions());
  return redirect("/cal", 303);
};

function isSameOrigin(origin: string, requestUrl: URL) {
  if (origin === "null") {
    return requestUrl.hostname === "localhost" || requestUrl.hostname === "127.0.0.1";
  }

  try {
    return new URL(origin).origin === requestUrl.origin;
  } catch {
    return false;
  }
}
