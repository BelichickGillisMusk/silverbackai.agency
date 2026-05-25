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
├── /book                         Booking / scheduling  (← /book-schedule-carb-smoke-test-sacramento)
├── /contact                      (← /contact-us)
├── /pricing                      (← /clean-truck-check-rates)
├── /reviews                      (← /reviews-service-area)
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
├── /blog/                        Blog index  (← /clean-truck-check-blog)
│   └── /blog/{post-slug}         40+ posts (← /clean-truck-check-blog/{slug})
│
└── utility: /404, /sitemap.xml, /robots.txt
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
| `/reviews-service-area` | `/reviews` | 301 |
| `/clean-truck-top-review` | `/reviews` | 301 (verify: external review link?) |

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

### Blog (40+ posts)
| Old (live) | New | Type |
|---|---|---|
| `/clean-truck-check-blog` | `/blog/` | 301 |
| `/clean-truck-check-blog/{slug}` | `/blog/{slug}` | 301 (1:1, slug preserved) |
| `/service-locations/{case-study-slug}` | `/blog/{slug}` | 301 (location case studies → blog) |

> Blog decision: **preserve each post's existing slug** under `/blog/` so we only change the parent path once. Full 1:1 list to be generated from the sitemap (all 40+ enumerated, no post left without a redirect).

### Junk / needs decision
| Old (live) | Proposed | Note |
|---|---|---|
| `/new-page` | 301 → `/` or 410 | Squarespace default empty page; should be deindexed |
| `/store`, `/store/p/*` | **OPEN** | Squarespace Commerce — no Cloudflare equivalent. Needs commerce decision (see §5). |

---

## 3. Slug rules (locked)

- Lowercase, hyphenated, no stop-words, no `.html`.
- Money pages stay **flat** (`/obd-clean-truck-check`) — short, keyword-rich, no `/services/` prefix.
- Geo pages standardize on `/locations/{city-or-county}`.
- Hubs are **trailing-slash directories** (`/services/`, `/locations/`); leaf pages have no trailing slash.
- One canonical per page; `www` → apex (or apex → `www`) decided once (live site currently resolves `www`).

---

## 4. Canonical / sitemap / robots strategy

- **Canonical host:** pick one (`www` vs apex) and 301 the other globally at the edge. Live site uses `www`. **Decision needed** — recommend apex `norcalcarbmobile.com` going forward, 301 `www` → apex.
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
| Dynamic bits (booking, contact form) | **Worker** + KV/Queue, or embed Cal.com/Stripe |
| Schema injection | Worker middleware or build-time JSON-LD per template |
| Shared layout/CSS | External `/assets/site.css` + shared header/footer partials (NOT inlined per-page) |
| Commerce (`/store`) | **OPEN** — Stripe Checkout on a Worker (you already have `pay.norcalcarbmobile.com`), or keep store on Squarespace subdomain |

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

## 8. Open decisions blocking final lock

1. **Store/commerce** (`/store`, 4 product SKUs): Stripe-on-Worker, keep on Squarespace, or drop? 
2. **Canonical host:** apex vs `www`.
3. **Repo home:** this builds in `workers/norcalcarbmobile` (the github repo) per your org layout — that repo isn't in this session yet.
4. **`/clean-truck-top-review`** and any external review platform links — keep external or fold into `/reviews`.
5. **`/services/` hub vs flat-only:** confirmed keeping flat money pages + a `/services/` overview hub. OK?

---

*Earlier files `norcal-site/index.html` and `index-pro.html` contain fabricated pricing/phone and a single-page structure — they are superseded by this architecture and should be removed before any build.*
