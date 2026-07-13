/// <reference types="astro/client" />

declare namespace Cloudflare {
  interface Env {
    GOOGLE_SCRIPT_URL: string;
    GOOGLE_SCRIPT_SECRET: string;
    CAL_PAGE_PASSWORD: string;
    CAL_AUTH_SECRET: string;
    TURNSTILE_SECRET_KEY?: string;
    DUB_API_KEY?: string;
  }
}
