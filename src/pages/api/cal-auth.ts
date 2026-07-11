import type { APIRoute } from "astro";
import {
  calCookieOptions,
  createCalSession,
  getCalCookieName,
  timingSafeEqual
} from "../../lib/calAuth";

export const POST: APIRoute = async ({ request, locals, cookies, redirect }) => {
  const env = locals.runtime?.env ?? {};
  const expectedPassword = env.CAL_PAGE_PASSWORD;
  const authSecret = env.CAL_AUTH_SECRET;

  if (!expectedPassword || !authSecret) {
    return redirect("/cal?error=setup", 303);
  }

  const origin = request.headers.get("origin");
  const requestUrl = new URL(request.url);
  if (origin && new URL(origin).host !== requestUrl.host) {
    return new Response("Invalid origin", { status: 403 });
  }

  const form = await request.formData();
  const password = String(form.get("password") ?? "");

  if (!timingSafeEqual(password, expectedPassword)) {
    return redirect("/cal?error=invalid", 303);
  }

  cookies.set(getCalCookieName(), await createCalSession(authSecret), calCookieOptions());
  return redirect("/cal", 303);
};
