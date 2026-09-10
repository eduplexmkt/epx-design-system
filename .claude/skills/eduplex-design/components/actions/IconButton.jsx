import React from 'react';

const SIZES = { large: { box: 48, icon: 24 }, medium: { box: 40, icon: 20 }, small: { box: 32, icon: 18 }, xsmall: { box: 24, icon: 16 } };

/** A borderless, circular-interaction icon action — the control used in navigation
 * bars, card corners and tooltips. */
export function IconButton({ size = 'medium', color = 'normal', disabled = false, children, style, ...rest }) {
  const s = SIZES[size] || SIZES.medium;
  const tint = disabled
    ? 'var(--semantic-label-disable)'
    : color === 'primary'
      ? 'var(--semantic-primary-normal)'
      : color === 'assistive'
        ? 'var(--semantic-label-alternative)'
        : 'var(--semantic-label-normal)';
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const overlay = disabled ? 0 : press ? 0.18 : hover ? 0.075 : 0;
  return (
    <button
      type="button"
      disabled={disabled}
      data-wds="icon-button"
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
        width: s.box,
        height: s.box,
        fontSize: s.icon,
        color: tint,
        background: 'none',
        borderRadius: 9999,
        cursor: disabled ? 'default' : 'pointer',
        overflow: 'hidden',
        transition: 'var(--transition-color)',
        ...style,
      }}
    >
      {!disabled && <span data-wds="interaction" aria-hidden="true" style={{ position: 'absolute', inset: 0, borderRadius: 9999, backgroundColor: 'var(--semantic-label-normal)', opacity: overlay, transition: 'opacity 0.15s ease' }} />}
      <span style={{ display: 'flex', zIndex: 1 }}>{children}</span>
    </button>
  );
}
