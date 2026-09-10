import React from 'react';

/**
 * The framed image box Card is built on. Ratio, radius and hairline are the whole
 * component — everything else is the picture.
 */
export function Thumbnail({ ratio = '4:3', portrait = false, radius, border, width, src, alt = '', overlay, children, style, ...rest }) {
  const [w, h] = String(ratio).split(':');
  const aspectRatio = portrait ? `${h} / ${w}` : `${w} / ${h}`;
  const borderRadius = radius === true ? 12 : radius === false ? 0 : undefined;
  return (
    <figure
      data-wds="thumbnail"
      aria-label={alt || undefined}
      {...rest}
      style={{
        position: 'relative',
        display: 'flex',
        margin: 0,
        width,
        aspectRatio,
        borderRadius,
        backgroundColor: src ? undefined : 'var(--semantic-fill-alternative)',
        ...style,
      }}
    >
      {src && <img src={src} alt={alt} aria-hidden="true" style={{ borderRadius: 'inherit', width: '100%', height: '100%', objectFit: 'cover' }} />}
      {border === true && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
            border: '1px solid var(--semantic-line-normal-neutral)',
            boxSizing: 'border-box',
            pointerEvents: 'none',
          }}
        />
      )}
      {overlay && <div data-role="thumbnail-overlay" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>{overlay}</div>}
      {children}
    </figure>
  );
}
