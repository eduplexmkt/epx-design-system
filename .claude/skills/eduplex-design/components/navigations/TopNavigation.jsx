import React from 'react';

/** Top app bar. normal centers a title between icon slots; display left-aligns a
 * title3; search puts a SearchField in the title slot. */
export function TopNavigation({ variant = 'normal', title, leftContent, rightContent, background = true, style, ...rest }) {
  const frost = background
    ? { backgroundColor: 'color-mix(in srgb, var(--semantic-background-elevated-normal) 88%, transparent)', backdropFilter: 'blur(32px)' }
    : {};
  const base = {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    padding: '16px',
    position: 'relative',
    boxSizing: 'border-box',
  };
  if (variant === 'display') {
    return (
      <div data-wds="top-navigation" {...rest} style={{ ...base, gap: 20, ...frost, ...style }}>
        {leftContent && <div style={{ display: 'flex', flexShrink: 0 }}>{leftContent}</div>}
        <div style={{ flex: '1 1 auto', minWidth: 0, padding: '0 4px' }}>
          <h2 style={{ margin: 0, fontSize: 24, lineHeight: '32px', letterSpacing: '-0.023em', fontWeight: 700, color: 'var(--semantic-label-normal)', wordBreak: 'keep-all' }}>{title}</h2>
        </div>
        {rightContent && <div style={{ display: 'flex', flexShrink: 0, gap: 4 }}>{rightContent}</div>}
      </div>
    );
  }
  if (variant === 'search') {
    return (
      <div data-wds="top-navigation" {...rest} style={{ ...base, gap: 12, ...frost, ...style }}>
        {leftContent && <div style={{ display: 'flex', flexShrink: 0 }}>{leftContent}</div>}
        <div style={{ flex: '1 1 auto', minWidth: 0 }}>{title}</div>
        {rightContent && <div style={{ display: 'flex', flexShrink: 0, gap: 4 }}>{rightContent}</div>}
      </div>
    );
  }
  return (
    <div data-wds="top-navigation" {...rest} style={{ ...base, minHeight: 56, justifyContent: 'center', ...frost, ...style }}>
      {leftContent && <div style={{ position: 'absolute', left: 16, top: 16, display: 'flex' }}>{leftContent}</div>}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', maxHeight: 24, padding: '0 4px' }}>
        <h2 style={{ margin: 0, width: '80%', textAlign: 'center', fontSize: 17, lineHeight: '24px', fontWeight: 600, color: 'var(--semantic-label-normal)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</h2>
      </div>
      {rightContent && <div style={{ position: 'absolute', right: 16, top: 16, display: 'flex', gap: 4 }}>{rightContent}</div>}
    </div>
  );
}
