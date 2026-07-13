# Cloudflare Workers migration and rollback

## Preserved rollback state

- Git commit: `682245ae58a98dfa14bee18a5302870d75653ce8`
- Pages project: `piraiee-com`
- Pages deployment: `aeba07b3-d7b8-4a00-a532-42990f506f6d`
- Rollback URL: `https://aeba07b3.piraiee-com.pages.dev`
- Pages domains before migration: `piraiee.com`, `www.piraiee.com`, and `piraiee-com.pages.dev`
- The Pages project and deployment must remain undeleted until the Worker has passed production verification.

## Verified production state

- Worker: `piraiee-com-worker`
- Verified preview URL: `https://piraiee-com-worker.ahmad-3c8.workers.dev`
- Production version: `0030b83c-3c74-4ca2-88b6-4298163dcb3b`
- Worker custom domains: `piraiee.com` and `www.piraiee.com`
- Required secrets are stored as Cloudflare `secret_text` bindings; their values are not present in the repository.
- The Worker session KV binding was provisioned by the Astro Cloudflare adapter.
- Post-cutover checks passed for the live site, form delivery, calendar authentication and embed, origin protection, responsive layouts, and retained Pages rollback URLs.
- Post-cutover mobile Lighthouse: Performance 97, Accessibility 100, Best Practices 100, SEO 100, LCP 1.7 seconds.
- `npm audit --omit=dev`: zero vulnerabilities.
- The Pages project and its deployments remain available; only its two custom-domain attachments were transferred to the Worker.

## Cutover prerequisites

1. The Worker preview URL passes build, security, API, form, calendar, sharing, and responsive-layout tests.
2. All required secrets from the ignored `.dev.vars` file are uploaded to the Worker.
3. The Worker has no custom-domain route before preview verification is complete.
4. A fresh response from the Pages rollback URL is confirmed immediately before cutover.

## Rollback procedure

1. Remove or disable the Worker custom-domain routes for `piraiee.com` and `www.piraiee.com`.
2. Reattach both custom domains to the existing `piraiee-com` Pages project.
3. Verify that `https://piraiee.com` serves the preserved Pages deployment fingerprint from commit `682245a`.
4. Keep the Worker available at its `workers.dev` URL for diagnosis; do not delete either deployment during rollback.

## Secret handling

- Secret values are never printed, copied into documentation, or committed.
- `.dev.vars`, `.env`, and `.env.*` remain ignored.
- Transfer is performed with Wrangler secret commands directly from the ignored local file.
