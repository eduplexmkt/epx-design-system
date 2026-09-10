# 에듀플렉스 디자인 시스템

The design system behind **에듀플렉스 (Eduplex) marketing**, published as `@eduplexmkt/mkt-design-system`. Brand blue `#0054A7`, point yellow `#FFF100`, Pretendard type, a 359-icon set, and one product surface — the documentation site. This project is a browser-native recreation of it: real tokens, real component geometry, real icons, the real logo.

It is a rebrand-in-progress of an inherited system, so some upstream naming still shows in file paths and the UI kit folder. Lineage, the full list of source files read, the monorepo shape, rebrand status and the unbuilt component families all live in **[`guidelines/source-provenance.md`](guidelines/source-provenance.md)** — read that before syncing from the repository.

Two things about the system's shape matter for anyone designing with it:

- **Korean-first.** Component docs, icon descriptions and keywords are written in Korean; the type stack is Pretendard (JP subset first) and every text token is tuned for Hangul.
- **Tokens are the API.** Components never carry hex literals. When a value is missing the answer is to *add a semantic token*, not to inline a color.


## Content fundamentals

How the system writes, drawn from the source repository's docs, JSDoc and component copy.

Note: this is the inherited engineering tone. 에듀플렉스 marketing copy has its own voice — if you have a tone-of-voice guide, send it and this section should be replaced.

**Language.** Korean for anything a user reads; English for API surface (prop names, package names, doc headings like "Getting started", "Foundations", "Components", "Utilities"). Icon docs are pure Korean with a bilingual keyword list: `키워드: 애로우, Arrow, 화살표, Right`.

**Voice.** Declarative and instrumental — a sentence says what the thing is *for*, not how it feels. The dominant pattern is `~할 때 사용합니다` ("use this when…"):

- `요소를 닫을 때 사용합니다.` (close)
- `설정으로 이동할 때 사용합니다.` (setting)
- `새 정보와 관련한 내용을 표현할 때 사용합니다.` (bell)
- `여백, 두께, 사이즈를 조정할 수 있습니다.` (chevron — capability, stated plainly)

**Person.** Neither "I" nor "you" appears in Korean copy — Korean drops the subject entirely, and the polite `-합니다` register carries the tone. English prose in the repo README uses plain second person sparingly (`Please refer to…`, `You need to load the Pretendard font.`).

**Length.** One clause per idea. Component descriptions are a single sentence; warnings get one bolded lead-in (`> **⚠️ Important:** All @wanteddev/wds-* packages must be installed with the same version.`) and then the reason.

**Casing.** Sentence case in English, always — "Getting started", not "Getting Started". Prop values are lowercase string unions (`'solid' | 'outlined'`, `'primary' | 'assistive'`). Token paths are dot-cased lowercase (`semantic.label.alternative`). Package names are kebab (`wds-nextjs`), component folders kebab (`content-badge`), exports PascalCase (`ContentBadge`).

**Numbers and dates.** Korean product copy counts things directly (`경력 3년 이상`, `D-3`); no exclamation marks, no marketing superlatives.

**Emoji.** Almost never — one `⚠️` in an install warning and section emoji in a repo title. Never in UI. Unicode symbols do appear as *content* inside components (`⌘K` in a tooltip shortcut slot).

**The vibe.** Sober, precise, engineering-adjacent. It reads like a spec written by someone who expects to be quoted back.

## Visual foundations

**Color.** One brand hue — `#0054A7` (`atomic.blue.50`, a deep navy since the 2026-09 rebrand) — and it means "action or selection", nothing else. Everything structural comes from a single cool-neutral ramp (`#0F0F10` → `#F7F7F8`). Below the atomic scales, semantic tokens are the only permitted API: `primary.*`, `label.*` (six text tiers), `background.*`, `line.*`, `fill.*`, `status.*`, `accent.*`, `inverse.*`, `material.dimmer`. Twelve accent hues exist in two forms — saturated `accent.background` for art, darkened `accent.foreground` for text — and mixing the two up is the most common misuse. Yellow is the newest and the trickiest: its background value `#FFF100` is pure and needs dark text on it, while its foreground value is the near-olive `#665F00`. Dark mode is the same token names with different values under `[data-theme="dark"]`; light and dark are peers, not a theme and a variant.

