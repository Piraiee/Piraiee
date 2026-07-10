import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.url.hostname === "www.piraiee.com") {
    const canonicalUrl = new URL(context.url);
    canonicalUrl.hostname = "piraiee.com";

    return context.redirect(canonicalUrl.toString(), 301);
  }

  return next();
});
