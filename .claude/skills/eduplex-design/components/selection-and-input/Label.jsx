import React from 'react';

/** The caption above a form control: label1 bold on label.neutral, with an
 * optional negative asterisk for required fields. */
export function Label({ required = false, display = 'inline-block', children, style, ...rest }) {
  return (
    <label
      data-wds="label"
      {...rest}
      style={{
        display,
        color: 'var(--semantic-label-neutral)',
        fontFamily: 'var(--font-family-core)',
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: '0.0145em',
        fontWeight: 600,
        ...style,
      }}
    >
      {children}
      {required && (
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            marginLeft: 4,
            color: 'var(--semantic-status-negative)',
            fontSize: 14,
            lineHeight: '20px',
            letterSpacing: '0.0145em',
            fontWeight: 500,
          }}
        >
          *
        </span>
      )}
    </label>
  );
}
