import React, { useState } from 'react';

/** Montage's text input: a frosted 12px-radius shell with a hairline drawn as an
 * inset shadow, thickening to 2px primary on focus. */
export function TextField({
  value,
  defaultValue,
  placeholder,
  invalid = false,
  disabled = false,
  readOnly = false,
  width = 'initial',
  leadingContent,
  trailingContent,
  trailingButton,
  onChange,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const ring = disabled
    ? 'inset 0 0 0 1px var(--semantic-line-normal-alternative)'
    : focused
      ? invalid
        ? 'inset 0 0 0 2px rgba(var(--semantic-status-negative-rgb),0.43)'
        : 'inset 0 0 0 2px rgba(var(--semantic-primary-normal-rgb),0.43)'
      : invalid
        ? 'inset 0 0 0 1px rgba(var(--semantic-status-negative-rgb),0.28)'
        : 'inset 0 0 0 1px var(--semantic-line-normal-neutral)';

  return (
    <div
      data-wds="text-field"
      style={{
        display: 'flex',
        alignItems: 'center',
        width,
        borderRadius: 12,
        boxShadow: 'var(--elevation-shadow-xsmall)',
        backgroundColor: disabled ? 'var(--semantic-fill-alternative)' : 'var(--semantic-background-transparent-normal)',
        backdropFilter: disabled ? undefined : 'blur(32px)',
        ...style,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          flex: '1 1 auto',
          minWidth: 0,
          padding: 12,
          borderRadius: trailingButton ? '12px 0 0 12px' : 12,
          boxShadow: ring,
          cursor: disabled ? 'default' : 'text',
          transition: 'box-shadow ease 0.2s',
        }}
      >
        {leadingContent && <span style={{ display: 'flex', flexShrink: 0, fontSize: 20, color: 'var(--semantic-label-alternative)', maxHeight: 24 }}>{leadingContent}</span>}
        <input
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
          style={{
            padding: '0 4px',
            width: '100%',
            minHeight: 24,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            caretColor: 'var(--semantic-primary-normal)',
            color: disabled ? 'var(--semantic-label-alternative)' : 'var(--semantic-label-normal)',
            fontFamily: 'var(--font-family-core)',
            fontSize: 16,
            lineHeight: '24px',
            letterSpacing: '0.0057em',
          }}
        />
        {invalid && !focused && <StatusDot color="var(--semantic-status-negative)" />}
        {trailingContent && <span style={{ display: 'flex', flexShrink: 0, fontSize: 20, color: 'var(--semantic-label-alternative)', maxHeight: 24 }}>{trailingContent}</span>}
      </div>
      {trailingButton && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexShrink: 0,
            minWidth: 80,
            padding: '12px 16px',
            borderRadius: '0 12px 12px 0',
            boxShadow: 'inset 0 0 0 1px var(--semantic-line-normal-neutral)',
            color: 'var(--semantic-label-normal)',
            fontSize: 16,
            lineHeight: '24px',
            fontWeight: 600,
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          {trailingButton}
        </div>
      )}
    </div>
  );
}

function StatusDot({ color }) {
  return <span aria-hidden="true" style={{ flexShrink: 0, width: 20, height: 20, borderRadius: 9999, backgroundColor: color, display: 'flex' }} />;
}
