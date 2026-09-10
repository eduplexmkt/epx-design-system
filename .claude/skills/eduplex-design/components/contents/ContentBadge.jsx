import React from 'react';

const SIZES = {
  medium: { radius: 10, padding: '5px 8px', gap: 4, font: 13, line: '18px', ls: '0.0194em', icon: 14 },
  small: { radius: 8, padding: '4px 6px', gap: 4, font: 12, line: '16px', ls: '0.0252em', icon: 14 },
  xsmall: { radius: 8, padding: '3px 6px', gap: 2, font: 11, line: '14px', ls: '0.0311em', icon: 12 },
};

const ACCENTS = ['red', 'redOrange', 'orange', 'lime', 'green', 'cyan', 'lightBlue', 'blue', 'violet', 'purple', 'pink', 'yellow'];

/** Read-only status/label badge. Not interactive — that's Chip. */
export function ContentBadge({ size = 'small', variant = 'solid', color = 'accent', accentColor = 'blue', leadingContent, children, style, ...rest }) {
  const s = SIZES[size] || SIZES.small;
  const neutral = color === 'neutral';
  const accent = ACCENTS.includes(accentColor) ? accentColor : 'blue';
  const fg = neutral ? 'var(--semantic-label-neutral)' : `var(--semantic-accent-foreground-${accent})`;
  const solidBg = neutral ? 'var(--semantic-fill-normal)' : `color-mix(in srgb, var(--semantic-accent-foreground-${accent}) 8%, transparent)`;
  const border = neutral ? 'var(--semantic-line-normal-normal)' : `color-mix(in srgb, var(--semantic-accent-foreground-${accent}) 43%, transparent)`;

  return (
    <span
      data-wds="content-badge"
      {...rest}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content',
        height: 'fit-content',
        borderRadius: s.radius,
        padding: s.padding,
        gap: s.gap,
        fontFamily: 'var(--font-family-core)',
        fontSize: s.font,
        lineHeight: s.line,
        letterSpacing: s.ls,
        fontWeight: 500,
        color: fg,
        backgroundColor: variant === 'outlined' ? 'var(--semantic-background-normal-normal)' : solidBg,
        boxShadow: variant === 'outlined' ? `inset 0 0 0 1px ${border}` : undefined,
        ...style,
      }}
    >
      {leadingContent && <span style={{ display: 'flex', fontSize: s.icon }}>{leadingContent}</span>}
      {children}
    </span>
  );
}
