# NorCal CARB Mobile — Migration Architecture & Redirect Map

**Status:** DRAFT FOR APPROVAL — finalize before any Cloudflare migration
**Source of truth:** Live Squarespace site (norcalcarbmobile.com) crawled 2026-05-25
**Target:** Cloudflare Pages + Workers (KV, edge redirects, schema injection)

> Per your demand: finalize **slugs + architecture + redirect map + hierarchy** → migrate **once** → then expand (industries, compliance, location clusters, fleet, schema, FAQ entities). **Nothing gets built/launched until this doc is approved.**

---

## 0. Real business facts (locked — replaces earlier placeholders)

| Field | Value |
|---|---|
| Phone | **916-890-4427** |
| OBD / Clean Truck Check | **$75** |
| Smoke Opacity (OVI / J1667) | **$199** |
| Motorhome smoke test | **$250** |
| Core SEO term | "Clean Truck Check" (CTC), "Smoke Opacity / J1667" |
| Primary region | Sacramento, Bay Area, San Joaquin, North Bay, Butte, Central Valley |
| Expansion targets | San Diego County, Orange County |

---

## 1. Final page hierarchy

```
/                                 Home
├── /about                        (← /team)
├── /book                         Booking + Stripe Checkout invoice  (← /book-schedule-carb-smoke-test-sacramento)
├── /contact                      (← /contact-us)
├── /pricing                      (← /clean-truck-check-rates)
├── /clean-truck-check-reviews    Reviews (SEO slug)  (← /reviews-service-area, /clean-truck-top-review)
│
├── SERVICES (money pages — flat slugs)
│   ├── /services/                Services hub  (← /services-mobile-ovi-smoke)
│   ├── /obd-clean-truck-check    OBD CTC $75   (← /clean-truck-check)
│   ├── /opacity-smoke-test       J1667 $199    (← /smoke-opacity-test-near-me)
│   ├── /motorhome                Motorhome $250 (KEEP slug — ranks)
│   ├── /fleet-testing            NEW
│   ├── /why-mobile-testing       NEW (conversion/SEO)
│   └── /same-day-testing         NEW (conversion/SEO)
│
├── /locations/                   Locations hub  (← /service-locations index)
│   ├── /locations/sacramento
│   ├── /locations/san-joaquin-county
│   ├── /locations/butte-county
│   ├── /locations/napa
│   ├── /locations/north-bay
│   ├── /locations/east-bay
│   ├── /locations/bay-area
│   ├── /locations/tracy-livermore
│   ├── /locations/fresno
│   ├── /locations/hayward
│   ├── /locations/fairfield
│   ├── /locations/san-jose
│   ├── /locations/lodi
│   ├── /locations/roseville
│   ├── /locations/antioch
│   ├── /locations/san-diego       (expansion)
│   └── /locations/orange-county   (expansion)
│
├── /industries/                  Industries hub  NEW
│   ├── /industries/agriculture   (← /agricultural-vehicles-clean-truck-check)
│   ├── /industries/construction  NEW
│   ├── /industries/trucking-logistics  NEW
│   ├── /industries/government-municipal  NEW
│   └── /industries/motorhome-rv  NEW (cross-links /motorhome)
│
├── /compliance/                  Compliance hub  NEW
│   ├── /compliance/what-is-clean-truck-check  (← /what-is-clean-truck-check)
│   ├── /compliance/penalties-deadlines        (← /carb-penalties-deadlines)
│   ├── /compliance/obd-vs-opacity             NEW
│   └── /compliance/deadlines-calculator       NEW (optional)
│
├── /resources/                   Resources hub  (← /carb-resources)
│   ├── /resources/faqs           (← /faqs-carb-clean-truck-check-mobile)
│   ├── /resources/glossary       (← /qa-and-glossary)
│   ├── /resources/carb-mobile-app (← /carb-mobile-app)
│   └── /resources/engine-family-lookup  NEW (VECI / test-group helper)
│
└── BLOG — lives on WordPress (already exported).
    /clean-truck-check-blog and /clean-truck-check-blog/{slug} are LIVE and
    PRESERVED unchanged via Cloudflare reverse-proxy. NOT migrated, NOT remapped,
    NOT redirected. No /blog/ slug introduced (would orphan live links).

utility: /404, /sitemap.xml, /robots.txt
```

---

