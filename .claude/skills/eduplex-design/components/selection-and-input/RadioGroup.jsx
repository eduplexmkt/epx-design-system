import React from 'react';

const SIZES = { medium: { box: 24, font: 15, line: '22px' }, small: { box: 20, font: 14, line: '20px' } };

/** Radio group — one choice from a short, visible list. */
export function RadioGroup({ options = [], value, size = 'medium', disabled = false, direction = 'column', onChange, style, ...rest }) {
  const s = SIZES[size] || SIZES.medium;
  return (
    <div role="radiogroup" data-wds="radio-group" {...rest} style={{ display: 'flex', flexDirection: direction, gap: direction === 'row' ? 20 : 12, ...style }}>
      {options.map((o) => {
        const on = o.value === value;
        const off = disabled || o.disabled;
        return (
          <label key={o.value} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, cursor: off ? 'default' : 'pointer', opacity: off ? 0.43 : 1 }}>
            <input type="radio" checked={on} disabled={off} onChange={() => onChange && onChange(o.value)} style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }} />
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                width: s.box,
                height: s.box,
                borderRadius: 9999,
                boxSizing: 'border-box',
                boxShadow: on ? 'inset 0 0 0 6px var(--semantic-primary-normal)' : 'inset 0 0 0 1.5px var(--semantic-line-normal-normal)',
                backgroundColor: 'var(--semantic-background-normal-normal)',
                transition: 'box-shadow 0.2s ease',
              }}
            />
            <span style={{ color: 'var(--semantic-label-normal)', fontSize: s.font, lineHeight: s.line }}>{o.label}</span>
          </label>
        );
      })}
    </div>
  );
}
