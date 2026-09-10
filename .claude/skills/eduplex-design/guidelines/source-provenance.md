# Source & provenance

Background material for `readme.md`. Nothing here is a design rule — it records where the system came from and which upstream files were read, so a later sync can be checked against it.

## Lineage

에듀플렉스 디자인 시스템 is published as `@eduplexmkt/mkt-design-system`. It began as a fork of **Montage**, Wanted Lab's web design system (`@wanteddev/*`, documented at [montage.wanted.co.kr](https://montage.wanted.co.kr)), and is being rebranded in place: the brand blue and the logo are 에듀플렉스's, while component geometry, the type scale and the icon set are still inherited.

## Sources read

Everything in this project was read from the repository the user attached:

- **GitHub:** https://github.com/eduplexmkt/mkt-design-system (branch `main`) — a fork of `wanteddev/montage-web` (MIT), now being rebranded under `@eduplexmkt/*`. Read in this build:
  - `packages/wds-theme/src/theme/**` and `packages/eduplex-theme/src/theme/**` — atomic palettes, semantic light/dark tokens, spacing, opacity, breakpoints, z-index, elevation (the two are byte-identical)
  - `packages/wds/src/components/**/style.ts` + `types.ts` — component geometry for button, chip, content-badge, text-field, search-field, select, checkbox, switch, segmented-control, tab, top-navigation, bottom-navigation, card, avatar, divider, section-message, toast, tooltip, skeleton, typography, section-header, flex-box, grid, grid-item, with-interaction
  - `packages/eduplex-icon/src/icon-*.tsx` — 354 of the 355 icon path sets extracted into `assets/icons/`, with `assets/icons/index.md` as the name / Korean description / keyword table. `logo-instagram-color` is the one omission: it embeds a raster image through a pattern and does not convert cleanly. The 27 curated glyphs the cards and UI kit use are also inlined in `assets/icons/icon-markup.js` so a card draws without a fetch.
  - `docs/src/features/layout/**`, `docs/src/app/(with-lnb)/layout.tsx`, `docs/src/features/docs/components/lnb/style.ts` — the documentation site's layout
  - `README.md`, `AGENTS.md`, `.claude/references/architecture.md` — product and architecture context
- **Docs site:** https://montage.wanted.co.kr (not fetched; referenced by the repo README)
- **Upstream:** https://github.com/wanteddev/montage-web

Browse those repositories directly — the component source is the ground truth for anything this design system summarises.

## Repository shape

A Lerna + Nx monorepo of nine published packages, layered as `wds-theme` (tokens, no React) → `wds-engine` (Emotion runtime: `Box`, `ThemeProvider`, the `sx` prop) → `wds` / `wds-icon` / `wds-lottie` (components) → `wds-nextjs` (App/Pages Router integration), with `wds-codemod`, `wds-mcp` and `eslint-plugin-wds` as tooling. Day-to-day work happens in `wds`; `wds-theme` and `wds-engine` are treated as nearly read-only because a token rename is a breaking change for every consumer.

## Rebrand status (checked 2026-09-09)

The rename has landed as a full parallel package set, published to GitHub Packages with `access: restricted`: `packages/eduplex-theme` (`@eduplexmkt/mkt-theme` 3.12.0), `packages/eduplex-engine` (`@eduplexmkt/mkt-engine`), `packages/eduplex-icon` (`@eduplexmkt/mkt-icon`, 355 icon components) and `packages/eduplex-design-system` (`@eduplexmkt/mkt-design-system` 0.1.1 — changelog: "Eduplex MKT Design System 초기 버전"). `eduplex-design-system` now depends on `@eduplexmkt/mkt-engine` and `@eduplexmkt/mkt-icon`, so the package graph no longer reaches back into `@wanteddev/*`. The original `wds-*` packages still sit beside them, unchanged and byte-identical in content; the root README and `docs/` are still the upstream's.

**Use the `@eduplexmkt/mkt-*` names when writing install instructions or imports.** The `eduplex-*` package sources are the ones this design system tracks.

Two token changes landed with the rebrand, in **both** theme packages, and are reflected here:

- **The brand blue was replaced.** `atomic.blue` moved from a vivid azure (`#0066FF` at step 50) to a deeper, less saturated navy: `#0054A7`. Every blue-derived semantic token moved with it — `primary.normal` (`#0054A7`), `line.primary.*`, `accent.foreground.blue`, `inverse.primary` (`#3376B9`), and the dark-mode equivalents (`primary.normal` `#3376B9`).
- **A yellow scale was added.** New `atomic.yellow` (10 → 99, `#FFF100` at step 50) with two new semantic tokens: `accent.background.yellow` (`#FFF100` light / `#FFF44D` dark) and `accent.foreground.yellow` (`#665F00` light / `#FFF780` dark). Accent hues are now twelve.

Component geometry did not change — the 78 families exported by `packages/eduplex-design-system/src/components/index.ts` match `packages/wds/src/components/index.ts`, and every style file previously imported is unchanged.

## Surfaces

There is exactly one product surface in the repository — the `docs/` Next.js documentation app — recreated in `ui_kits/eduplex-docs/`. There is no consumer app, marketing site or slide template in the source, so none were invented here.

## Component families not yet built

Families that exist in `packages/wds/src/components/index.ts` but have no counterpart in this project: accordion, action-area, alert, animation-presence, autocomplete, avatar-button, avatar-group, card-list, category, check-mark, date-calendar, date-picker, date-range-calendar, date-range-picker, dismissable-layer, fallback-view, filter-button, focus-scope, list, loading, menu, modal, no-ssr, page-counter, pagination, pagination-dots, picker-action-area, play-badge, popover, popper, portal, progress-indicator, progress-step-indicator, progress-tracker, push-badge, region-config, remove-scroll, round-checkbox, scroll-area, select-multiple, snackbar, table, thumbnail, time-picker, time-view, toggle-icon, with-interaction.

The 28 built here are the ones the docs UI kit actually composes, plus the form family — text-area, form, label, slider and stepper — added afterwards from the same style sources.


## Local deviations from the source

Two values in this project intentionally differ from `@eduplexmkt/mkt-theme`, for legibility:

- **`primary.strong` / `primary.heavy`.** Upstream uses blue.45 / blue.40 (`#004C96` / `#004386`), one scale step apart from `normal` and from each other — the three read as one color. Widened here to blue.40 / blue.30 (`#004386` / `#003264`); dark mode likewise moves to blue.50 / blue.40.
- **Interaction overlay opacity.** Upstream's default `WithInteraction` pair is 5% hover / 12% press; on the brand navy that is invisible. This system uses the library's own "strong" pair, 7.5% / 18%, as the default (`--interaction-hover` / `--interaction-active`).

Both are token-level changes only — no component geometry differs. Revert them in `tokens/colors.css` and `tokens/motion.css` if upstream parity matters more than contrast.
