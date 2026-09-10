import React, { useState } from 'react';

/** ::placeholder cannot be written as an inline style, so it ships as a scoped rule. */
const PLACEHOLDER_CSS =
  '[data-wds="text-field"] input::placeholder{color:var(--semantic-label-assistive)}' +
  '[data-wds="text-field"] input:disabled::placeholder{color:var(--semantic-label-disable)}';

/** The slot every leading/trailing content sits in. Size and color come from the
 * content itself — the slot only caps its height. */
const CONTENT_SLOT = {
  display: 'flex',
  flexShrink: 0,
  width: 'fit-content',
  height: 'fit-content',
  maxHeight: 24,
};

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
  height = 'auto',
  leadingContent,
  trailingContent,
  trailingButton,
  trailingButtonVariant = 'normal',
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
        height,
        border: 'none',
        borderRadius: 12,
        boxShadow: 'var(--elevation-shadow-xsmall)',
        backgroundColor: disabled ? 'var(--semantic-fill-alternative)' : 'var(--semantic-background-transparent-normal)',
        backdropFilter: disabled ? 'none' : 'blur(32px)',
        ...style,
      }}
    >
      <style>{PLACEHOLDER_CSS}</style>
      <div
        data-role="text-field-wrapper"
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          flex: '1 1 auto',
          minWidth: 0,
          height: '100%',
          padding: 12,
          borderRadius: trailingButton ? '12px 0 0 12px' : 'inherit',
          boxShadow: ring,
          cursor: disabled ? 'default' : 'text',
          transition: 'box-shadow ease 0.2s',
        }}
      >
        {leadingContent && <span style={CONTENT_SLOT}>{leadingContent}</span>}
        <input
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          aria-readonly={readOnly}
          aria-invalid={invalid}
          aria-disabled={disabled}
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
            boxShadow: 'none',
            background: 'transparent',
            caretColor: 'var(--semantic-primary-normal)',
            color: disabled ? 'var(--semantic-label-alternative)' : 'var(--semantic-label-normal)',
            fontFamily: 'var(--font-family-core)',
            fontSize: 16,
            lineHeight: '24px',
            letterSpacing: '0.0057em',
            fontWeight: 400,
          }}
        />
        {invalid && !focused && <InvalidIcon />}
        {trailingContent && <span style={CONTENT_SLOT}>{trailingContent}</span>}
      </div>
      {trailingButton && (
        <button
          type="button"
          data-role="text-field-button"
          disabled={disabled}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            overflow: 'hidden',
            minWidth: 80,
            height: '100%',
            padding: '12px 16px',
            border: 'none',
            borderRadius: '0 12px 12px 0',
            boxShadow: 'none',
            backgroundColor: 'transparent',
            color: disabled
              ? 'var(--semantic-label-disable)'
              : trailingButtonVariant === 'assistive'
                ? 'var(--semantic-label-normal)'
                : 'var(--semantic-primary-normal)',
            fontFamily: 'var(--font-family-core)',
            fontSize: 16,
            lineHeight: '24px',
            letterSpacing: '0.0057em',
            fontWeight: trailingButtonVariant === 'assistive' ? 500 : 600,
            cursor: disabled ? 'default' : 'pointer',
          }}
        >
          {/* Stands in for the source's ::before: 3px wider than the button and
              pinned right, so its left hairline is clipped by `overflow: hidden`
              and the seam against the field stays a single 1px line. */}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              width: 'calc(100% + 3px)',
              height: '100%',
              borderRadius: 'inherit',
              boxShadow: disabled
                ? 'inset 0 0 0 1px var(--semantic-line-normal-alternative)'
                : 'inset 0 0 0 1px var(--semantic-line-normal-neutral)',
              pointerEvents: 'none',
            }}
          />
          <span style={{ position: 'relative', zIndex: 1 }}>{trailingButton}</span>
        </button>
      )}
    </div>
  );
}

/** The invalid marker: a 22px filled glyph over a white square that masks the
 * middle 50% so the exclamation reads on any field fill. */
function InvalidIcon() {
  return (
    <span data-role="text-field-invalid" style={{ ...CONTENT_SLOT, position: 'relative', padding: 1, fontSize: 22 }}>
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '50%',
          height: '50%',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'var(--semantic-static-white)',
        }}
      />
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" style={{ position: 'relative', zIndex: 1, color: 'var(--semantic-status-negative)' }}>
        <path fillRule="evenodd" clipRule="evenodd" d="M2.09991 11.9996C2.09991 6.53199 6.53228 2.09961 11.9999 2.09961C17.4675 2.09961 21.8998 6.53199 21.8998 11.9996C21.8998 17.4672 17.4675 21.8996 11.9999 21.8996C6.53228 21.8996 2.09991 17.4672 2.09991 11.9996ZM12 7.09951C12.497 7.09951 12.9 7.50246 12.9 7.99951V12.4995C12.9 12.9966 12.497 13.3995 12 13.3995C11.5029 13.3995 11.1 12.9966 11.1 12.4995V7.99951C11.1 7.50246 11.5029 7.09951 12 7.09951ZM12.9998 15.9995C12.9998 16.5518 12.5521 16.9995 11.9998 16.9995C11.4476 16.9995 10.9999 16.5518 10.9999 15.9995C10.9999 15.4472 11.4476 14.9995 11.9998 14.9995C12.5521 14.9995 12.9998 15.4472 12.9998 15.9995Z" fill="currentColor" />
      </svg>
    </span>
  );
}
