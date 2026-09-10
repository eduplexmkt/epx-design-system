import React from 'react';

/**
 * Icons are 24x24 SVGs from `assets/icons/`, and they are INLINED, never linked.
 *
 * Why: a `mask-image: url(...)` or `<img src>` is a resource fetch. It dies in a
 * standalone HTML file opened from disk or mailed as an attachment — exactly the
 * output this skill is built for — and a mask throws away color, flattening the
 * eleven multi-color icons (`*-color.svg`, brand marks like logo-kakao-color)
 * into a single-tone silhouette.
 *
 * Two ways in:
 *
 *   `markup` — the markup between `<svg …>` and `</svg>`, read out of
 *   `assets/icons/<name>.svg`. This is the path for anything you generate.
 *
 *   `name` — resolved against `assets/icons/icon-markup.js`, an inline registry
 *   of the 27 curated glyphs the cards and UI kit use. Load that file first.
 *   A name outside the registry renders a dashed placeholder and warns rather
 *   than silently disappearing.
 *
 * Monochrome icons are all `fill="currentColor"`, so the parent's `color` tints
 * them; the `*-color` icons carry their own fills. Use `assets/icons/index.md`
 * to find an icon by Korean description or keyword rather than guessing a name.
 */
const registry = () =>
  (typeof globalThis !== 'undefined' && globalThis.EPX_ICONS) ||
  (typeof window !== 'undefined' && window.EPX_ICONS) ||
  {};

export function Icon({ name, size = 24, markup, viewBox = '0 0 24 24', children, style, ...rest }) {
  const box = {
    display: 'inline-flex',
    flexShrink: 0,
    width: size,
    height: size,
    lineHeight: 0,
    ...style,
  };

  // Paths passed as JSX children.
  if (children) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox}
        width={size}
        height={size}
        fill="none"
        aria-hidden={name ? undefined : 'true'}
        role={name ? 'img' : undefined}
        {...rest}
        style={box}
      >
        {name && <title>{name}</title>}
        {children}
      </svg>
    );
  }

  const resolved = markup != null ? markup : name ? registry()[name] : undefined;

  // Fail loudly: a missing glyph shows a dashed box instead of nothing at all.
  if (resolved == null) {
    if (typeof console !== 'undefined') {
      console.warn(
        `[Icon] "${name}" is not in the inline registry. Read assets/icons/${name}.svg and pass it as markup, or add it to assets/icons/icon-markup.js.`
      );
    }
    return (
      <span
        aria-hidden="true"
        title={`icon: ${name}`}
        {...rest}
        style={{ ...box, boxSizing: 'border-box', borderRadius: 4, border: '1px dashed currentColor', opacity: 0.35 }}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      {...rest}
      style={box}
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${size}" height="${size}" fill="none">${resolved}</svg>`,
      }}
    />
  );
}
