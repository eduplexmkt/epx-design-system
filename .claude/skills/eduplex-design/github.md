repo: eduplexmkt/mkt-design-system
branch: main
path: packages/eduplex-theme, packages/eduplex-design-system, packages/eduplex-icon, packages/wds-theme, packages/wds, packages/wds-icon, docs/src

## Last sync

date: 2026-09-09T02:44:21Z
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
