# TAZO frontend

Corporate site for TAZO, rebuilt as a Next.js App Router application.

## Run locally

Requires Node.js 22.13 or newer.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

```sh
npm run typecheck
npm run build
npm run start
```

## Project layout

```text
src/app            Routes, layout, global styles, and the enquiry API
src/components     Page sections grouped by feature
src/content        Products, sectors, testimonials, and company copy
src/config         Site name, navigation, address, and canonical URL
src/lib            Enquiry validation and webhook storage
public             Logos, hero images, and portraits
```

## Enquiries

Set these before enabling the contact form in production:

- `ENQUIRY_WEBHOOK_URL` — HTTPS receiver that stores the payload before returning success
- `ENQUIRY_WEBHOOK_TOKEN` — optional bearer token for that receiver
- `NEXT_PUBLIC_SITE_URL` — canonical production origin

Without a configured receiver, the API returns 503 and the form shows a retryable error.
