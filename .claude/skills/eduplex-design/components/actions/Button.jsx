import React from 'react';

const SIZES = {
  large: { radius: 12, padding: '12px 28px', gap: 6, font: 16, line: '24px', ls: '0.0057em', icon: 20, onlyPadding: 12, onlyIcon: 24 },
  medium: { radius: 10, padding: '9px 20px', gap: 5, font: 15, line: '22px', ls: '0.0096em', icon: 18, onlyPadding: 10, onlyIcon: 20 },
  small: { radius: 8, padding: '7px 14px', gap: 4, font: 13, line: '18px', ls: '0.0194em', icon: 16, onlyPadding: 7, onlyIcon: 18 },
};

const COLORS = {
  'solid-primary': {
    color: 'var(--semantic-static-white)',
    background: 'var(--semantic-primary-normal)',
    shadow: 'none',
    disabled: { color: 'var(--semantic-label-assistive)', background: 'var(--semantic-interaction-disable)', shadow: 'none' },
  },
  'solid-assistive': {
    color: 'var(--semantic-label-neutral)',
    background: 'var(--semantic-fill-normal)',
    shadow: 'none',
    blur: true,
    disabled: { color: 'var(--semantic-label-assistive)', background: 'var(--semantic-interaction-disable)', shadow: 'none' },
  },
  'outlined-primary': {
    color: 'var(--semantic-primary-normal)',
    background: 'transparent',
    shadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)',
    disabled: { color: 'var(--semantic-label-disable)', background: 'transparent', shadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)' },
  },
  'outlined-assistive': {
    color: 'var(--semantic-label-normal)',
    background: 'transparent',
    shadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)',
    disabled: { color: 'var(--semantic-label-disable)', background: 'transparent', shadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)' },
  },
};

export function Button({
  size = 'medium',
  variant = 'solid',
  color = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
  iconOnly = false,
  leadingContent,
  trailingContent,
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const c = COLORS[variant + '-' + color] || COLORS['solid-primary'];
  const paint = disabled ? c.disabled : c;
  const weight = color === 'assistive' ? 500 : 600;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const overlay = disabled ? 0 : press ? 0.18 : hover ? 0.075 : 0;

  return (
    <button
      type="button"
      disabled={disabled}
      aria-busy={loading || undefined}
      data-wds="button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setPress(false); }}
      onPointerDown={() => setPress(true)}
      onPointerUp={() => setPress(false)}
      {...rest}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'middle',
        boxSizing: 'border-box',
        whiteSpace: 'nowrap',
        cursor: disabled ? 'default' : loading ? 'wait' : 'pointer',
        overflow: 'hidden',
        isolation: 'isolate',
        width: fullWidth ? '100%' : 'fit-content',
        borderRadius: s.radius,
        padding: iconOnly ? s.onlyPadding : s.padding,
        gap: s.gap,
        fontFamily: 'var(--font-family-core)',
        fontSize: iconOnly ? s.onlyIcon : s.font,
        lineHeight: iconOnly ? 1 : s.line,
        letterSpacing: iconOnly ? undefined : s.ls,
        fontWeight: weight,
        color: paint.color,
        backgroundColor: paint.background,
        boxShadow: paint.shadow,
        backdropFilter: c.blur && !disabled ? 'blur(32px)' : undefined,
        transition: 'var(--transition-color)',
        ...style,
      }}
    >
      {!disabled && <span data-wds="interaction" aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundColor: 'var(--semantic-label-normal)', opacity: overlay, transition: 'opacity 0.15s ease', zIndex: 0 }} />}
      {leadingContent && <span style={{ display: 'flex', fontSize: s.icon, zIndex: 1 }}>{leadingContent}</span>}
      {children != null && <span style={{ visibility: loading ? 'hidden' : 'visible', zIndex: 1 }}>{children}</span>}
      {trailingContent && <span style={{ display: 'flex', fontSize: s.icon, zIndex: 1 }}>{trailingContent}</span>}
      {loading && <Spinner size={size === 'large' ? 18 : size === 'small' ? 14 : 16} />}
    </button>
  );
}

function Spinner({ size }) {
  return (
    <svg data-role="button-loading" viewBox="0 0 24 24" width={size} height={size} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 1 }}>
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="42 14" opacity="0.9">
        <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.9s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
