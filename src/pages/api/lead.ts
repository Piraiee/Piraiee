import type { APIRoute } from "astro";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime?.env ?? {};
  const allowedOrigin = env.ALLOWED_ORIGIN || "https://piraiee.com";
  const origin = request.headers.get("origin");

  if (origin && origin !== allowedOrigin && !origin.includes("localhost")) {
    return json({ ok: false, error: "Invalid origin" }, 403);
  }

  const form = await request.formData();
  const payload = {
    name: clean(form.get("name")),
    email: clean(form.get("email")),
    topic: clean(form.get("topic")),
    message: clean(form.get("message")),
    source: clean(form.get("source")) || "piraiee.com",
    page: request.headers.get("referer") || "",
    submittedAt: new Date().toISOString()
  };

  if (!payload.name || !emailPattern.test(payload.email) || !payload.topic || !payload.message) {
    return json({ ok: false, error: "Please complete all required fields." }, 400);
  }

  const turnstileToken = clean(form.get("cf-turnstile-response"));
  if (env.TURNSTILE_SECRET_KEY && !(await verifyTurnstile(env.TURNSTILE_SECRET_KEY, turnstileToken))) {
    return json({ ok: false, error: "Spam check failed." }, 400);
  }

  if (!env.GOOGLE_SCRIPT_URL) {
    console.info("Lead captured without GOOGLE_SCRIPT_URL", payload);
    return json({ ok: true, pendingSetup: true });
  }

  const response = await fetch(env.GOOGLE_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    return json({ ok: false, error: "Submission service unavailable." }, 502);
  }

  return json({ ok: true });
};

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim().slice(0, 5000) : "";
}

async function verifyTurnstile(secret: string, token: string) {
  if (!token) {
    return false;
  }

  const body = new FormData();
  body.set("secret", secret);
  body.set("response", token);

  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body
  });
  const result = (await response.json()) as { success?: boolean };
  return Boolean(result.success);
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}
