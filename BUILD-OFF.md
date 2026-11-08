# Build-off

Bones are in place so the real site can grow after the apex Grok route is detached. None of the items below are done in this pass. Do not invent clients, money, VIN data, or live keys to “finish” them.

## Already buildable

- Public routes and home anchors (`src/lib/router.ts`, `src/config/site.ts`).
- Lane list shared by the home cards, `/services`, and intake (`src/content/lanes.ts`).
- Proof slots with no fabricated results (`/proof`).
- Contact UI plus a no-op `POST /api/contact`.
- Organization and WebSite JSON-LD, per-route titles, `public/robots.txt`, `public/sitemap.xml`.
- Soft-open face behind a flag. Default `/` is the brand board (`BrandFront`). `SilverbackFront` stays available at `/?face=live` and on the Counsel and Compliant lanes.

## Next chunks

1. **Lane depth.** Counsel, Blue Collar, and Compliant pages still carry the current front-door copy. Next pass can add offers, process, and FAQs per lane without a new visual system. Keep BlueCollar and SilverbackFront styling.

2. **CRM handoff.** `/api/contact` validates and returns `delivery: "noop"`. The next step is the destination Bryan names (inbox, CRM, or sheet). Wire `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `RESEND_API_KEY` only after that choice. Do not add a key to the repo.

3. **Stripe — HOLD.** No checkout, no prices beyond what is already printed on the legacy workshop, and no new payment links until Bryan says GO.

4. **NAP and legal.** Fill `site.nap` street fields when there is a real published address. JSON-LD omits `address` while those strings are empty. Replace `/privacy` and `/terms` after counsel review. They are drafts.

5. **Proof.** Replace a stub on `/proof` only with a story the operator has cleared. No sample metrics.

6. **Apex detach — Bryan / Silver GO.** `www` can keep serving this build. Pointing apex `silverbackai.agency` here means removing the separate Cloudflare route for the Grok Me app. That is not a change in this repo. Do not touch DNS, Workers routes, or Vercel domains from a scaffold PR.

7. **Soft-open decision.** Leave `VITE_SOFT_OPEN` unset or `false` so `/` stays the full agency home. Turn the flag on only if the holding face should be the temporary front.

8. **Sitemap drift.** `npm run check` fails if `public/sitemap.xml` disagrees with routes marked `sitemap: true`. Update both together when a route is added.

## Still needs Bryan GO or keys before apex points here

- Cloudflare API token and the go-ahead to deploy `main` (Silver owns live attach).
- Explicit GO before any DNS or route change on apex.
- `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` if intake should actually send.
- A real street address, if local SEO should publish one.
- Counsel review of privacy and terms.
- Which CRM, if any, receives intake.
- Stripe stays on hold.
