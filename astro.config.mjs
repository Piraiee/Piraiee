import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://piraiee.com",
  output: "server",
  security: {
    allowedDomains: [
      { protocol: "https", hostname: "piraiee.com" }
    ]
  },
  adapter: cloudflare({
    imageService: "compile"
  })
});
