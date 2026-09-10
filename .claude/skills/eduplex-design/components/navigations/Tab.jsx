import React from 'react';

const SIZES = { small: { padY: 9, padX: 12, font: 15, line: '22px', ls: '0.0096em' }, medium: { padY: 12, padX: 12, font: 17, line: '24px', ls: '0em' }, large: { padY: 14, padX: 12, font: 17, line: '24px', ls: '0em' } };

/** Underline tab bar. The 2px selected rule is the only selection cue. */
export function Tab({ items = [], value, size = 'medium', resize = 'hug', onChange, style, ...rest }) {
  const s = SIZES[size] || SIZES.medium;
  const fill = resize === 'fill';
  return (
    <div
      role="tablist"
      data-wds="tab"
      {...rest}
      style={{ position: 'relative', width: '100%', display: 'flex', gap: fill ? 0 : s.padX * 2, boxShadow: 'inset 0 -1px 0 0 var(--semantic-line-normal-alternative)', ...style }}
    >
      {items.map((it) => {
        const on = it.value === value;
        return (
          <button
            key={it.value}
            type="button"
            role="tab"
            aria-selected={on}
            disabled={it.disabled}
            onClick={() => onChange && onChange(it.value)}
            style={{
              position: 'relative',
              flex: fill ? '1 1 0' : 'initial',
              padding: `${s.padY}px 0`,
              background: 'none',
              cursor: it.disabled ? 'default' : 'pointer',
              fontFamily: 'var(--font-family-core)',
              fontSize: s.font,
              lineHeight: s.line,
              letterSpacing: s.ls,
              fontWeight: 600,
              textAlign: fill ? 'center' : 'initial',
              color: it.disabled ? 'var(--semantic-label-disable)' : on ? 'var(--semantic-label-strong)' : 'var(--semantic-label-assistive)',
              transition: 'color 0.2s ease',
            }}
          >
            <span style={{ whiteSpace: 'nowrap' }}>{it.label}</span>
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                height: 2,
                backgroundColor: on ? (it.disabled ? 'var(--semantic-fill-alternative)' : 'var(--semantic-label-strong)') : 'transparent',
                transition: 'background-color 0.2s ease',
              }}
            />
          </button>
        );
      })}
    </div>
  );
}
