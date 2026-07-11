import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request, locals }) => {
  const env = locals.runtime?.env ?? {};
  const allowedOrigin = env.ALLOWED_ORIGIN || "https://piraiee.com";
  const origin = request.headers.get("origin");

  if (origin && origin !== allowedOrigin && !isLocalOrigin(origin)) {
    return json({ error: "Invalid origin" }, 403);
  }

  if (!env.DUB_API_KEY) {
    return json({ error: "Short-link service is not configured" }, 503);
  }

  let payload: { url?: unknown; slug?: unknown };
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  const destination = validateArticleUrl(payload.url);
  if (!destination) {
    return json({ error: "Only piraiee.com writing URLs can be shortened" }, 400);
  }

  const slug = cleanSlug(payload.slug);
  const response = await fetch("https://api.dub.co/links/upsert", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${env.DUB_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      url: destination,
      externalId: `piraiee-writing-${slug}`,
      comments: "Shared from piraiee.com writing",
      doIndex: false
    })
  });

  if (!response.ok) {
    console.error("Dub short-link request failed", response.status, await response.text());
    return json({ error: "Short-link service unavailable" }, 502);
  }

  const result = (await response.json()) as { shortLink?: string };
  if (!result.shortLink) {
    return json({ error: "Short-link service returned an invalid response" }, 502);
  }

  return json({ shortLink: result.shortLink });
};

function validateArticleUrl(value: unknown) {
  if (typeof value !== "string") return "";
  try {
    const url = new URL(value);
    const local = url.hostname === "localhost" || url.hostname === "127.0.0.1";
    if (url.hostname !== "piraiee.com" && !local) return "";
    if (!url.pathname.startsWith("/blog/") || url.pathname === "/blog/") return "";
    url.search = "";
    url.hash = "";
    return local ? url.toString() : `https://piraiee.com${url.pathname}`;
  } catch {
    return "";
  }
}

function cleanSlug(value: unknown) {
  const slug = typeof value === "string" ? value : "article";
  return slug.toLowerCase().replace(/[^a-z0-9-]/g, "-").replace(/-+/g, "-").slice(0, 180) || "article";
}

function isLocalOrigin(origin: string) {
  try {
    const hostname = new URL(origin).hostname;
    return hostname === "localhost" || hostname === "127.0.0.1";
  } catch {
    return false;
  }
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