**Transparency is structural, not decorative.** Most greys in the system are *not* solid: `label.neutral` is coolNeutral.22 at 88%, `line.normal.neutral` is coolNeutral.50 at 16%, `fill.normal` is coolNeutral.50 at 8%. The opacity scale (5, 8, 12, 16, 22, 28, 35, 43, 52, 61, 74, 88, 97) is a first-class token set. This is why components layer cleanly over imagery.

**Type.** Pretendard, 19 named variants in five families — display (56/40/36px), title (32/28/24), heading + headline (22/20/18/17), body (16/15, each with a looser `-reading` line height), label + caption (14/13/12/11). Tracking is a function of size: −0.0319em at display1, opening to +0.0311em at caption2. Three weights — 400 / 500 / 600 — except display and title, whose bold is 700. Medium (500) is the weight for chips, badges and assistive labels; bold (600) for buttons, tabs and headings. 11px is the floor.

The font is self-hosted: `assets/fonts/PretendardVariable.woff2` (variable, weights 45–920), declared in `tokens/fonts.css` and first in `--font-family-core`. The jsDelivr dynamic-subset stylesheets the `wds` README prescribes stay imported behind it as a fallback for Pretendard JP glyphs.

**Shipping a single HTML file — use `tokens/fonts-embed.css` instead.** `tokens/fonts.css` reaches the font by relative path (`../assets/fonts/…`) and pulls two jsDelivr stylesheets, so a lone HTML file sent by mail, chat or artifact falls back to the system gothic. `tokens/fonts-embed.css` is the drop-in replacement: one `@font-face` carrying the font as a base64 `data:` URI, no external request at all. Paste its contents into a `<style>` tag and the type survives anywhere. It is a subset — KS X 1001 완성형 한글 2350, Latin, punctuation, fullwidth forms, `wght` 400–700 — 319 KB of woff2, ~426 KB as CSS. Rare Hangul, hanja and emoji drop to the fallback stack. Load one or the other, never both; the standalone woff2 is at `assets/fonts/PretendardVariable-KS.woff2` if a relative-path build wants the small file.

**Spacing.** A 20-step scale that is deliberately *not* a strict 4px grid: 0.5, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32 … 80. Component padding uses the odd values freely — Button medium is `9px 20px`, Chip medium `7px 11px`, Toast `11px 16px`. Never round these to a grid.

**Corner radii.** Per-component and size-dependent; there is no single "card radius". Button 8/10/12 by size, chip 6/8/8/10, text field 12, card thumbnail 12, toast 12, tooltip 6/8, checkbox 5, avatar 6/8/10/12/14 (person avatars are full circles), switch 100/75.

**Borders are shadows.** Hairlines are drawn with `box-shadow: inset 0 0 0 1px <line token>` rather than `border`, so they never change layout. Focus thickens the same inset to 2px at 43% primary; invalid uses 43% negative. Checkbox rings are 1.5px, with device-pixel-ratio fallbacks in the source.

