import React from 'react';

const HEIGHTS = { small: 4, medium: 8 };

/** A segmented progress bar: one equal-width segment per step, filled up to the current one. */
export function ProgressStepIndicator({ steps = [], value, size = 'medium', divider = true, style, ...rest }) {
  const height = HEIGHTS[size] || HEIGHTS.medium;
  const activeIndex = steps.findIndex((s) => s.value === value);
  const last = steps.length - 1;
  return (
    <div
      data-wds="progress-step-indicator"
      aria-label="progress"
      {...rest}
      style={{ position: 'relative', width: '100%', height, ...style }}
    >
      <ol style={{ display: 'flex', alignItems: 'center', height: '100%', listStyle: 'none', padding: 0, margin: 0, gap: divider ? 1 : 0 }}>
        {steps.map((step, i) => {
          const completed = activeIndex !== -1 && activeIndex >= i;
          return (
            <li
              key={step.value}
              aria-label={`Step ${i}`}
              aria-current={activeIndex === i ? 'step' : undefined}
              data-is-completed={completed}
              style={{
                flex: '1 1 0',
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                backgroundColor: 'var(--semantic-fill-normal)',
                borderTopLeftRadius: i === 0 ? 999 : 0,
                borderBottomLeftRadius: i === 0 ? 999 : 0,
                borderTopRightRadius: i === last ? 999 : 0,
                borderBottomRightRadius: i === last ? 999 : 0,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: completed ? 0 : '0 0 0 -100%',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'var(--semantic-primary-normal)',
                }}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
