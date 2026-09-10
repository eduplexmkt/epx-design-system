import React from 'react';

/** A 2px determinate bar. The fill is one element slid in from -100%, never resized. */
export function ProgressIndicator({ percent = 0, style, ...rest }) {
  return (
    <div
      data-wds="progress-indicator"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percent}
      aria-valuetext={percent + '%'}
      aria-label="Progress indicator"
      {...rest}
      style={{
        position: 'relative',
        width: '100%',
        height: 2,
        overflow: 'hidden',
        backgroundColor: 'var(--semantic-fill-normal)',
        ...style,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'var(--semantic-primary-normal)',
          transform: `translateX(${-100 + percent}%)`,
          transition: 'transform 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      />
    </div>
  );
}
