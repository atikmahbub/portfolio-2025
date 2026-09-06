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

`atikmahbub.netlify.app` stays deployed purely to preserve link equity. Every path
returns a **301** to the same path on the new domain.

`@netlify/plugin-nextjs` is installed on that site **through the Netlify UI**
(`origin: ui` in the build log), so it runs regardless of what `netlify.toml`
says, and it fails the build if the publish directory has no Next.js output.
`netlify.toml` therefore still builds the app and publishes `.next` — nothing of
it is ever served, because the wildcard redirect is `force = true`.

- `/google*` is rewritten (200) ahead of the wildcard so a Search Console HTML
  verification file in `public/` stays reachable. The old property cannot use DNS
  verification, and losing ownership there would block the Change of Address tool.
- [`netlify-redirect/`](netlify-redirect/) is a standalone shell (`_redirects` +
  `index.html`) that can be drag-and-dropped onto Netlify for an instant deploy
  with no build.

**Cleaner end state:** remove the Next.js plugin in *Project configuration →
Build & deploy → Build plugins*, then switch `netlify.toml` to
`publish = "netlify-redirect"` with a no-op build command. That skips a pointless
Next.js build on every deploy.

Verify after deploying:

```bash
curl -sI https://atikmahbub.netlify.app/some/path | grep -iE "^(HTTP|location)"
# expect: HTTP/2 301  +  location: https://atikmahbub.com/some/path
```
