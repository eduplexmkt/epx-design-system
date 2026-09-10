import React from 'react';

/** Loading placeholder. Text rows are fill.normal, blocks are fill.alternative. */
export function Skeleton({ variant = 'text', width, height, radius, animation = true, style, ...rest }) {
  const base = {
    position: 'relative',
    flexShrink: 0,
    width: variant === 'text' ? '100%' : width,
    animation: animation ? 'wds-skeleton-pulse 2s ease-in-out infinite' : undefined,
  };
  const shape =
    variant === 'text'
      ? { display: 'inline-flex', padding: '2px 0px', borderRadius: 3, height: height || 22 }
      : variant === 'circle'
        ? { borderRadius: '50%', width, height }
        : { borderRadius: radius || 12, width, height };
  const fill = variant === 'rectangle' ? 'var(--semantic-fill-alternative)' : 'var(--semantic-fill-normal)';
  return (
    <span data-wds="skeleton" {...rest} style={{ ...base, ...shape, ...style }}>
      <style>{'@keyframes wds-skeleton-pulse{0%{opacity:.5}50%{opacity:1}100%{opacity:.5}}'}</style>
      <span style={{ display: 'block', width: variant === 'text' && width ? width : '100%', height: '100%', borderRadius: 'inherit', backgroundColor: fill }} />
    </span>
  );
}
