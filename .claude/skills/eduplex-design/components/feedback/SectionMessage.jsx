import React from 'react';

const TINT = {
  info: 'var(--semantic-primary-normal)',
  positive: 'var(--semantic-status-positive)',
  negative: 'var(--semantic-status-negative)',
  cautionary: 'var(--semantic-status-cautionary)',
  custom: 'var(--semantic-label-assistive)',
};

/** In-page message block: an 88% page-surface layer under a 5% status tint. */
export function SectionMessage({ variant = 'info', icon, title, children, trailingButton, onClose, style, ...rest }) {
  const tint = TINT[variant] || TINT.info;
  return (
    <div
      data-wds="section-message"
      role="status"
      {...rest}
      style={{ position: 'relative', width: '100%', borderRadius: 12, padding: 12, backdropFilter: 'blur(32px)', overflow: 'hidden', ...style }}
    >
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', backgroundColor: 'color-mix(in srgb, var(--semantic-background-normal-normal) 88%, transparent)' }} />
      <span aria-hidden="true" style={{ position: 'absolute', inset: 0, borderRadius: 'inherit', backgroundColor: `color-mix(in srgb, ${tint} 5%, transparent)` }} />
      <div style={{ position: 'relative', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
        {icon && <span style={{ display: 'flex', flexShrink: 0, fontSize: 20, padding: '1px 0', color: variant === 'custom' ? 'var(--semantic-label-alternative)' : tint }}>{icon}</span>}
        <div style={{ flex: '1 1 auto', minWidth: 0, padding: '1px 2px' }}>
          {title != null && <div style={{ color: 'var(--semantic-label-normal)', fontSize: 15, lineHeight: '22px', letterSpacing: '0.0096em', fontWeight: 600 }}>{title}</div>}
          {children != null && <div style={{ color: 'var(--semantic-label-neutral)', fontSize: 15, lineHeight: '24px', letterSpacing: '0.0096em', wordBreak: 'keep-all' }}>{children}</div>}
        </div>
        {trailingButton && <div style={{ flexShrink: 0, padding: '0 8px' }}>{trailingButton}</div>}
        {onClose && (
          <button type="button" onClick={onClose} aria-label="닫기" style={{ flexShrink: 0, display: 'flex', color: 'var(--semantic-label-alternative)', cursor: 'pointer', margin: '1px 0' }}>
            <svg viewBox="0 0 24 24" width="20" height="20"><path d="M4.86349 4.86346C5.21496 4.51199 5.78481 4.51199 6.13628 4.86346L11.9999 10.7271L17.8634 4.86346C18.2149 4.51199 18.7848 4.51199 19.1362 4.86346C19.4877 5.21493 19.4877 5.78478 19.1362 6.13625L13.2726 11.9999L19.1362 17.8635C19.4877 18.2149 19.4877 18.7848 19.1362 19.1363C18.7848 19.4877 18.2149 19.4877 17.8634 19.1363L11.9999 13.2727L6.13628 19.1363C5.78481 19.4877 5.21496 19.4877 4.86349 19.1363C4.51202 18.7848 4.51202 18.2149 4.86349 17.8635L10.7271 11.9999L4.86349 6.13625C4.51202 5.78478 4.51202 5.21493 4.86349 4.86346Z" fill="currentColor" /></svg>
          </button>
        )}
      </div>
    </div>
  );
}
