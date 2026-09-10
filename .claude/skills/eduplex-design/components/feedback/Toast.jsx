import React from 'react';

/** Transient confirmation. Dark, frosted, 356-420px wide, self-dismissing. */
export function Toast({ icon, children, action, style, ...rest }) {
  return (
    <div
      data-wds="toast"
      role="status"
      {...rest}
      style={{ borderRadius: 12, backdropFilter: 'blur(32px)', minWidth: 356, maxWidth: 420, overflow: 'hidden', position: 'relative', ...style }}
    >
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundColor: 'color-mix(in srgb, var(--semantic-inverse-background) 52%, transparent)' }} />
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(var(--semantic-primary-normal-rgb),0.05)' }} />
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 16, padding: '11px 16px', fontSize: 20 }}>
        {icon && <span style={{ display: 'flex', flexShrink: 0, color: 'var(--semantic-primary-normal)' }}>{icon}</span>}
        <div style={{ flex: '1 1 auto', minWidth: 0, padding: '5px 2px', color: 'var(--semantic-inverse-label)', opacity: 0.88, fontSize: 15, lineHeight: '22px', letterSpacing: '0.0096em', wordBreak: 'keep-all' }}>{children}</div>
        {action && <div style={{ flexShrink: 0 }}>{action}</div>}
      </div>
    </div>
  );
}
