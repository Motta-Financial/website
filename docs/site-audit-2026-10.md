# Site audit — October 2026

Scope: performance, scripts, animations, assets, SEO, accessibility, security hygiene.
Everything below was measured against production builds (`next build` + `next start`)
in headless Chromium, comparing the site as it was before this branch with the result.

## Results

All figures: 63 indexable pages, mobile viewport (390px, 2x), cold cache.

| | Before | After |
|---|---|---|
| Median page weight, at load | 750 KB | **534 KB** (-29%) |
| Mean page weight, at load | 1,055 KB | **559 KB** (-47%) |
| All 63 pages, fully scrolled | 70.7 MB | **40.7 MB** (-42%) |
| Pages over 1 MB / over 2 MB | 11 / 3 | **0 / 0** |
| Heaviest page | 10.0 MB (`/partnerships/suffolk-seed`) | 944 KB (`/news/blog`) |
| Fonts per page | 244 KB | **96 KB** |
| CSS per page (transferred) | 92 KB | **77 KB** |
| JavaScript per page (median) | 160 KB | **125 KB** |
| Failed (4xx/5xx) requests across the 63 pages | 27 | **0** |

Slow-4G (1.6 Mbps, 150 ms RTT) with a 4x CPU slowdown, median of three cold loads:

| Page | LCP before | LCP after | FCP before | FCP after |
|---|---|---|---|---|
| `/` | 4.7 s | 2.9 s | 2.6 s | 1.6 s |
| `/news` | 6.1 s | 3.1 s | 2.4 s | 1.4 s |
| `/about/team` | 4.2 s | 3.1 s | 2.2 s | 1.5 s |
| `/partnerships/suffolk-seed` | 28.7 s | 2.0 s | 3.2 s | 1.6 s |

SEO: every indexable page now has a unique title, description and canonical (21 news
pages shared one title and 31 pages shared the root description before); `robots.txt`,
`sitemap.xml` (63 pages) and structured data exist; 31 leftover template and utility
routes are `noindex`.

## What changed (commits on this branch)

- **Images** — the 27 images delivered on live pages were resized to ~2x their largest
  rendered width: 17.99 MiB -> 2.21 MiB. Slideshow/cards/headshots load lazily; the hero
  and banner background is preloaded. Two stray debug screenshots were removed from
  `public/`. `scripts/optimize-image.mjs` shrinks new photos before they are added.
- **CSS / fonts** — icon fonts trimmed from 168 KB to 4 KB (25 icons actually used;
  regenerate with `scripts/build-fa-subset.mjs` after using a new icon). `animate`,
  `aos`, `magnific`, `odometer` CSS (0% used on live pages) load only for the leftover
  template sections. Site-wide `prefers-reduced-motion` fallback.
- **JavaScript** — fixed a scroll-listener leak in `Layout` (one more per page visited),
  the nav dropdown prefetching hidden pages on every desktop load (21-31 prefetch requests
  per page -> 5-18; e.g. `/about` 105 -> 32 KB of prefetches), the back-to-top
  button showing at the top of every page, and the home hero's Swiper (34 KB) being
  pulled into pages that never show it.
- **SEO** — see Results; plus `X-Robots-Tag: noindex` for template routes
  (`lib/noindex-routes.js` is the single list), a real 308 for
  `/services/accounting/bookkeeping-small-business`, and the literal `·` text that
  rendered on 13 news pages.
- **Accessibility** — visible keyboard focus (the theme removed all outlines); the mobile
  menu is operable by keyboard and no longer leaves invisible tab stops; dropdowns open
  on focus; the top banner has valid ARIA, a pause button and respects reduced motion.
- **Home hero** (earlier commits) — slogan slide + story rotation; also fixed autoplay
  that stalled after one slide and CTAs that could not be clicked.
- **Hardening / dependencies** — public form endpoints require `application/json` and
  cap body size; Next 14.0.1 -> 14.2.35 (fixes the RSC and image-optimizer advisories
  that apply here); unused `mammoth` removed.

## Verification performed

Full-site pixel comparison of every indexable page at desktop and phone width (old build
vs new; all differences explained: sidebar link removed, `·` text fixed, photos
re-encoded); keyboard and screen-reader-facing checks for the nav, banner and hero;
real-time hero rotation, click-through of every CTA, reduced-motion behaviour; per-route
metadata crawl; API rejection paths; the leftover template pages still animate.

