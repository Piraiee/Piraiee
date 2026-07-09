# piraiee.com

Independent rebuild of piraiee.com for Cloudflare Pages. This project is intentionally isolated from `yelowapp`, `rootin`, and any other local projects.

## Stack

- Astro
- Cloudflare Pages
- Cloudflare Pages Functions
- Google Sheets through Google Apps Script
- Optional Cloudflare Turnstile spam protection

## Local Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
```

## Deploy

Connect the GitHub repository `Piraiee/Piraiee` to Cloudflare Pages.

- Framework preset: Astro
- Build command: `npm run build`
- Build output: `dist`
- Project name: `piraiee-com`

Or deploy from the CLI:

```sh
npm run deploy
```

## Environment Variables

Set these in Cloudflare Pages:

- `GOOGLE_SCRIPT_URL`
- `TURNSTILE_SECRET_KEY` if Turnstile is enabled
- `ALLOWED_ORIGIN=https://piraiee.com`

Never commit secrets to git.
