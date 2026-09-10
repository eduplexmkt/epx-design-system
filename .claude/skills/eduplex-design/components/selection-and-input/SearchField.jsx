import React from 'react';

/** Search input — flatter than TextField: a fill-tinted 12px shell with no
 * hairline and no elevation. */
export function SearchField({ size = 'medium', placeholder = '검색', value, defaultValue, disabled = false, width = 'initial', leadingContent, trailingContent, onChange, style, ...rest }) {
  return (
    <div
      data-wds="search-field"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        width,
        padding: size === 'small' ? 8 : 12,
        borderRadius: 12,
        backgroundColor: 'var(--semantic-fill-normal)',
        backdropFilter: 'blur(32px)',
        cursor: disabled ? 'default' : 'text',
        ...style,
      }}
    >
      <span style={{ display: 'flex', flexShrink: 0, padding: '0 2px', fontSize: 20, color: disabled ? 'var(--semantic-label-disable)' : 'var(--semantic-label-alternative)' }}>{leadingContent}</span>
      <input
        type="search"
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        {...rest}
        style={{
          width: '100%',
          minHeight: 24,
          padding: 0,
          margin: 0,
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
      {trailingContent && <span style={{ display: 'flex', flexShrink: 0, padding: '0 2px', fontSize: 20, color: 'var(--semantic-label-alternative)' }}>{trailingContent}</span>}
    </div>
  );
}
