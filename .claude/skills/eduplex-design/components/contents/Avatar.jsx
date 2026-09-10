import React from 'react';

const SIZES = { xlarge: { box: 56, radius: 14 }, large: { box: 48, radius: 12 }, medium: { box: 40, radius: 10 }, small: { box: 32, radius: 8 }, xsmall: { box: 24, radius: 6 } };

/** Person, company or academy avatar. Person is a circle; the others are rounded squares. */
export function Avatar({ size = 'medium', variant = 'person', src, alt = '', fallback, style, ...rest }) {
  const s = typeof size === 'number' ? { box: size, radius: Math.ceil((size * 0.25) / 2) * 2 } : SIZES[size] || SIZES.medium;
  const radius = variant === 'person' ? 9999 : s.radius;
  return (
    <span
      data-wds="avatar"
      {...rest}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: s.box,
        height: s.box,
        fontSize: s.box / 1.5,
        borderRadius: radius,
        backgroundColor: 'var(--semantic-background-normal-normal)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {src ? (
        <img src={src} alt={alt} style={{ width: '100%', height: '100%', borderRadius: 'inherit', objectFit: variant === 'person' ? 'cover' : 'contain' }} />
      ) : (
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
            backgroundColor: 'var(--semantic-fill-strong)',
            color: 'var(--semantic-static-white)',
            fontSize: Math.round(s.box * 0.4),
            fontWeight: 600,
          }}
        >
          {fallback}
        </span>
      )}
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', boxShadow: 'inset 0 0 0 1px rgba(var(--semantic-label-normal-rgb),0.05)' }} />
    </span>
  );
}
