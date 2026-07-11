/// <reference types="astro/client" />

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

interface Env {
  GOOGLE_SCRIPT_URL?: string;
  TURNSTILE_SECRET_KEY?: string;
  ALLOWED_ORIGIN?: string;
  CAL_PAGE_PASSWORD?: string;
  CAL_AUTH_SECRET?: string;
  DUB_API_KEY?: string;
  PITCH_UPLOADS?: R2BucketLike;
}

interface R2BucketLike {
  put(
    key: string,
    value: ReadableStream,
    options?: {
      httpMetadata?: {
        contentType?: string;
      };
      customMetadata?: Record<string, string>;
    }
  ): Promise<unknown>;
}
