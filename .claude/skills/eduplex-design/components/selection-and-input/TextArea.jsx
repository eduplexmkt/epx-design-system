import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

/** Source line height for body1-reading — the row unit the auto-grow math uses. */
const LINE_HEIGHT = 26;

const LengthContext = createContext(0);

/** Multi-line input. Same 12px frosted shell as TextField, but the shell is a
 * column: the textarea sits on top, a bottom row carries counters and actions. */
export function TextArea({
  value,
  defaultValue,
  placeholder,
  invalid = false,
  disabled = false,
  width = 'fit-content',
  minRows = 2,
  maxRows,
  leadingContent,
  trailingContent,
  onChange,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [length, setLength] = useState(String(value ?? defaultValue ?? '').length);
  const ref = useRef(null);

  const grow = () => {
    const el = ref.current;
    if (!el) return;
    el.style.height = 'auto';
    const min = minRows * LINE_HEIGHT;
    const max = maxRows ? maxRows * LINE_HEIGHT : Infinity;
    el.style.height = Math.min(Math.max(el.scrollHeight, min), max) + 'px';
  };

  useEffect(grow);

  const ring = disabled
    ? 'inset 0 0 0 1px var(--semantic-line-normal-alternative)'
    : focused
      ? invalid
        ? 'inset 0 0 0 2px rgba(var(--semantic-status-negative-rgb),0.43)'
        : 'inset 0 0 0 2px rgba(var(--semantic-primary-normal-rgb),0.43)'
      : invalid
        ? 'inset 0 0 0 1px rgba(var(--semantic-status-negative-rgb),0.28)'
        : 'inset 0 0 0 1px var(--semantic-line-normal-neutral)';

  const showBottom = invalid || Boolean(leadingContent) || Boolean(trailingContent);

  return (
    <LengthContext.Provider value={length}>
      <div
        data-wds="text-area"
        onClick={(event) => {
          // Clicking the shell focuses the field, but never steals a click
          // aimed at a control sitting in the bottom row.
          if (disabled || event.target.closest('input, textarea, button, a, [contenteditable]')) return;
          ref.current?.focus();
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          width,
          padding: 12,
          border: 'none',
          borderRadius: 12,
          boxShadow: `${ring}, var(--elevation-shadow-xsmall)`,
          backgroundColor: disabled ? 'var(--semantic-fill-alternative)' : 'var(--semantic-background-transparent-normal)',
          backdropFilter: disabled ? 'none' : 'blur(32px)',
          cursor: disabled ? 'default' : 'text',
          transition: 'box-shadow ease 0.2s',
          ...style,
        }}
      >
        <textarea
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid}
          rows={minRows}
          onChange={(event) => {
            setLength(event.target.value.length);
            grow();
            onChange?.(event);
          }}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...rest}
          style={{
            display: 'block',
            width: '100%',
            height: minRows * LINE_HEIGHT,
            padding: '0px 4px',
            flexShrink: 2,
            border: 'none',
            outline: 'none',
            resize: 'none',
            background: 'transparent',
            caretColor: 'var(--semantic-primary-normal)',
            color: disabled ? 'var(--semantic-label-alternative)' : 'var(--semantic-label-normal)',
            fontFamily: 'var(--font-family-core)',
            fontSize: 16,
            lineHeight: `${LINE_HEIGHT}px`,
            letterSpacing: '0.0057em',
            fontWeight: 400,
            scrollbarWidth: 'none',
          }}
        />
        {showBottom && (
          <div data-role="text-area-bottom-area" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>{leadingContent}</div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {trailingContent ||
                (invalid && (
                  <TextAreaContent variant="icon" data-role="text-area-invalid" style={{ color: 'var(--semantic-status-negative)' }}>
                    <svg viewBox="0 0 24 24" width="22" height="22"><path fillRule="evenodd" clipRule="evenodd" d="M2.09991 11.9996C2.09991 6.53199 6.53228 2.09961 11.9999 2.09961C17.4675 2.09961 21.8998 6.53199 21.8998 11.9996C21.8998 17.4672 17.4675 21.8996 11.9999 21.8996C6.53228 21.8996 2.09991 17.4672 2.09991 11.9996ZM12 7.09951C12.497 7.09951 12.9 7.50246 12.9 7.99951V12.4995C12.9 12.9966 12.497 13.3995 12 13.3995C11.5029 13.3995 11.1 12.9966 11.1 12.4995V7.99951C11.1 7.50246 11.5029 7.09951 12 7.09951ZM12.9998 15.9995C12.9998 16.5518 12.5521 16.9995 11.9998 16.9995C11.4476 16.9995 10.9999 16.5518 10.9999 15.9995C10.9999 15.4472 11.4476 14.9995 11.9998 14.9995C12.5521 14.9995 12.9998 15.4472 12.9998 15.9995Z" fill="currentColor" /></svg>
                  </TextAreaContent>
                ))}
            </div>
          </div>
        )}
      </div>
    </LengthContext.Provider>
  );
}

/** Slot wrapper for anything placed in the text area's bottom row. */
export function TextAreaContent({ variant = 'characterCounter', children, style, ...rest }) {
  const length = useContext(LengthContext);
  const base = { flexShrink: 0, width: 'fit-content', height: 'fit-content' };

  if (variant === 'characterCounter') {
    const overflow = !isNaN(Number(children)) && length > Number(children);
    return (
      <div
        data-wds="text-area-content"
        {...rest}
        style={{
          ...base,
          padding: '0px 4px',
          opacity: 0.74,
          color: 'var(--semantic-label-alternative)',
          fontFamily: 'var(--font-family-core)',
          fontSize: 13,
          lineHeight: '18px',
          letterSpacing: '0.0194em',
          fontWeight: 500,
          ...style,
        }}
      >
        <span style={{ color: overflow ? 'var(--semantic-status-negative)' : undefined }}>{length}</span>
        <span>/</span>
        <span>{children}</span>
      </div>
    );
  }

  if (variant === 'button') {
    return <div data-wds="text-area-content" {...rest} style={{ ...base, display: 'flex', alignItems: 'center', maxHeight: 24, padding: '0px 4px', ...style }}>{children}</div>;
  }

  if (variant === 'icon') {
    return <div data-wds="text-area-content" {...rest} style={{ ...base, display: 'flex', fontSize: 22, padding: 1, color: 'var(--semantic-label-assistive)', ...style }}>{children}</div>;
  }

  return <div data-wds="text-area-content" {...rest} style={{ ...base, display: 'flex', ...style }}>{children}</div>;
}