## Needs your decision (not changed)

Roughly in order of value:

1. **Delete the 27 leftover "Apexa" template routes** (`/index-2…5`, `/about-2…5`,
   `/services-2…5`, `/services-details*`, `/team-2…4`, `/team-details`, `/blog*`,
   `/project-details`, `/error`, `/test`) and `/team`, `/team/dat-le`, `/team/mark-dwyer`
   (placeholder content, fake phone/address). They are `noindex` now but still deployed.
   Deleting them also removes dead dependencies and ~10 MB of demo-only images.
2. **Canonical domain.** Code references both `motta.cpa` and `www.mottafinancial.com`.
   Canonicals/sitemap use `NEXT_PUBLIC_SITE_URL`, else Vercel's production domain. Set
   `NEXT_PUBLIC_SITE_URL` to pin it.
3. **Lost-lead risk in `/api/alfred-demo`**: it answers `success: true` when the Hub
   call fails and only `console.log`s the lead. Confirm the Hub endpoint exists; if it
   doesn't, every demo request is currently lost.
4. **Service pages auto-scroll** ~3 s after load (`ScrollToContent`). Intentional, but it
   counts as 0.148 CLS ("poor") and moves the page under the visitor.
5. **Phone number**: header shows (857) 333-2787, footer/contact show (702) 514-6055.
   Decide, then add `telephone` to the structured data. Header5 also links a different
   Instagram handle than `lib/socials.js`.
6. **Privacy Policy / Terms / accessibility statement** are not on the site (legal copy
   needed); two of three consent checkboxes in the intake form are pre-checked.
7. **Spam/abuse protection** for the public form proxies (rate limit or Turnstile);
   they also present the Hub's trusted `Origin`, so nothing downstream checks the caller.
8. **Security headers**: CSP (start Report-Only), HSTS, framing policy. Needs an inventory
   of third-party origins (Calendly, YouTube, Hub avatars) before enforcing.
9. **Artwork**: a 1200x630 Open Graph image, and square 512/180px favicons (the current
   ones are 502x306).
10. **Next 15.5.x** — 21 further advisories (per the dependency audit) are fixed only there;
    a larger migration. `swiper` 11 has a prototype-pollution advisory fixed in 12.x
    (not reachable here: options are constants).

## Opportunities identified but not done

- ~11 MiB of images unreferenced anywhere, 36.7 MiB of service hero JPEGs whose
  `heroImage` prop is never rendered, and 85 debug PNGs (45 MiB) tracked at the repo root.
  Safe to delete; kept because they are your files.
- 17 `<style jsx>` blocks on news/partnership pages: moving them to CSS saves ~15 KB JS
  on 25 routes. Make `Layout`'s header/footer a server component (~220 fewer hydrated
  nodes). Replace Swiper in the hero with a CSS crossfade (-34 KB on the home page).
- Only 13% of the global CSS (Bootstrap 4% used, theme `main.css` 16%) is ever used. A
  build-time purge would cut critical-path CSS further; it needs a visual-regression gate
  like the one used here.
- 863 of 1,012 `<img>` tags have no `width`/`height`.
- 25 pages render two `<h1>`s (banner + page heading).
- The top banner's pause control is hidden below the breakpoint where its dots are, so
  phone users can only pause it by hovering/focusing.
- `package-lock.json` is stale (`npm ci` fails); `pnpm-lock.yaml` is the live lockfile.
  The GitHub workflow runs `npm ci` and `npm publish`.

## Caveats

- Chromium only; Safari and Firefox were not available. `text-wrap: balance`, `inert`
  and `aspect-ratio` are used with fallbacks, but are untested there.
- Google Fonts are unreachable from the audit sandbox, so text rendered in fallback fonts
  (real Outfit/Inter were injected for layout checks). Remote Vercel Blob headshots also
  could not load there.
- Production header/caching behaviour on Vercel (it may add or override headers) was not
  verified; only `next start` locally.
- Hub endpoints (rate limits, CORS, idempotency) were not exercised.

## Disclosures

- During the audit, one automated reviewer sent two deliberately malformed test
  requests (`{}` and `null`) through the site's own contact and intake proxies to the
  live Hub. Both were rejected (HTTP 400 and 500); no record was created.
- A 5 MB Python wheel was left in the repo root by a reviewer tool; it was deleted and
  never committed.
