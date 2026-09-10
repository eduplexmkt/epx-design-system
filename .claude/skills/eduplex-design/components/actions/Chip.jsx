import React from 'react';

const SIZES = {
  xsmall: { radius: 6, padding: '4px 7px', gap: 2, font: 12, line: '16px', ls: '0.0252em', icon: 12, textPadding: '0 1px' },
  small: { radius: 8, padding: '6px 8px', gap: 2, font: 14, line: '20px', ls: '0.0145em', icon: 14, textPadding: '0 2px' },
  medium: { radius: 8, padding: '7px 11px', gap: 3, font: 15, line: '22px', ls: '0.0096em', icon: 14, textPadding: '0 2px' },
  large: { radius: 10, padding: '9px 12px', gap: 3, font: 15, line: '22px', ls: '0.0096em', icon: 16, textPadding: '0 2px' },
};

/** A selectable filter/label control. Selection is carried by data-active. */
export function Chip({ size = 'medium', variant = 'solid', active = false, disabled = false, leadingContent, trailingContent, children, style, ...rest }) {
  const s = SIZES[size] || SIZES.medium;
  let paint;
  if (variant === 'outlined') {
    paint = disabled
      ? { color: 'var(--semantic-label-disable)', backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)' }
      : active
        ? { color: 'var(--semantic-primary-normal)', backgroundColor: 'rgba(var(--semantic-primary-normal-rgb),0.05)', boxShadow: 'inset 0 0 0 1px rgba(var(--semantic-primary-normal-rgb),0.43)' }
        : { color: 'var(--semantic-label-normal)', backgroundColor: 'transparent', boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)' };
  } else {
    paint = disabled
      ? { color: 'var(--semantic-label-disable)', backgroundColor: 'var(--semantic-interaction-disable)', boxShadow: 'none' }
      : active
        ? { color: 'var(--semantic-inverse-label)', backgroundColor: 'var(--semantic-inverse-background)', boxShadow: 'none' }
        : { color: 'var(--semantic-label-normal)', backgroundColor: 'var(--semantic-fill-alternative)', boxShadow: 'none' };
  }
  return (
    <button
      type="button"
      disabled={disabled}
      data-active={active}
      aria-pressed={active}
      data-wds="chip"
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        width: 'fit-content',
        borderRadius: s.radius,
        padding: s.padding,
        gap: s.gap,
        fontFamily: 'var(--font-family-core)',
        fontSize: s.font,
        lineHeight: s.line,
        letterSpacing: s.ls,
        fontWeight: 500,
        cursor: disabled ? 'default' : 'pointer',
        transition: 'background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
        ...paint,
        ...style,
      }}
    >
      {leadingContent && <span style={{ display: 'flex', fontSize: s.icon }}>{leadingContent}</span>}
      {children != null && <span style={{ padding: s.textPadding }}>{children}</span>}
      {trailingContent && <span style={{ display: 'flex', fontSize: s.icon }}>{trailingContent}</span>}
    </button>
  );
}
