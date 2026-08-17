# The IQ Collective — marketing site

Static single-page marketing site for The IQ Collective: preconstruction and
pipeline systems for design & build / commercial fit-out firms at £1M–£5M+.

Next.js 14 (App Router) · TypeScript · Tailwind CSS · no CMS, no backend.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts: `npm run build`, `npm start`, `npm run lint`, `npm run typecheck`.

## Deploying to Vercel

Import the GitHub repo in Vercel and accept the detected defaults — framework
Next.js, build `next build`, no environment variables required. Once the
production domain is live, update `SITE_URL` in `lib/config.ts` so the canonical
and Open Graph URLs resolve correctly.

## Source of truth

- `iq-collective-website-copy.md` — the approved copy. It is used verbatim,
  section by section, in the order given.
- `iq-collective-design.html` — the approved visual design. The React
  components re-platform it; layout, spacing rhythm and section order match it.

Both files are kept in the repo deliberately. Change the copy there first, then
mirror it in the components.

## Structure

```
app/
  layout.tsx             fonts, metadata (title/description/OG), <noscript> reveal override
  page.tsx               section order for the single page
  globals.css            design tokens as CSS vars, base layer, focus + motion rules
  icon.svg               favicon PLACEHOLDER
  opengraph-image.tsx    OG image PLACEHOLDER (generated at build time)
components/              one component per section, plus components/ui primitives
lib/config.ts            BOOKING_URL, anchors, contact details
lib/phases.ts            the four programme phases (hero teaser + Process section)
tailwind.config.ts       design tokens as theme extensions
```

Design tokens live in `tailwind.config.ts` (and mirrored as CSS custom
properties in `app/globals.css` for gradients and masks). Use the Tailwind
classes — `bg-ink`, `text-paper-dim`, `border-hair`, `text-bronze` — rather than
hex values in components.

## Before launch — outstanding items

1. **Booking URL** — `BOOKING_URL` in `lib/config.ts` is set to `#audit`. The
   old GoHighLevel link is wired into the residential offer's pipeline and must
   not be reused; point this at the new D&B booking flow.
2. **Founder name** — `[Founder name]` appears twice as a visible placeholder,
   in `components/Positioning.tsx` and `components/TrackRecord.tsx`. Each is
   marked with a `TODO` comment.
3. **Favicon** — `app/icon.svg` is a stand-in built from the logo mark. Replace
   with the real IQ Collective mark, and update `components/ui/Logo.tsx` to
   match.
4. **OG image** — `app/opengraph-image.tsx` generates a placeholder from the
   design tokens. Replace with the real 1200×630 asset (or delete the file and
   drop `app/opengraph-image.png` in its place).
5. **Canonical URL** — set `SITE_URL` in `lib/config.ts` to the live domain.

## Accuracy requirement — the Track Record section

The £3.38M and £831K figures are **residential division** results. Each stat
carries the caption `Residential division client · 2026`, and that caption is a
factual accuracy requirement, not styling: without it the page implies D&B /
commercial results the firm cannot yet evidence. Do not remove it, generalise
it, or reword the surrounding copy so the figures read as D&B wins. No figures
may be added to that section that are not in the copy file.

## Notes on behaviour

- Section headers fade in on scroll (200ms, 8px). The effect is driven by a
  single shared scroll listener with a rect check — deliberately not an
  IntersectionObserver, because a fast flick-scroll can carry an element from
  below the viewport to above it between observer samples and leave the heading
  permanently invisible.
- `prefers-reduced-motion: reduce` disables smooth scrolling, the reveal, and
  every transform-based hover.
- Without JavaScript the reveal's hidden state is neutralised by a `<noscript>`
  block in the layout, so all content is readable.
- Focus is never removed, only replaced: a 2px bronze outline, switching to
  paper on the filled bronze buttons.

Verified at 375px, 768px and 1440px with no horizontal overflow at any width.
