# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

This is the personal career portfolio for rjlopez.me: a single page built with Astro 7 and Tailwind CSS 4, using `@tailwindcss/vite` and configured in CSS with no `tailwind.config`. The output is fully static with no server adapter. It deploys to GitHub Pages through `.github/workflows/deploy.yml` on every push to `main`. `public/CNAME` pins the custom domain. DNS steps are in `DEPLOY.md`.

## Commands

```bash
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview
npm run images    # regenerate src/assets/photos/headshot.webp and public/og-image.png
```

On this machine Node is installed at `C:\Program Files\nodejs`. New shells may need that directory added to PATH. There are no tests or linter, so `npm run build` is the check.

## Architecture

- **Content:** `src/data/profile.ts` exports `profile`, `experience`, `education`, `skills` and `life`. There are two pages. `src/pages/index.astro` is the career page and shows a teaser card for life outside work. `src/pages/life.astro` (`/life/`) covers summits, running, travel by region and the photo gallery. To change copy, edit the data file, not the markup. Both pages share `SiteHeader` and `SiteFooter`, and the nav links are absolute (`/#about`) so they work from either page.
- **Travel map:** `src/components/TravelMap.astro` draws the map as an inline SVG at build time. It uses `d3-geo` (Natural Earth projection), `topojson-client` and `world-atlas/countries-110m.json`, and ships no client JavaScript. Visited countries match `life.travel[].id`, the ISO numeric code zero-padded to 3 digits, for example `'040'`. Markers and routes use `at: [lon, lat]`. Countries too small for the 110m data, such as Singapore, appear only as a marker. To add a country, add one entry to `life.travel`.
- **Type scale:** the root font size is raised in `global.css` (17px, then 18px from `lg`, then 19px from 1600px), and every Tailwind rem size scales with it. To make text bigger or smaller everywhere, change those values rather than individual classes.
- **Layout:** `src/layouts/Base.astro` holds the SEO, Open Graph and JSON-LD `Person` tags, plus a small IntersectionObserver script. That script adds `is-in` to elements marked `[data-reveal]`, and the `--d` style sets the delay in ms. Reveal styles apply only when `html.js` is set, so the page still renders without JavaScript.
- **Design tokens:** colours and fonts are defined in the `@theme` block of `src/styles/global.css`: `void` and `surface` backgrounds, `neon` green, `pink`, `ink` text and `muted` text. Neon colours are for accents only. Body text stays `ink` on dark for readability. Shared classes (`card`, `card-pink`, `btn-*`, `chip`, `portrait-frame`, `glitch`, `cyber-grid`, `ridge-drift`) live in the same file. Every animation is turned off under `prefers-reduced-motion`.
- **Images:** the originals are in `src/assets/photos/` and are rendered through `astro:assets` `<Image>`, which outputs responsive WebP. `scripts/make-headshot.mjs` uses sharp with a fixed `CROP` rectangle on `winter-summit.webp`. Adjust that rectangle if the source photo changes.
- **Contact policy:** the site shows only email, LinkedIn and GitHub. Don't publish the phone number. The resume PDF contains it, so it isn't in `public/`.
