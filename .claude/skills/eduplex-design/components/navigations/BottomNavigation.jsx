import React from 'react';

/** Mobile tab bar. 56px tall, icons only, active item in primary. */
export function BottomNavigation({ items = [], value, onChange, style, ...rest }) {
  return (
    <nav
      data-wds="bottom-navigation"
      {...rest}
      style={{
        display: 'flex',
        width: '100%',
        height: 56,
        borderTop: '1px solid var(--semantic-line-normal-alternative)',
        backgroundColor: 'color-mix(in srgb, var(--semantic-background-elevated-normal) 88%, transparent)',
        backdropFilter: 'blur(32px)',
        transition: 'border-color 0.2s ease, background-color 0.2s ease',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {items.map((it) => {
        const on = it.value === value;
        return (
          <button
            key={it.value}
            type="button"
            aria-current={on ? 'page' : undefined}
            aria-label={it.label}
            onClick={() => onChange && onChange(it.value)}
            style={{
              flex: '1 1 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
              padding: '9px 0',
              background: 'transparent',
              fontSize: 24,
              cursor: 'pointer',
              color: on ? 'var(--semantic-primary-normal)' : 'var(--semantic-interaction-inactive)',
            }}
          >
            {it.icon}
            {it.label && <span style={{ fontSize: 11, lineHeight: '14px', letterSpacing: '0.0311em', fontWeight: 500 }}>{it.label}</span>}
          </button>
        );
      })}
    </nav>
  );
}
