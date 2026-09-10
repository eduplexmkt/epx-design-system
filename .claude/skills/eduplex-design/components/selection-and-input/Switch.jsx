import React from 'react';

const SIZES = { medium: { w: 52, pad: 4, thumb: 24, radius: 100 }, small: { w: 39, pad: 3, thumb: 18, radius: 75 } };

export function Switch({ size = 'medium', checked = false, disabled = false, onChange, style, ...rest }) {
  const s = SIZES[size] || SIZES.medium;
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={onChange}
      data-wds="switch"
      {...rest}
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexShrink: 0,
        width: s.w,
        padding: s.pad,
        borderRadius: s.radius,
        backgroundColor: checked ? 'var(--semantic-primary-normal)' : 'var(--semantic-fill-strong)',
        opacity: disabled ? 0.43 : 1,
        cursor: disabled ? 'default' : 'pointer',
        transition: 'background-color 200ms cubic-bezier(0.4,0,0.2,1)',
        ...style,
      }}
    >
      <span
        style={{
          display: 'block',
          width: s.thumb,
          height: s.thumb,
          borderRadius: 1000,
          backgroundColor: 'var(--semantic-static-white)',
          marginLeft: checked ? s.w - s.thumb - s.pad * 2 : 0,
          transition: 'margin-left 200ms cubic-bezier(0.4,0,0.2,1), width 200ms cubic-bezier(0.4,0,0.2,1)',
        }}
      />
    </button>
  );
}
