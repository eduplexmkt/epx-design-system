import React from 'react';

const SEARCH_ICON = "<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M9.99973 2.09961C5.6367 2.09961 2.09976 5.63656 2.09976 9.99961C2.09976 14.3627 5.6367 17.8996 9.99973 17.8996C11.857 17.8996 13.5646 17.2587 14.9134 16.1859L19.8634 21.136C20.2149 21.4874 20.7848 21.4874 21.1362 21.136C21.4877 20.7845 21.4877 20.2146 21.1362 19.8632L16.1862 14.9131C17.2588 13.5643 17.8997 11.8568 17.8997 9.99961C17.8997 5.63656 14.3628 2.09961 9.99973 2.09961ZM3.89976 9.99961C3.89976 6.63067 6.63081 3.89961 9.99973 3.89961C13.3687 3.89961 16.0997 6.63067 16.0997 9.99961C16.0997 13.3685 13.3687 16.0996 9.99973 16.0996C6.63081 16.0996 3.89976 13.3685 3.89976 9.99961Z\" fill=\"currentColor\"/>";
const CLOSE_ICON = "<path d=\"M4.86349 4.86346C5.21496 4.51199 5.78481 4.51199 6.13628 4.86346L11.9999 10.7271L17.8634 4.86346C18.2149 4.51199 18.7848 4.51199 19.1362 4.86346C19.4877 5.21493 19.4877 5.78478 19.1362 6.13625L13.2726 11.9999L19.1362 17.8635C19.4877 18.2149 19.4877 18.7848 19.1362 19.1363C18.7848 19.4877 18.2149 19.4877 17.8634 19.1363L11.9999 13.2727L6.13628 19.1363C5.78481 19.4877 5.21496 19.4877 4.86349 19.1363C4.51202 18.7848 4.51202 18.2149 4.86349 17.8635L10.7271 11.9999L4.86349 6.13625C4.51202 5.78478 4.51202 5.21493 4.86349 4.86346Z\" fill=\"currentColor\"/>";

const GLYPH = (markup) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none">${markup}</svg>`;

/** Search input — flatter than TextField: a fill-tinted 12px shell with no
 * hairline and no elevation. The magnifier is built in, and so is the reset
 * button, which appears only while the field is focused and non-empty. */
export function SearchField({ size = 'medium', placeholder = '검색', value, defaultValue, disabled = false, readOnly = false, width = 'initial', wrapperRef, onReset, onChange, style, ...rest }) {
  const inputRef = React.useRef(null);
  const [focused, setFocused] = React.useState(false);
  const [empty, setEmpty] = React.useState((value !== undefined ? value : defaultValue || '') === '');

  React.useEffect(() => {
    if (value !== undefined) setEmpty(value === '');
  }, [value]);

  const iconColor = disabled
    ? 'var(--semantic-label-disable)'
    : empty
      ? 'var(--semantic-label-assistive)'
      : 'var(--semantic-label-alternative)';
  const showReset = !disabled && !readOnly && focused && !empty;

  const reset = () => {
    const prev = inputRef.current ? inputRef.current.value : '';
    if (inputRef.current && value === undefined) inputRef.current.value = '';
    setEmpty(true);
    if (onReset) onReset(prev);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div
      ref={wrapperRef}
      data-wds="search-field"
      onClick={() => inputRef.current && inputRef.current.focus()}
      style={{
        display: 'flex',
        alignItems: 'center',
        width,
        padding: size === 'small' ? 8 : 12,
        borderRadius: 12,
        border: 'none',
        backgroundColor: 'var(--semantic-fill-normal)',
        backdropFilter: 'blur(32px)',
        willChange: 'backdrop-filter',
        cursor: disabled ? 'default' : 'text',
        ...style,
      }}
    >
      <span
        aria-hidden="true"
        data-role="search-field-icon"
        style={{ display: 'flex', flexShrink: 0, width: 'fit-content', height: 'fit-content', fontSize: 20, padding: '0 2px', color: iconColor, transition: 'color ease 0.2s' }}
        dangerouslySetInnerHTML={{ __html: GLYPH(SEARCH_ICON) }}
      />
      <input
        ref={inputRef}
        type="search"
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => {
          setEmpty(e.target.value === '');
          if (onChange) onChange(e);
        }}
        {...rest}
        style={{
          width: '100%',
          minHeight: 24,
          padding: 0,
          margin: 0,
          border: 'none',
          outline: 'none',
          boxShadow: 'none',
          background: 'transparent',
          caretColor: 'var(--semantic-primary-normal)',
          transition: 'color ease 0.2s',
          color: disabled ? 'var(--semantic-label-alternative)' : 'var(--semantic-label-normal)',
          fontFamily: 'var(--font-family-core)',
          fontSize: 16,
          lineHeight: '24px',
          letterSpacing: '0.0057em',
          fontWeight: 400,
        }}
      />
      <button
        type="button"
        tabIndex={-1}
        aria-label="지우기"
        data-role="search-field-reset"
        onMouseDown={(e) => e.preventDefault()}
        onClick={reset}
        style={{
          display: showReset ? 'flex' : 'none',
          flexShrink: 0,
          width: 'fit-content',
          height: 'fit-content',
          fontSize: 20,
          padding: '0 2px',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          color: 'var(--semantic-label-alternative)',
        }}
        dangerouslySetInnerHTML={{ __html: GLYPH(CLOSE_ICON) }}
      />
      <style>{`[data-wds="search-field"] input::placeholder{color:var(--semantic-label-assistive)}[data-wds="search-field"] input:disabled::placeholder{color:var(--semantic-label-disable)}[data-wds="search-field"] input::-webkit-search-cancel-button,[data-wds="search-field"] input::-webkit-search-decoration{appearance:none;-webkit-appearance:none}`}</style>
    </div>
  );
}
