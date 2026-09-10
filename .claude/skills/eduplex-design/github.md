repo: eduplexmkt/epx-design-system
branch: main
path: packages/eduplex-theme, packages/eduplex-design-system, packages/eduplex-icon, packages/wds-theme, packages/wds, packages/wds-icon, docs/src

## Last sync

date: 2026-09-10T07:00:00Z
tree: 384f8ec6cb24 (audited, no upstream import)

### Updated in this project

- **Icons: 27 → 354.** Extracted every convertible `icon-*.tsx` from `packages/eduplex-icon/src` into `assets/icons/`, and added `assets/icons/index.md` — a name / Korean description / keyword table so an icon is looked up rather than guessed. `logo-instagram-color` is the one holdout (embedded raster in a pattern).
- **`Icon.jsx` now inlines the SVG instead of masking a `url(...)`.** The mask broke twice over: a fetch dies in a standalone HTML file, and a mask keeps only alpha, flattening the eleven `*-color` brand marks to silhouettes.
- **Components: 23 → 39.** Added Typography, SectionHeader, FlexBox, Grid, GridItem, TextArea, Form, Label, Stepper, Slider, Modal, Accordion, Table, Thumbnail, ProgressIndicator, ProgressStepIndicator, each transcribed from its `style.ts`.
- **Spec drift fixed** in Button and IconButton (per-variant interaction opacities, and IconButton's four missing variants), TextField (six items), Card (thumbnail hairline, scrim tokens, inherited title color, overlay toggle slot), Tab (hover, hit area, root gap, horizontal padding, overflow fades), SearchField (the built-in magnifier and reset button; there is no `leadingContent` prop) and Checkbox (`invalid`, `tight`, `icon`, `indeterminateIcon`).
- **Tokens.** Accent scales filled out to every step (they had held only the steps semantic tokens referenced, so `orange.40` looked absent); added `--platform-ios-navigation-*`, the elevated-surface-at-88%-under-32px-blur recipe from the theme root.
- **Logo.** `eduplex-white.svg` and `eduplex-black.svg` shipped with no fill at all and rendered black — the white one was invisible on a dark ground. Both now carry a `.st0` rule.
- **Docs.** Corrected the icon count (359 → 355 upstream / 354 here), the accent-hue claim (eight backgrounds, twelve foregrounds), the guidelines card count, and a `thumbnail.html` that does not exist. Added blue.65 and the seven missing coolNeutral steps to their scale cards, noted the primary local deviation on its card, and reconciled `cover-image.card.html` with the ask-first rule in `readme.md`.

### Note on `primary.strong` / `primary.heavy`

The 2026-09-09 entry below records the upstream values `#004C96` / `#004386`. This project deliberately runs one step darker — `#004386` / `#003264` — and `tokens/colors.css` holds those. The deviation is intentional and documented in `guidelines/source-provenance.md`; the log line below describes upstream, not this project.

## Sync history

### 2026-09-09T02:44:21Z

tree: 384f8ec6cb24

### Updated in this project

- Rebrand completed upstream: full `@eduplexmkt/mkt-*` package set (theme 3.12.0, design-system 0.1.1, engine, icon) now stands alone — readme.md updated to name these as the packages to import.
- Fixed stale `primary.normal/strong/heavy` in `tokens/colors.css` (light + dark): they still held the pre-rebrand azure `#0066FF`/`#005EEB`/`#0054D1`, now the navy `#0054A7`/`#004C96`/`#004386` (dark `#3376B9`/`#1A65B0`/`#0054A7`) that `eduplex-theme/semantic/index.ts` derives from `atomic.blue`.
- Verified atomic scales, spacing, semantic light/dark and the 78-family component inventory are byte-identical to the previously imported `wds-*` sources — no component edits needed.

## Sync history

### 2026-09-08T03:17:48Z

tree: 05909ab73c59

### Updated in this project

- Brand blue rebranded: `atomic.blue` and every blue-derived semantic token moved to the deeper navy (`#0054A7` primary).
- Added the new `atomic.yellow` scale plus `accent.background.yellow` / `accent.foreground.yellow`; ContentBadge now accepts `accentColor="yellow"`.
- Recorded the in-progress `@eduplexmkt/*` package rename (eduplex-theme / eduplex-engine / eduplex-design-system) in readme.md.
- Verified component geometry unchanged — no component files needed edits.
- Rebranded this project to 에듀플렉스: user-supplied logo in `assets/logo/`, wordmark in the UI kit / template / thumbnail, `SKILL.md` renamed to `eduplex-design`.

## Sync history

### 2026-09-08T01:57:16Z

- Re-checked `main`: tree `bfced87f96df`, no changes to import.

### 2026-09-08T01:43:00Z

- Imported the full `wds-theme` token set (atomic scales, semantic light + dark, spacing, opacity, elevation) into `tokens/`.
- Extracted 27 icons from `packages/wds-icon/src/icon-*.tsx` into `assets/icons/`.
- Authored 23 components from `packages/wds/src/components/**/style.ts` geometry.
- Recreated the `docs/` documentation layout as `ui_kits/eduplex-docs/`.

## Screen map

| Project screen | Built from |
| --- | --- |
| `tokens/colors.css` | `packages/eduplex-theme/src/theme/atomic/*`, `.../semantic/index.ts`, `.../opacity/index.ts` (mirrored in `packages/wds-theme`) |
| `tokens/typography.css` | `packages/wds/src/components/typography/style.ts` |
| `tokens/spacing.css` | `packages/wds-theme/src/theme/spacing`, `breakpoint`, `z-index` |
| `tokens/elevation.css` | `packages/wds-theme/src/theme/semantic/index.ts` (elevation.shadow) |
| `tokens/motion.css` | `packages/wds/src/components/with-interaction/style.ts`, `switch/style.ts` |
| `components/actions/*` | `packages/wds/src/components/{button,icon-button,text-button,chip}` |
| `components/selection-and-input/*` | `packages/wds/src/components/{text-field,search-field,select,checkbox,switch,radio-group,segmented-control}` |
| `components/contents/*` | `packages/wds/src/components/{card,content-badge,avatar,divider,skeleton}` |
| `components/feedback/*` | `packages/wds/src/components/{section-message,toast,tooltip}` |
| `components/navigations/*` | `packages/wds/src/components/{tab,top-navigation,bottom-navigation}` |
| `assets/icons/*` | `packages/wds-icon/src/icon-*.tsx` |
| `ui_kits/eduplex-docs/*` | `docs/src/features/layout/components/gnb`, `docs/src/app/(with-lnb)/layout.tsx`, `docs/src/features/docs/components/lnb/style.ts`, `docs/src/features/layout/components/footer/style.ts` |
