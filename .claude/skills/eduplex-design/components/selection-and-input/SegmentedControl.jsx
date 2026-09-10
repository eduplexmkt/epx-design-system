import React from 'react';

const SIZES = {
  large: { h: 48, radius: 12, pad: 3, itemRadius: 10, itemPad: '9px 8px', font: 17, line: '24px', ls: '0em', icon: 20 },
  medium: { h: 40, radius: 10, pad: 2, itemRadius: 8, itemPad: '7px 8px', font: 15, line: '22px', ls: '0.0096em', icon: 18 },
  small: { h: 32, radius: 8, pad: 2, itemRadius: 6, itemPad: '5px 6px', font: 13, line: '18px', ls: '0.0194em', icon: 14 },
};

/** Mutually exclusive view switch. Solid rides a raised thumb; outlined tints primary. */
export function SegmentedControl({ items = [], value, size = 'medium', variant = 'solid', onChange, style, ...rest }) {
  const s = SIZES[size] || SIZES.medium;
  const solid = variant !== 'outlined';
  return (
    <div
      role="tablist"
      data-wds="segmented-control"
      {...rest}
      style={{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: s.h,
        borderRadius: s.radius,
        padding: solid ? s.pad : 0,
        backgroundColor: solid ? 'var(--semantic-fill-normal)' : 'transparent',
        boxShadow: solid ? undefined : 'inset 0 0 0 1px var(--semantic-line-normal-normal)',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {items.map((it, i) => {
        const on = it.value === value;
        const first = i === 0;
        const last = i === items.length - 1;
        const outlinedRadius = first ? `${s.radius}px 0 0 ${s.radius}px` : last ? `0 ${s.radius}px ${s.radius}px 0` : 0;
        return (
          <button
            key={it.value}
            type="button"
            role="tab"
            aria-selected={on}
            data-active={on}
            disabled={it.disabled}
            onClick={() => onChange && onChange(it.value)}
            style={{
              position: 'relative',
              flex: '1 1 0',
              minWidth: 0,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              height: '100%',
              padding: solid ? s.itemPad : '0 16px',
              borderRadius: solid ? s.itemRadius : outlinedRadius,
              border: solid ? undefined : on ? '1px solid rgba(var(--semantic-primary-normal-rgb),0.43)' : '1px solid transparent',
              borderRight: solid || last || on ? undefined : '1px solid var(--semantic-line-normal-normal)',
              boxShadow: solid && on ? '0px 0px 4px 0px rgba(0,0,0,0.08)' : 'none',
              backgroundColor: solid
                ? on
                  ? 'var(--semantic-background-elevated-normal)'
                  : 'transparent'
                : on
                  ? 'rgba(var(--semantic-primary-normal-rgb),0.05)'
                  : 'transparent',
              color: on ? (solid ? 'var(--semantic-label-normal)' : 'var(--semantic-primary-normal)') : 'var(--semantic-label-alternative)',
              fontFamily: 'var(--font-family-core)',
              fontSize: s.font,
              lineHeight: s.line,
              letterSpacing: s.ls,
              fontWeight: 500,
              cursor: it.disabled ? 'default' : 'pointer',
              transition: solid ? 'color 0.2s' : 'none',
              boxSizing: 'border-box',
            }}
          >
            {it.leadingContent && <span style={{ display: 'flex', fontSize: s.icon, flexShrink: 0 }}>{it.leadingContent}</span>}
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}
