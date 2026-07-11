import type { APIRoute } from "astro";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\+?[0-9 ()-]{7,20}$/;
const maxUploadBytes = 4 * 1024 * 1024;
const uploadFieldName = "pitch_deck_file";
const uploadPrefix = "shared/piraiee/files";
const allowedUploadExtensions = new Set(["pdf", "ppt", "pptx", "key", "doc", "docx", "png", "jpg", "jpeg"]);

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime?.env ?? {};
  const allowedOrigin = env.ALLOWED_ORIGIN || "https://piraiee.com";
  const origin = request.headers.get("origin");

  if (origin && origin !== allowedOrigin && !isLocalOrigin(origin)) {
    return json({ ok: false, error: "Invalid origin" }, 403);
  }

  const form = await request.formData();
  const uploadedFile = await handleUpload(form, env);
  if (uploadedFile instanceof Response) return uploadedFile;

  const fields = Object.fromEntries(
    Array.from(form.entries())
      .filter(([key]) => key !== uploadFieldName)
      .map(([key, value]) => [key, clean(value)])
  );
  if (uploadedFile) {
    fields.pitch_deck_file = uploadedFile.key;
    fields.pitch_deck_file_name = uploadedFile.name;
    fields.pitch_deck_file_size = String(uploadedFile.size);
    fields.pitch_deck_file_type = uploadedFile.type;
  }

  const payload = {
    name: clean(form.get("name")),
    email: clean(form.get("email")),
    topic: clean(form.get("topic")),
    message: clean(form.get("message")),
    source: clean(form.get("source")) || "piraiee.com",
    fields,
    uploadedFile,
    page: request.headers.get("referer") || "",
    submittedAt: new Date().toISOString()
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

async function handleUpload(form: FormData, env: Record<string, unknown>) {
  const files = form.getAll(uploadFieldName).filter((value): value is File => value instanceof File && value.size > 0);

  if (files.length === 0) {
    return null;
  }

  if (files.length > 1) {
    return json({ ok: false, error: "Please upload only one file." }, 400);
  }

  const file = files[0];
  if (file.size > maxUploadBytes) {
    return json({ ok: false, error: "Please upload a file smaller than 4MB." }, 400);
  }

  if (!allowedUploadExtensions.has(fileExtension(file.name))) {
    return json({ ok: false, error: "Please upload a PDF, presentation, document, or image file." }, 400);
  }

  const bucket = env.PITCH_UPLOADS as R2BucketLike | undefined;
  if (!bucket?.put) {
    return json({ ok: false, error: "File upload storage is not configured yet." }, 501);
  }

  const key = `${uploadPrefix}/${new Date().toISOString().slice(0, 10)}/${crypto.randomUUID()}-${safeFileName(file.name)}`;
  await bucket.put(key, file.stream(), {
    httpMetadata: {
      contentType: file.type || "application/octet-stream"
    },
    customMetadata: {
      originalName: file.name,
      uploadedAt: new Date().toISOString()
    }
  });

  return {
    key,
    name: file.name,
    size: file.size,
    type: file.type || "application/octet-stream"
  };
}

function safeFileName(name: string) {
  const fallback = "pitch-deck";
  const cleaned = name
    .normalize("NFKD")
    .replace(/[^\w.\-]+/g, "-")
    .replace(/-{2,}/g, "-")
    .replace(/^[.-]+|[.-]+$/g, "")
    .slice(0, 120);

  return cleaned || fallback;
}

function fileExtension(name: string) {
  return name.split(".").pop()?.toLowerCase() || "";
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
