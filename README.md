# atikmahbub.com

Personal portfolio of Atik Mahbub — built with Next.js (App Router), TypeScript, and Tailwind CSS.
Production site: [https://atikmahbub.com](https://atikmahbub.com)

## Local Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. Updates appear automatically as you edit files inside `src/app`.

## SEO

The canonical origin lives in one place: `SITE_URL` in [`src/constants/constants.ts`](src/constants/constants.ts).
`metadataBase`, `robots.ts`, `sitemap.ts`, and the JSON-LD graph in `layout.tsx` all read from it.

- Open Graph / Twitter cards are generated at build time by `src/app/opengraph-image.tsx` and `src/app/twitter-image.tsx` (1200x630, shared renderer in `src/lib/og.tsx`).
- Icons: `src/app/favicon.ico`, `src/app/icon.svg`, and a generated `src/app/apple-icon.tsx`.
- Google Search Console: `atikmahbub.com` is a **Domain property**, verified by a DNS `TXT` record at the registrar (Spaceship). There is no verification meta tag in the app — don't delete that DNS record, Google re-checks it.

## Deploying

The site is hosted on **Vercel** at [atikmahbub.com](https://atikmahbub.com). Pushes to `main` trigger a build; no extra config is needed beyond the defaults Vercel detects for Next.js.

### Old Netlify site (redirector)

`atikmahbub.netlify.app` stays deployed purely to preserve link equity. It no longer builds the app:

- `netlify.toml` publishes the static [`netlify-redirect/`](netlify-redirect/) shell and declares a wildcard **301** (permanent) redirect: `/*` → `https://atikmahbub.com/:splat`, with `force = true` so it wins over anything else that could be served.
- [`netlify-redirect/_redirects`](netlify-redirect/_redirects) carries the same rule (`301!`) as a fallback.
- A `/google*` rule sits above the wildcard so a Search Console HTML verification file keeps being served — the old property can't use DNS verification, and losing ownership there would block the Change of Address tool.

Verify after deploying:

```bash
curl -sI https://atikmahbub.netlify.app/some/path | grep -iE "^(HTTP|location)"
# expect: HTTP/2 301  +  location: https://atikmahbub.com/some/path
```
