Wraps one of the 354 icons in `assets/icons/`. **Inline the markup — never link to the file.** A `url(...)` reference (mask or `<img src>`) is a fetch, so it disappears in a standalone HTML file opened from disk or sent as an attachment, and a mask discards color, flattening the eleven `*-color` brand marks into a silhouette.

Find the icon in `assets/icons/index.md`, which lists every name with its Korean description and keywords — search that table instead of guessing a filename. Then read `assets/icons/<name>.svg` and pass whatever sits between `<svg …>` and `</svg>`:

```jsx
<Icon size={20} markup={`<path fill-rule="evenodd" clip-rule="evenodd" d="M11.99 2.1C9.77…" fill="currentColor"/>`} />
```

`name` still works for the 27 curated glyphs the cards and UI kit use — they are inlined in `assets/icons/icon-markup.js`, which a page loads once (after any bundle, since it merges with `Object.assign` rather than replacing). A name outside that set renders a dashed placeholder and warns in the console, so a missing glyph is visible rather than silent; read the file and pass `markup` instead.

Monochrome icons are all `fill="currentColor"`, so the parent's `color` tints them; the `*-color` icons carry their own fills and ignore it. Sizes follow the host component: 24 for icon-only large buttons, 20 for large button leading icons, 18 medium, 16 small, 14 chips and badges, 12 xsmall chips. In plain HTML, skip the component and paste the whole `<svg>` element into the markup.

Intentional addition: the upstream library ships one React component per icon (`@eduplexmkt/mkt-icon`); this wrapper is the browser-friendly equivalent.
