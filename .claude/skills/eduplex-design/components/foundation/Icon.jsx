import React from 'react';

const BASE = () =>
  (typeof window !== 'undefined' && window.__WDS_ICON_BASE__) || 'assets/icons';

/**
 * Montage icons are 24x24 outlined SVGs drawn on a 0.9px-rounded geometry and
 * always filled with currentColor. They are recolored here through a CSS mask so
 * the file on disk stays the single source of truth.
 */
export function Icon({ name, size = 24, src, style, ...rest }) {
  const url = src || `${BASE()}/${name}.svg`;
  return (
    <span
      aria-hidden="true"
      {...rest}
      style={{
        display: 'inline-block',
        flexShrink: 0,
        width: size,
        height: size,
        backgroundColor: 'currentColor',
        WebkitMaskImage: `url(${url})`,
        maskImage: `url(${url})`,
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        ...style,
      }}
    />
  );
}
