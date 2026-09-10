# UI kit — Montage documentation site

A recreation of the `docs/` Next.js app in `eduplexmkt/mkt-design-system` (published at https://montage.wanted.co.kr). It is the only product surface the repository contains, so it is the only kit here.

## Screens

`index.html` is one interactive screen with real state:

- **GNB** — sticky, 62px tall (`GNB_HEIGHT`), 12px vertical padding, 88% page-surface behind a 32px blur, `z-index: 1300` (`zIndex.modal`). Nav links are body2 bold in `label.alternative`, `label.normal` when `aria-current="page"`, with 12px/10px padding and a 20px gap; actions are 22px glyphs 20px apart. Clicking a nav item switches the LNB tree.
- **LNB** — sticky under the GNB, 160px content plus 10px padding, `56px 10px 20px` scroll padding, grouped page list. Below `lg` the real site hides it behind the menu button.
- **Doc content** — `max-width: min(840px, 100%)`, 56px top padding, 40px gap from the LNB, 60px left padding on `main`. Includes live examples with a Show/Hide code toggle and a props table.
- **TOC sidebar** — right-hand "On this page" list.
- **Footer** — 32px vertical padding, 120px top margin, 1px `line.normal.alternative` rule, 14px/600 links in `label.neutral`.
- **Search overlay** — the GNB search button opens the Algolia DocSearch modal stand-in over `material.dimmer`.
- **Theme toggle** — flips `data-theme` on `<html>`, which is exactly how the dark tokens in `tokens/colors.css` are meant to be switched.

## Fidelity notes

- `--layout-max-width` (1200px) and `--layout-padding-inline` (20px) are **assumptions**: they live in the docs app's own global CSS, which was not read. Everything else on this screen — heights, paddings, gaps, radii, type and colors — is taken from `docs/src/features/layout/components/gnb/style.ts`, `docs/src/app/(with-lnb)/layout.tsx`, `docs/src/features/docs/components/lnb/style.ts` and `docs/src/features/layout/components/footer/style.ts`.
- The wordmark is set in plain type. The repository's logo exists only as a React component (`docs/src/assets/logo.tsx`), not as an asset file, so no mark was copied or redrawn.
- Marquee art, MDX pages and the mobile LNB drawer are not recreated.
