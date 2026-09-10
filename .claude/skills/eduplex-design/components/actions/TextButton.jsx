import React from 'react';

const SIZES = { medium: { font: 16, line: '24px', ls: '0.0057em', icon: 20 }, small: { font: 14, line: '20px', ls: '0.0145em', icon: 16 } };

/** A label-only action, always bold, used inline beside content. */
export function TextButton({ size = 'medium', color = 'primary', disabled = false, leadingContent, trailingContent, children, style, ...rest }) {
  const s = SIZES[size] || SIZES.medium;
  const tint = disabled ? 'var(--semantic-label-disable)' : color === 'primary' ? 'var(--semantic-primary-normal)' : 'var(--semantic-label-alternative)';
  return (
    <button
      type="button"
      disabled={disabled}
      data-wds="text-button"
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        borderRadius: 6,
        padding: '4px 0px',
        width: 'fit-content',
        background: 'none',
        color: tint,
        fontFamily: 'var(--font-family-core)',
        fontSize: s.font,
        lineHeight: s.line,
        letterSpacing: s.ls,
        fontWeight: 600,
        cursor: disabled ? 'default' : 'pointer',
        transition: 'var(--transition-color)',
        ...style,
      }}
    >
      {leadingContent && <span style={{ display: 'flex', fontSize: s.icon }}>{leadingContent}</span>}
      {children != null && <span>{children}</span>}
      {trailingContent && <span style={{ display: 'flex', fontSize: s.icon }}>{trailingContent}</span>}
    </button>
  );
}
