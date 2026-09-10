import React, { useState } from 'react';

/** Select — the TextField shell plus a chevron and a floating option list. */
export function Select({ options = [], value, placeholder = '선택', disabled = false, invalid = false, width = 240, onChange, style, ...rest }) {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);
  const ring = disabled
    ? 'inset 0 0 0 1px var(--semantic-line-normal-alternative)'
    : open
      ? 'inset 0 0 0 2px rgba(var(--semantic-primary-normal-rgb),0.43)'
      : invalid
        ? 'inset 0 0 0 1px rgba(var(--semantic-status-negative-rgb),0.28)'
        : 'inset 0 0 0 1px var(--semantic-line-normal-neutral)';

  return (
    <div data-wds="select" style={{ position: 'relative', width, ...style }} {...rest}>
      <button
        type="button"
        disabled={disabled}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          width: '100%',
          padding: 12,
          borderRadius: 12,
          boxShadow: `${ring}, var(--elevation-shadow-xsmall)`,
          backgroundColor: disabled ? 'var(--semantic-fill-alternative)' : 'var(--semantic-background-transparent-normal)',
          backdropFilter: disabled ? undefined : 'blur(32px)',
          color: selected ? 'var(--semantic-label-normal)' : 'var(--semantic-label-assistive)',
          fontFamily: 'var(--font-family-core)',
          fontSize: 16,
          lineHeight: '24px',
          letterSpacing: '0.0057em',
          cursor: disabled ? 'default' : 'pointer',
          transition: 'box-shadow ease 0.2s',
          textAlign: 'left',
        }}
      >
        <span style={{ flex: '1 1 auto', minWidth: 0, padding: '0 4px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{selected ? selected.label : placeholder}</span>
        <span style={{ display: 'flex', flexShrink: 0, fontSize: 20, color: 'var(--semantic-label-alternative)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M3.36364 7.36346C3.71511 7.01199 4.28496 7.01199 4.63643 7.36346L12 14.7271L19.3636 7.36346C19.7151 7.01199 20.285 7.01199 20.6364 7.36346C20.9879 7.71493 20.9879 8.28478 20.6364 8.63625L12.6364 16.6362C12.285 16.9877 11.7151 16.9877 11.3636 16.6362L3.36364 8.63625C3.01217 8.28478 3.01217 7.71493 3.36364 7.36346Z" fill="currentColor" /></svg>
        </span>
      </button>
      {open && (
        <ul
          role="listbox"
          style={{
            position: 'absolute',
            top: 'calc(100% + 4px)',
            left: 0,
            right: 0,
            zIndex: 10,
            margin: 0,
            padding: 6,
            listStyle: 'none',
            borderRadius: 12,
            backgroundColor: 'var(--semantic-background-elevated-normal)',
            boxShadow: 'var(--elevation-shadow-medium), inset 0 0 0 1px var(--semantic-line-normal-alternative)',
          }}
        >
          {options.map((o) => (
            <li key={o.value}>
              <button
                type="button"
                role="option"
                aria-selected={o.value === value}
                onClick={() => { setOpen(false); onChange && onChange(o.value); }}
                style={{
                  display: 'flex',
                  width: '100%',
                  padding: '10px 10px',
                  borderRadius: 8,
                  textAlign: 'left',
                  fontFamily: 'var(--font-family-core)',
                  fontSize: 15,
                  lineHeight: '22px',
                  fontWeight: o.value === value ? 600 : 400,
                  color: o.value === value ? 'var(--semantic-primary-normal)' : 'var(--semantic-label-normal)',
                  backgroundColor: o.value === value ? 'rgba(var(--semantic-primary-normal-rgb),0.05)' : 'transparent',
                  cursor: 'pointer',
                }}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
