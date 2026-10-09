# Silverback AI — silverbackai.agency

This is the agency site for Silverback AI: Counsel, Blue Collar, and Compliant. It is a Vite + React + Tailwind app. The public front door is `BrandFront`. `SilverbackFront` still serves Counsel, Compliant, and the umbrella home at `/?face=live`. `BlueCollarHome` is the Blue Collar lane. The questionnaire and the older workshop live at `/questionnaire`, `/resources`, `/app`, and `/legacy`.

`www.silverbackai.agency` already serves this project. The apex host `silverbackai.agency` is a separate Cloudflare route (a Grok Me app). This repo does not change DNS, Cloudflare routing, Vercel domains, or run a deploy.

## Run locally

Prerequisites: Node.js 20+.

```bash
npm install
cp .env.example .env.local   # optional
npm run dev                  # http://localhost:3000
```

`GEMINI_API_KEY` is only for the legacy workshop hero image. The agency pages do not need it.

Checks:

```bash
npm run check    # route table, sitemap, contact stub
npm run lint     # tsc --noEmit
npm run build    # writes dist/
```

## Routes

| Path | What it is |
| --- | --- |
| `/` | Brand board (`BrandFront`). Approach anchor: `#approach`. |
| `/services` | Lane index. |
| `/counsel`, `/blue-collar`, `/compliant` | The three operating lanes. |
| `/proof` | Case-study stubs. Empty until a real story is cleared. |
| `/contact` | Intake form. POSTs JSON to `/api/contact`. |
| `/privacy`, `/terms` | Draft legal stubs. Not notice and not a contract. |
| `/soft-open` | Optional holding face. Always previewable. |
| `/questionnaire`, `/resources`, `/app`, `/legacy` | Questionnaire and the legacy workshop. Not the public front. |

`/?face=live` shows the `SilverbackFront` umbrella home (anchors `#lanes`, `#operating-layer`, `#behind-the-scenes`, `#workshop`), even if the soft-open flag is on. `?ff_enable_soft_open=1` or `VITE_SOFT_OPEN=true` swaps `/` to the soft-open face. Neither face is deleted. The Pages deploy on `main` still copies `public/index.html` over the built app entry, so production `/` is that static brand page.

Copy, NAP, CTAs, and the route table live in `src/config/site.ts` and `src/content/`. The street address is blank on purpose.

## Intake

`POST /api/contact` with `Content-Type: application/json`:

```json
{
  "name": "required",
  "email": "required",
  "phone": "optional",
  "company": "optional",
  "lane": "counsel | blue-collar | compliant | agency | other",
  "message": "required",
  "sourcePath": "optional",
  "website": "honeypot, must be empty"
}
```

A valid body returns `202` with `delivery: "noop"`. Nothing is emailed. The handler does not read provider secrets.

| Variable | Where | Purpose |
| --- | --- | --- |
| `VITE_CONTACT_ENDPOINT` | client build | Defaults to `/api/contact`. |
| `VITE_SOFT_OPEN` | client build | `true` shows the soft-open face on `/`. |
| `CONTACT_TO_EMAIL` | Pages secret, later | Inbox. Not read by the stub. |
| `CONTACT_FROM_EMAIL` | Pages secret, later | From address. Not read by the stub. |
| `RESEND_API_KEY` | Pages secret, later | Mail provider. Do not invent a key. Not read by the stub. |

Local dev answers `/api/contact` from the Vite plugin. Cloudflare Pages uses `functions/api/contact.ts`. Both call `src/server/contactHandler.ts`.

## Branch and PR flow

Work on a branch. Open a pull request into `main`. Do not merge, and do not deploy, until Bryan says the build should ship.

Pushing `main` runs `.github/workflows/deploy.yml`, which builds `dist/` and deploys Cloudflare Pages project `silverback-site`. That workflow needs `CLOUDFLARE_API_TOKEN`. Live attach of the hostname is owned by Silver after that token is available. A scaffold PR must stay a PR.

## Deploy path

Cloudflare Pages. `wrangler.toml` sets `pages_build_output_dir = "dist"`. The static host rewrite is `public/_redirects` (`/* /index.html 200`). Pages Functions take `/api/*` before that rewrite.

Do not run `wrangler pages deploy` from a scaffold branch. Do not edit DNS to point apex at this project.

Next buildable chunks are listed in [BUILD-OFF.md](BUILD-OFF.md).
