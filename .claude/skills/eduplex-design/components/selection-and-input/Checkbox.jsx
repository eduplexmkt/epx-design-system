import React from 'react';

const SIZES = {
  medium: { box: 24, pad: 3, icon: 16, font: 15, line: '22px', ls: '0.0096em', tightPad: 1, tightBox: 20 },
  small: { box: 20, pad: 2, icon: 14, font: 14, line: '20px', ls: '0.0145em', tightPad: 0, tightBox: 16 },
};

const CHECK = (
  <path
    d="M19.3863 6.86346C19.7378 7.21493 19.7378 7.78478 19.3863 8.13625L10.3863 17.1362C10.0349 17.4877 9.46503 17.4877 9.11356 17.1362L4.61358 12.6362C4.26211 12.2848 4.26211 11.7149 4.61358 11.3635C4.96505 11.012 5.5349 11.012 5.88637 11.3635L9.74995 15.2271L18.1135 6.86346C18.465 6.51199 19.0348 6.51199 19.3863 6.86346Z"
    fill="currentColor"
  />
);
const DASH = <path d="M5 11.1h14v1.8H5z" fill="currentColor" />;

export function Checkbox({
  name,
  size = 'medium',
  checked = false,
  defaultChecked,
  indeterminate = false,
  disabled = false,
  required = false,
  invalid = false,
  bold = false,
  tight = false,
  icon,
  indeterminateIcon,
  label,
  onChange,
  onCheckedChange,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const on = checked || indeterminate;
  const custom = indeterminate ? indeterminateIcon : icon;

  return (
    <label
      data-wds="checkbox"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        cursor: disabled ? 'default' : 'pointer',
        opacity: disabled ? 0.43 : 1,
        ...(tight ? { paddingLeft: s.tightPad, paddingRight: s.tightPad } : null),
        ...style,
      }}
    >
      <input
        type="checkbox"
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        required={required}
        aria-invalid={invalid}
        onChange={(e) => {
          if (onChange) onChange(e);
          if (onCheckedChange) onCheckedChange(e.target.checked);
        }}
        {...rest}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
      <span
        data-role="checkbox-icon-wrapper"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          width: tight ? s.tightBox : s.box,
          height: tight ? s.tightBox : s.box,
          padding: s.pad,
          borderRadius: 5,
          boxSizing: 'border-box',
          backgroundColor: on ? 'var(--semantic-primary-normal)' : 'var(--semantic-background-normal-normal)',
          boxShadow: on
            ? 'inset 0 0 0 1.5px var(--semantic-primary-normal)'
            : 'inset 0 0 0 1.5px var(--semantic-line-normal-normal)',
          color: 'var(--semantic-static-white)',
          transition: 'background-color 0.2s ease, box-shadow 0.2s ease',
        }}
      >
        {custom ? (
          <span
            style={{
              display: 'flex',
              fontSize: s.icon,
              opacity: on ? 1 : 0,
              transform: on ? 'scale(1)' : 'scale(0.75)',
              transition: 'opacity 0.15s ease, transform 0.2s ease',
            }}
          >
            {custom}
          </span>
        ) : (
          <svg
            viewBox="0 0 24 24"
            width={s.icon}
            height={s.icon}
            style={{
              opacity: on ? 1 : 0,
              transform: on ? 'scale(1)' : 'scale(0.75)',
              transition: 'opacity 0.15s ease, transform 0.2s ease',
            }}
          >
            {indeterminate ? DASH : CHECK}
          </svg>
        )}
      </span>
      {label != null && (
        <span
          style={{
            color: disabled ? 'var(--semantic-label-disable)' : 'var(--semantic-label-normal)',
            fontSize: s.font,
            lineHeight: s.line,
            letterSpacing: s.ls,
            fontWeight: bold ? 600 : 400,
          }}
        >
          {label}
        </span>
      )}
    </label>
  );
}
