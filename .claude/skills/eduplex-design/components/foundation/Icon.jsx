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
 * Read `assets/icons/<name>.svg`, take the markup between `<svg …>` and `</svg>`,
 * and hand it over as `markup`. Every path in the monochrome icons is
 * `fill="currentColor"`, so the parent's `color` tints them natively; the
 * `*-color` icons carry their own fills and are left alone.
 *
 * Use `assets/icons/index.md` to find an icon by Korean description or keyword
 * rather than guessing at a filename.
 */
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

  // Raw markup lifted straight out of the .svg file.
  return (
    <span
      aria-hidden="true"
      {...rest}
      style={box}
      dangerouslySetInnerHTML={{
        __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${size}" height="${size}" fill="none">${markup || ''}</svg>`,
      }}
    />
  );
}
