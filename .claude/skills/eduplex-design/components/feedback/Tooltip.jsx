import React from 'react';

const SIZES = { medium: { radius: 8, padding: '8px 10px', font: 14, line: '20px', ls: '0.0145em' }, small: { radius: 6, padding: '5px 8px', font: 11, line: '14px', ls: '0.0311em' } };

/** Hover/focus hint. Dark frosted surface, max 280px wide. */
export function Tooltip({ size = 'medium', children, shortcut, arrow = 'bottom', style, ...rest }) {
  const s = SIZES[size] || SIZES.medium;
  const arrowSize = size === 'small' ? 4 : 5;
  return (
    <span data-wds="tooltip" {...rest} style={{ position: 'relative', display: 'inline-flex', maxWidth: 280, ...style }}>
      <span
        style={{
          position: 'relative',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          borderRadius: s.radius,
          padding: s.padding,
          backdropFilter: 'blur(32px)',
          backgroundColor: 'color-mix(in srgb, var(--semantic-inverse-background) 88%, transparent)',
          color: 'var(--semantic-inverse-label)',
          fontFamily: 'var(--font-family-core)',
          fontSize: s.font,
          lineHeight: s.line,
          letterSpacing: s.ls,
          fontWeight: 500,
        }}
      >
        <span style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', backgroundColor: 'rgba(var(--semantic-primary-normal-rgb),0.05)' }} aria-hidden="true" />
        <span style={{ position: 'relative', padding: size === 'small' ? 0 : '0 2px' }}>{children}</span>
        {shortcut && <span style={{ position: 'relative', flexShrink: 0, color: 'rgba(var(--semantic-inverse-label-rgb),0.61)' }}>{shortcut}</span>}
      </span>
      {arrow && (
        <span
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '50%',
            [arrow === 'bottom' ? 'bottom' : 'top']: -arrowSize,
            transform: 'translateX(-50%)',
            width: 0,
            height: 0,
            borderLeft: `${arrowSize}px solid transparent`,
            borderRight: `${arrowSize}px solid transparent`,
            [arrow === 'bottom' ? 'borderTop' : 'borderBottom']: `${arrowSize}px solid color-mix(in srgb, var(--semantic-inverse-background) 88%, transparent)`,
          }}
        />
      )}
    </span>
  );
}
