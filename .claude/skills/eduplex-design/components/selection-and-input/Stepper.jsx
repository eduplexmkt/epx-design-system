import React, { Children, cloneElement, isValidElement } from 'react';

/** Horizontal progress trail: numbered 20px circles joined by tight chevrons. */
export function Stepper({ value, children, style, ...rest }) {
  const items = Children.toArray(children).filter(isValidElement);
  const activeIndex = items.findIndex((child) => child.props.value === value);

  return (
    <ol
      data-wds="stepper"
      aria-label="progress"
      {...rest}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 24,
        width: '100%',
        height: 'fit-content',
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        ...style,
      }}
    >
      {items.map((child, index) =>
        cloneElement(child, { key: index, index, isActive: index === activeIndex, isCompleted: activeIndex > index }),
      )}
    </ol>
  );
}

/** One step. Rendered by Stepper — index and state are injected, not passed. */
export function StepperItem({ value, index = 0, isActive = false, isCompleted = false, label, completedLabel, style, ...rest }) {
  const text = isCompleted ? completedLabel : label;
  const filled = isActive || isCompleted;

  return (
    <React.Fragment>
      {index !== 0 && (
        <span aria-hidden="true" style={{ display: 'flex', fontSize: 16, color: 'var(--semantic-label-assistive)' }}>
          <svg viewBox="0 0 12 24" width="16" height="16"><path d="M2.86364 4.86346C2.51217 5.21493 2.51217 5.78478 2.86364 6.13625L8.72725 11.9999L2.86364 17.8635C2.51217 18.2149 2.51217 18.7848 2.86364 19.1362C3.21511 19.4877 3.78496 19.4877 4.13643 19.1362L10.6364 12.6362C10.9879 12.2848 10.9879 11.7149 10.6364 11.3635L4.13643 4.86346C3.78496 4.51199 3.21511 4.51199 2.86364 4.86346Z" fill="currentColor" /></svg>
        </span>
      )}
      <li
        data-wds="stepper-item"
        aria-current={isActive ? 'step' : undefined}
        aria-label={`Step ${index}`}
        {...rest}
        style={{ display: 'flex', alignItems: 'center', gap: 8, ...style }}
      >
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: 20,
            height: 20,
            borderRadius: 9999,
            fontSize: 14,
            backgroundColor: filled ? 'var(--semantic-primary-normal)' : 'var(--semantic-fill-strong)',
            color: 'var(--semantic-static-white)',
          }}
        >
          {isCompleted ? (
            <svg viewBox="0 0 24 24" width="14" height="14"><path d="M19.6697 6.58096C20.1774 7.08864 20.1774 7.91175 19.6697 8.41943L10.6697 17.4194C10.1621 17.9271 9.33894 17.9271 8.83126 17.4194L4.33126 12.9194C3.82358 12.4118 3.82358 11.5886 4.33126 11.081C4.83894 10.5733 5.66206 10.5733 6.16974 11.081L9.7505 14.6617L17.8313 6.58096C18.3389 6.07327 19.1621 6.07327 19.6697 6.58096Z" fill="currentColor" /></svg>
          ) : (
            <span
              style={{
                textAlign: 'center',
                fontFamily: 'var(--font-family-core)',
                fontSize: 12,
                lineHeight: '16px',
                letterSpacing: '0.0252em',
                fontWeight: 600,
                textShadow: filled ? 'none' : '0px 0px 12px rgba(0,0,0,0.12)',
              }}
            >
              {index + 1}
            </span>
          )}
        </span>
        {Boolean(text) && (
          <span
            style={{
              padding: '1px 0px',
              height: 'fit-content',
              color: isActive ? 'var(--semantic-label-normal)' : 'var(--semantic-label-alternative)',
              fontFamily: 'var(--font-family-core)',
              fontSize: 13,
              lineHeight: '18px',
              letterSpacing: '0.0194em',
              fontWeight: 600,
            }}
          >
            {text}
          </span>
        )}
      </li>
    </React.Fragment>
  );
}
