# Cloudflare Domain Migration for piraiee.com

Goal: move DNS serving to Cloudflare without breaking email or connected services.

## Do Not Touch

- Do not change `yelowapp`.
- Do not change `rootin`.
- Do not edit machine-level hosts files.
- Do not remove existing MX, SPF, DKIM, DMARC, or verification records.

## Before Nameserver Change

In Squarespace Domains, export or screenshot every DNS record for `piraiee.com`.

Copy these records into Cloudflare DNS first:

- `MX`
- `TXT` records for SPF, DKIM, DMARC, Google verification, and service verification
- Existing `CNAME` records
- Existing `A` or `AAAA` records
- Any subdomain records used by apps or email

## Cloudflare Pages Custom Domains

After the Pages project is deployed:

1. Cloudflare dashboard -> Workers & Pages -> `piraiee-com`
2. Custom domains
3. Add `piraiee.com`
4. Add `www.piraiee.com`
5. Let Cloudflare create the required records

## Squarespace Domains

Only after Cloudflare DNS contains all existing records:

1. Open Squarespace Domains for `piraiee.com`
2. Change nameservers to the two nameservers Cloudflare provides
3. Wait for propagation
4. Test website and email

## Validation

Run:

```sh
dig piraiee.com NS
dig piraiee.com MX
dig piraiee.com TXT
dig www.piraiee.com CNAME
```

Send a test email to and from `ahmad@piraiee.com` before cancelling anything in Squarespace.