## 2. Redirect map (301 — old Squarespace → new Cloudflare)

### Core / conversion
| Old (live) | New | Type |
|---|---|---|
| `/home` | `/` | 301 |
| `/team` | `/about` | 301 |
| `/contact-us` | `/contact` | 301 |
| `/book-schedule-carb-smoke-test-sacramento` | `/book` | 301 |
| `/clean-truck-check-rates` | `/pricing` | 301 |
| `/reviews-service-area` | `/clean-truck-check-reviews` | 301 |
| `/clean-truck-top-review` | `/clean-truck-check-reviews` | 301 |

### Services
| Old (live) | New | Type |
|---|---|---|
| `/clean-truck-check` | `/obd-clean-truck-check` | 301 |
| `/smoke-opacity-test-near-me` | `/opacity-smoke-test` | 301 |
| `/services-mobile-ovi-smoke` | `/services/` | 301 |
| `/motorhome` | `/motorhome` | KEEP (no redirect) |
| `/agricultural-vehicles-clean-truck-check` | `/industries/agriculture` | 301 |

### Compliance / resources
| Old (live) | New | Type |
|---|---|---|
| `/what-is-clean-truck-check` | `/compliance/what-is-clean-truck-check` | 301 |
| `/carb-penalties-deadlines` | `/compliance/penalties-deadlines` | 301 |
| `/carb-resources` | `/resources/` | 301 |
| `/faqs-carb-clean-truck-check-mobile` | `/resources/faqs` | 301 |
| `/qa-and-glossary` | `/resources/glossary` | 301 |
| `/carb-mobile-app` | `/resources/carb-mobile-app` | 301 |

### Locations
| Old (live) | New | Type |
|---|---|---|
| `/service-area-sacramento-carb-testing` | `/locations/sacramento` | 301 |
| `/service-area-san-joaquin-county-mobile-testing` | `/locations/san-joaquin-county` | 301 |
| `/service-area-butte-county-clean-truck-check` | `/locations/butte-county` | 301 |
| `/clean-truck-check-napa-st-helena-calistoga` | `/locations/napa` | 301 |
| `/north-bay-carb-mobile-testing` | `/locations/north-bay` | 301 |
| `/east-bay-mobile-carb-testing` | `/locations/east-bay` | 301 |
| `/clean-truck-check-bay-area` | `/locations/bay-area` | 301 |
| `/tracy-livermore-clean-truck-check-j1667` | `/locations/tracy-livermore` | 301 |
| `/clean-truck-check-fresno` | `/locations/fresno` | 301 |
| `/clean-truck-check-hayward` | `/locations/hayward` | 301 |
| `/clean-truck-check-fairfield` | `/locations/fairfield` | 301 |
| `/san-jose-mobile-carb-testing` | `/locations/san-jose` | 301 |
| `/clean-truck-check-lodi` | `/locations/lodi` | 301 |
| `/clean-truck-check-roseville` | `/locations/roseville` | 301 |
| `/carb-mobile-clean-truck-check-antioch-california` | `/locations/antioch` | 301 |
| `/clean-truck-check-san-diego` | `/locations/san-diego` | 301 |
| `/clean-truck-check-orange-county` | `/locations/orange-county` | 301 |
| `/service-locations` (index) | `/locations/` | 301 |

### Blog — PRESERVE (WordPress, no redirects)
| Old (live) | Action | Note |
|---|---|---|
| `/clean-truck-check-blog` | **KEEP** | Reverse-proxied to WordPress origin |
| `/clean-truck-check-blog/{slug}` | **KEEP** | All 40+ posts unchanged — URLs stay live |
| `/service-locations/{case-study-slug}` | **CONFIRM** | If exported to WP too → proxy/keep; else 301 → `/locations/` |

> Blog is already exported to WordPress and its URLs are live. We do **not** touch them. A Cloudflare Worker / Pages Function intercepts `/clean-truck-check-blog/*` and proxies to the WP origin, so the static site serves everything else. Excluded from `_redirects` entirely.

### Store removed → Stripe Checkout
| Old (live) | New | Type |
|---|---|---|
| `/store` | `/book` | 301 |
| `/store/p/*` | `/book` | 301 |
| `/new-page` | `/` | 301 (junk Squarespace page; deindex) |

> No storefront. Payment is via **Stripe Checkout / invoices we generate** (Worker at `pay.norcalcarbmobile.com` or embedded on `/book`).