**Elevation.** Five box-shadow steps built on `atomic.neutral.10` (#171717) at 6–12% alpha — soft, near-neutral, never tinted. Plus a `drop-shadow` variant for non-rectangular art and a `spread` variant for large ambient glows (60px and 75px blurs). Cards in listings carry **no** shadow at all: a card here is an image with text under it.

**Frosted material, not gradients.** `backdrop-filter: blur(32px)` over a translucent surface is the system's signature: navigation (88% elevated surface), tooltips (88% inverse), toasts (52% inverse plus a 5% primary wash), text fields and search fields. Gradients appear only as *masks* — a 15-stop eased alpha ramp used for card thumbnail overlays and for fading scrollable tab edges. There are no decorative color gradients anywhere.

**Backgrounds.** Flat white or `#F7F7F8`. No patterns, no textures, no illustrations shipped in the repository. Imagery is user content (job thumbnails, company logos, profile photos), cropped `object-fit: cover` for photos and `contain` for logos so a mark is never cropped.

**Motion.** Brief and small. Colors and opacity transition with plain `ease` at 0.15–0.2s (chips are the exception at 0.3s); anything that *moves* uses `cubic-bezier(0.4, 0, 0.2, 1)` at 200ms — the switch thumb, the segmented-control thumb. Toasts animate height + opacity in 0.2s; tooltips cross-fade in 200ms. Card images scale to 1.025 on hover. Nothing bounces, nothing springs, nothing slides in from off-screen.

**Hover and press.** Never a hue change. An absolutely positioned overlay filled with `semantic.label.normal` (the near-black ink token — `WithInteraction color="semantic.label.normal"` in the source) sits at `opacity: 0` and fades in at a strength that depends on what it covers, in three pairs: **light** 3.75% / 9% (`--interaction-hover-light` / `--interaction-active-light`) for outlined buttons and bare icon buttons, **normal** 5% / 12% for solid assistive surfaces, **strong** 7.5% / 18% (also plain `--interaction-hover` / `--interaction-active`) for solid primary. Pick the pair the source picks for that component rather than defaulting to strong everywhere — a filled navy button needs the heavy pair, a hairline one does not. Do not use `currentColor` for this overlay — on a solid button the ink is white and the surface would lighten instead. Hover is suppressed on non-fine pointers. Some overlays scale from 0.95 → 1 instead. Disabled states *do* recolor: solid buttons go to `interaction.disable` with `label.assistive` text; checkboxes and switches simply drop to 43% opacity.

**Layout.** Fixed elements are the sticky top navigation (56px min, `z-index: 1300`) and the 56px mobile bottom bar, both frosted. Breakpoints are mobile-first min-widths: sm 768, md 992, lg 1200, xl 1600, and every component takes per-breakpoint prop overrides (`<Button xs={{ size: 'small' }} md={{ size: 'large' }} />`). The docs layout is a 1200px max-width band: 190px sticky LNB, 40px gap, `min(840px, 100%)` content column, right-hand TOC.

**Text protection.** Content over imagery is protected by a masked black gradient at 35% opacity (card thumbnails), never by a capsule or a solid scrim.

**Cover images — ask first, then apply.** Before designing any main / cover / 표지 image — deck title slides, document covers, landing hero panels, thumbnails, social cards — ask the user one question: *"커버 배경을 메인 컬러 `#0054A7`로 지정할까요?"*

- **Yes (the default answer, and the default if they don't care):** the cover takes the brand blue `#0054A7` (`--semantic-primary-normal`) as its background color — not a tint, not a gradient, not a neutral surface. On that ground the logo is `assets/logo/eduplex-white-point.svg` (white wordmark, `#FFF100` diamond), type is `--semantic-static-white` at full opacity, and the point yellow `#FFF100` is the only accent.
- **No:** neutral backgrounds, brand-color tints and gradients are all permitted on the cover. Every other rule still holds — logo variant by background lightness, full-opacity type, `#FFF100` as the only accent hue.

Inner content areas are not covers: they return to a neutral surface and the question does not apply to them.

## Iconography

- **One system, no substitutes.** The icon package ships **359** React icon components, generated from Figma by a sync workflow (`.github/workflows/figma-icon-sync.yml`) — manual edits get overwritten. There is no icon font, no sprite sheet and no PNG icons anywhere in the repository.
- **Geometry.** Every icon is a 24×24 `viewBox`, `fill="none"` on the root, one or more `<path fill="currentColor">`, sized with `width="1em" height="1em"` so the glyph follows `font-size`. Strokes are drawn as filled outlines (no `stroke` attribute), with a consistent ~1.8px optical weight and rounded joins. Most icons are declared `속성: Outlined`; a `-fill` twin exists for many (`icon-bell` / `icon-bell-fill`), and `-color` variants (`icon-agent-color`, `icon-blank-color`) are multi-hue illustrations.
- **In this project.** All 354 convertible icons were extracted from their `.tsx` sources into real SVG files in `assets/icons/`, with `assets/icons/index.md` listing every name, its Korean description and its keywords — read that index to find an icon rather than guessing a filename. **Not a substitution** — same path data, same source. Every path is `fill="currentColor"`, so a parent's `color` tints the icon; `components/foundation/Icon.jsx` also tints via a CSS mask. Only `logo-instagram-color` is missing: it embeds a raster image through a pattern and does not convert cleanly.
- **Sizing in context** (from component source): 24px for icon-only large buttons and bottom navigation, 22px for GNB actions, 20px large button leading / section message / toast / field affordances, 18px medium buttons, 16px small buttons and text buttons, 14px chips and badges, 12px xsmall chips.
- **Emoji are never used as icons.** Unicode symbols appear only as literal content (`⌘K`).
- **Logo:** the 에듀플렉스 wordmark + four-point diamond mark, supplied by the user and stored in `assets/logo/` (see its README). **Light backgrounds use `eduplex-main.svg` (Main Color); dark and brand-color backgrounds use `eduplex-white-point.svg` (White&Point Color)** — that pairing drives the UI kit, template and thumbnail. All-black and all-white versions remain for single-ink output only. The uploaded SVGs arrived with empty `<defs>`, so the two colors were inferred from the token set — Main `#0054A7` (`primary.normal`), Point `#FFF100` (`accent.background.yellow`); confirm against the brand guide. Nothing was drawn or reconstructed. The upstream mark exists only as a React component (`docs/src/assets/logo.tsx`) and was not copied.
- **No illustrations.** The repo's only raster assets are documentation thumbnails and Lottie JSON for the marketing page; no brand illustrations or full-bleed imagery exist to copy.

## Index

Root files:

- `styles.css` — the entry point consumers link; `@import` lines only
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `elevation.css`, `motion.css`, `base.css`
- `assets/logo/` — 4 에듀플렉스 logo variants + usage README
- `assets/icons/` — 354 SVG icons plus `index.md`, the searchable name/description/keyword table
- `guidelines/` — 21 foundation specimen cards (Colors, Type, Spacing, Brand)
- `thumbnail.html` — homepage tile
- `SKILL.md` — Agent Skill wrapper (`eduplex-design`)
- `github.md` — source repository association
- `guidelines/source-provenance.md` — lineage, sources read, rebrand status, unbuilt families

### Components

- `components/foundation/` — **Icon**, **Typography**, **SectionHeader**
- `components/layout/` — **FlexBox**, **Grid**, **GridItem**
- `components/actions/` — **Button**, **IconButton**, **TextButton**, **Chip**
- `components/selection-and-input/` — **TextField**, **TextArea**, **SearchField**, **Select**, **Checkbox**, **RadioGroup**, **Switch**, **SegmentedControl**, **Label**, **Form** (FormField / FormLabel / FormControl / FormMessage / FormErrorMessage), **Slider**, **Stepper**
- `components/contents/` — **Card**, **ContentBadge**, **Avatar**, **Divider**, **Skeleton**
- `components/feedback/` — **SectionMessage**, **Toast**, **Tooltip**
- `components/navigations/` — **Tab**, **TopNavigation**, **BottomNavigation**

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML.

**Intentional additions.** Two, both flagged: `Icon` (the upstream library ships one React component per icon; this is the browser-friendly wrapper) and `RadioGroup` as a single component (upstream splits it into `radio-group` primitives). Everything else maps to a family the source defines.

A list of the upstream families **not yet built** here is in [`guidelines/source-provenance.md`](guidelines/source-provenance.md).

### UI kits

- `ui_kits/eduplex-docs/` — recreation of the `docs/` documentation site (GNB, LNB, doc page with live examples and props table, TOC, footer, search overlay, light/dark toggle). See its own README for fidelity notes.

No slide template exists in the source, so no sample slides were created.
