import { posts } from "../data/posts";
import { site } from "../data/site";

const staticPages = ["", "about/", "startups/", "books/", "deals/", "blog/", "contact/"];
const postPages = posts.map((post) => `blog/${post.slug}/`);
const urls = [...staticPages, ...postPages];

export function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (path) => `  <url>
    <loc>${site.url}/${path}</loc>
    <changefreq>${path.startsWith("blog/") ? "monthly" : "weekly"}</changefreq>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