---

## 3. Slug rules (locked)

- Lowercase, hyphenated, no stop-words, no `.html`.
- Money pages stay **flat** (`/obd-clean-truck-check`) — short, keyword-rich, no `/services/` prefix.
- Geo pages standardize on `/locations/{city-or-county}`.
- Hubs are **trailing-slash directories** (`/services/`, `/locations/`); leaf pages have no trailing slash.
- One canonical per page; `www` → apex (or apex → `www`) decided once (live site currently resolves `www`).

---

## 4. Canonical / sitemap / robots strategy

- **Canonical host:** LOCKED → **apex `norcalcarbmobile.com`**. Global 301 `www.*` → apex at the edge. (Live site currently serves `www`, so this is a one-time host migration handled by the first rule in `_redirects`.)
- **Single XML sitemap** generated at build from the page manifest; submit in Search Console immediately post-launch.
- **robots.txt** allows all, points to `/sitemap.xml`.
- Every migrated page carries a self-referential `<link rel="canonical">`.
- No page indexed in two places (kill `/home` duplicate).

---

## 5. Cloudflare implementation plan

| Concern | Mechanism |
|---|---|
| Static pages | **Cloudflare Pages** (pre-rendered HTML per route — fast mobile) |
| Redirects | `_redirects` file (Pages) OR Worker map in **KV** for the ~80 entries |
| Booking / payment | **Stripe Checkout** invoices we generate (Worker at `pay.norcalcarbmobile.com`, linked from `/book`). No storefront. |
| Blog | **Reverse-proxy** `/clean-truck-check-blog/*` → WordPress origin via Pages Function. Live URLs untouched. |
| Contact form | **Worker** + KV (or email forward) |
| Schema injection | Build-time JSON-LD per template |
| Shared layout/CSS | External `/assets/site.css` + shared header/footer partials (NOT inlined per-page) |

---

## 6. Schema / structured-data plan (phase 2, post-migration)

- `LocalBusiness` / `AutoRepair` on home + each `/locations/*` (with `areaServed`).
- `Service` schema on each money page (`/obd-clean-truck-check`, `/opacity-smoke-test`, `/motorhome`, `/fleet-testing`).
- `FAQPage` on `/resources/faqs` and FAQ blocks across location/service pages (FAQ entities).
- `BlogPosting` on each `/blog/{slug}`.
- `BreadcrumbList` sitewide.

---

## 7. Migration sequence (honors "move once")

1. **Approve this doc** (slugs + redirects + hierarchy). ← we are here
2. Build all pages to parity on Cloudflare (staging), real content migrated, no thin pages.
3. Load full `_redirects` / KV map; validate every old URL resolves 301 → new.
4. Generate sitemap; QA canonicals; crawl staging for 404s/duplicates.
5. Cutover DNS **once**; submit sitemap; monitor Search Console for crawl errors.
6. **Then** expand: industries content, compliance cluster, more location pages, fleet content, schema, FAQ entities.

---

## 8. Decisions — LOCKED (2026-05-25)

1. **Store/commerce:** ✅ No storefront. Stripe Checkout invoices we generate. `/store*` → `/book`.
2. **Canonical host:** ✅ Apex `norcalcarbmobile.com`; 301 `www` → apex.
3. **Repo home:** ✅ Best target is `workers/norcalcarbmobile` (github repo). Not in this session, so building the relocatable Cloudflare Pages project under `silverbackai.agency/norcal-site/` (clean structure: `_redirects`, `/assets/`, `functions/`) ready to drop into that repo.
4. **Reviews slug:** ✅ `/clean-truck-check-reviews` (SEO). Old review URLs 301 there.
5. **`/services/` hub + flat money pages:** ✅ confirmed.
6. **Blog:** ✅ Stays on WordPress; live URLs preserved via reverse-proxy.

### Remaining inputs needed (not blocking the build of the rest)
- **WordPress origin hostname** for the `/clean-truck-check-blog/*` proxy (placeholder used until provided).
- **`/service-locations/*`** case studies: also in WordPress, or 301 → `/locations/`?
- **Logo image files** to drop into `/assets/logos/` (exact brand hex pending the files).

---

*Earlier files `norcal-site/index.html` and `index-pro.html` contain fabricated pricing/phone and a single-page structure — they are superseded by this architecture and should be removed before any build.*
