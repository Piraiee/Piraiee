import type { APIRoute } from "astro";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9 ()-]{7,20}$/;
const maxUploadBytes = 4 * 1024 * 1024;
const uploadFieldName = "pitch_deck_file";
const allowedUploadExtensions = new Set(["pdf", "ppt", "pptx", "key", "doc", "docx", "png", "jpg", "jpeg"]);

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime?.env ?? {};
  const allowedOrigin = env.ALLOWED_ORIGIN || "https://piraiee.com";
  const origin = request.headers.get("origin");

  if (origin && origin !== allowedOrigin && !isLocalOrigin(origin)) {
    return json({ ok: false, error: "Invalid origin" }, 403);
  }

  const form = await request.formData();
  const uploadedFile = await readUpload(form);
  if (uploadedFile instanceof Response) return uploadedFile;

  const fields = Object.fromEntries(
    Array.from(form.entries())
      .filter(([key]) => key !== uploadFieldName && key !== "cf-turnstile-response")
      .map(([key, value]) => [key, clean(value)])
  );

  const payload = {
    formName: formNameFrom(form),
    name: clean(form.get("name")),
    email: clean(form.get("email")),
    topic: clean(form.get("topic")),
    message: clean(form.get("message")),
    source: clean(form.get("source")) || "piraiee.com",
    fields,
    uploadedFile,
    page: request.headers.get("referer") || "",
    submittedAt: new Date().toISOString(),
    webhookSecret: env.GOOGLE_SCRIPT_SECRET || ""
  };

  if (!payload.name || !emailPattern.test(payload.email) || !payload.topic || !payload.message) {
    return json({ ok: false, error: "Please complete all required fields." }, 400);
  }

  if (fields.phone && !phonePattern.test(fields.phone)) {
    return json({ ok: false, error: "Please enter a valid phone number." }, 400);
  }

  const turnstileToken = clean(form.get("cf-turnstile-response"));
  if (env.TURNSTILE_SECRET_KEY && !(await verifyTurnstile(env.TURNSTILE_SECRET_KEY, turnstileToken))) {
    return json({ ok: false, error: "Spam check failed." }, 400);
  }

  if (!env.GOOGLE_SCRIPT_URL || !env.GOOGLE_SCRIPT_SECRET) {
    console.error("Form delivery is missing GOOGLE_SCRIPT_URL or GOOGLE_SCRIPT_SECRET");
    return json({ ok: false, error: "Form delivery is temporarily unavailable. Please try again shortly." }, 503);
  }

  try {
    const response = await fetch(env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow"
    });
    const result = await parseWebhookResponse(response);

    if (!response.ok || !result.ok || !result.rowSaved || !result.emailSent) {
      console.error("Form delivery was not confirmed", { status: response.status, result });
      return json({ ok: false, error: "Your message could not be confirmed. Please try again." }, 502);
    }

    return json({ ok: true, id: result.id });
  } catch (error) {
    console.error("Form delivery failed", error);
    return json({ ok: false, error: "Submission service unavailable. Please try again." }, 502);
  }
};

function formNameFrom(form: FormData) {
  const source = clean(form.get("source"));
  if (source.endsWith("/clarity-session")) return "Clarity Session Request";
  if (source.endsWith("/startup-pitch")) return "Pitch or Level Up";
  if (source.endsWith("/feedback")) return "Mentoring Feedback";
  return "General Contact";
}

function clean(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim().slice(0, 5000) : "";
}

async function readUpload(form: FormData) {
  const files = form.getAll(uploadFieldName).filter((value): value is File => value instanceof File && value.size > 0);
  if (files.length === 0) return null;
  if (files.length > 1) return json({ ok: false, error: "Please upload only one file." }, 400);

  const file = files[0];
  if (file.size > maxUploadBytes) {
    return json({ ok: false, error: "Please upload a file smaller than 4MB." }, 400);
  }
  if (!allowedUploadExtensions.has(fileExtension(file.name))) {
    return json({ ok: false, error: "Please upload a PDF, presentation, document, or image file." }, 400);
  }

  return {
    name: safeFileName(file.name),
    originalName: file.name,
    size: file.size,
    type: file.type || "application/octet-stream",
    base64: arrayBufferToBase64(await file.arrayBuffer())
  };
}

function arrayBufferToBase64(buffer: ArrayBuffer) {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = "";
  for (let index = 0; index < bytes.length; index += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(index, index + chunkSize));
  }
  return btoa(binary);
}

function safeFileName(name: string) {
  const cleaned = name
    .normalize("NFKD")
    .replace(/[^\w.\-]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^[.-]+|[.-]+$/g, "")
    .slice(0, 120);
  return cleaned || "attachment";
}

function fileExtension(name: string) {
  return name.split(".").pop()?.toLowerCase() || "";
}

async function parseWebhookResponse(response: Response) {
  const text = await response.text();
  try {
    return JSON.parse(text) as { ok?: boolean; rowSaved?: boolean; emailSent?: boolean; id?: number; error?: string };
  } catch {
    return { ok: false, error: "Invalid delivery response" };
  }
}

function isLocalOrigin(origin: string) {
  try {
    const hostname = new URL(origin).hostname;
    return hostname === "localhost" || hostname === "127.0.0.1";
  } catch {
    return false;
  }
}

async function verifyTurnstile(secret: string, token: string) {
  if (!token) return false;
  const body = new FormData();
  body.set("secret", secret);
  body.set("response", token);
  const response = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
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
