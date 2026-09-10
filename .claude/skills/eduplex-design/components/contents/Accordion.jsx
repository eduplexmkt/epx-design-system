import React from 'react';

const EASING = 'cubic-bezier(0.25, 0.1, 0.25, 1)';
const CELL_PAD = { none: 0, small: 8, medium: 12, large: 16 };
const CHEVRON_PATH =
  'M4.36337 8.3637C4.71484 8.01223 5.28469 8.01223 5.63616 8.3637L11.9998 14.7273L18.3634 8.3637C18.7148 8.01223 19.2847 8.01223 19.6362 8.3637C19.9876 8.71517 19.9876 9.28502 19.6362 9.63649L12.6362 16.6365C12.2847 16.988 11.7148 16.988 11.3634 16.6365L4.36337 9.63649C4.01189 9.28502 4.01189 8.71517 4.36337 8.3637Z';

/**
 * One disclosure row. The summary is a list cell; the divider underneath fades
 * out on hover so a pressed row reads as one block.
 */
export function Accordion({
  summary,
  description,
  children,
  expanded: controlled,
  defaultExpanded = false,
  disabled = false,
  divider = true,
  disableAnimation = false,
  verticalPadding = 'large',
  leadingContent,
  trailingContent,
  onChange,
  style,
  ...rest
}) {
  const [uncontrolled, setUncontrolled] = React.useState(defaultExpanded);
  const expanded = controlled !== undefined ? controlled : uncontrolled;
  const [hover, setHover] = React.useState(false);
  const wrapperRef = React.useRef(null);
  const [height, setHeight] = React.useState(0);
  const padY = CELL_PAD[verticalPadding] ?? CELL_PAD.large;

  React.useEffect(() => {
    if (wrapperRef.current) setHeight(wrapperRef.current.offsetHeight);
  }, [children, description, expanded]);

  const toggle = () => {
    if (disabled) return;
    const next = !expanded;
    if (controlled === undefined) setUncontrolled(next);
    if (onChange) onChange(next);
  };

  return (
    <div
      data-wds="accordion"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
      style={{ width: '100%', ...style }}
    >
      <div style={{ opacity: disabled ? 0.2 : 1 }}>
        <div
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-expanded={expanded}
          aria-disabled={disabled}
          onClick={toggle}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggle();
            }
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            width: '100%',
            paddingTop: padY,
            paddingBottom: padY,
            cursor: disabled ? 'initial' : 'pointer',
            color: 'var(--semantic-label-normal)',
            boxSizing: 'border-box',
          }}
        >
          {leadingContent && <span style={{ display: 'flex', flexShrink: 0, minWidth: 20, minHeight: 24, fontSize: 20, alignItems: 'center' }}>{leadingContent}</span>}
          <span
            style={{
              flex: 1,
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              minHeight: 24,
              gap: 4,
              overflow: 'hidden',
              fontSize: 15,
              lineHeight: '22px',
              letterSpacing: '0.0096em',
              fontWeight: 600,
            }}
          >
            {summary}
          </span>
          <span
            data-role="accordion-summary-expand-icon"
            style={{
              display: 'flex',
              flexShrink: 0,
              alignItems: 'center',
              justifyContent: 'flex-end',
              minWidth: 20,
              minHeight: 24,
              padding: '2px 0px',
              fontSize: 20,
              color: 'var(--semantic-label-normal)',
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: disableAnimation ? undefined : `transform 0.3s ${EASING}`,
            }}
          >
            {trailingContent || (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                <path d={CHEVRON_PATH} fill="currentColor" />
              </svg>
            )}
          </span>
        </div>

        <div
          aria-hidden={!expanded}
          data-status={expanded ? 'open' : 'close'}
          style={{
            height: expanded ? height : 0,
            overflow: expanded ? 'visible' : 'hidden',
            transition: disableAnimation ? undefined : `height 0.3s ${EASING}`,
          }}
        >
          <div ref={wrapperRef} style={{ display: 'flex', flexDirection: 'column', paddingBottom: padY }}>
            {description != null && (
              <p style={{ margin: 0, fontSize: 14, lineHeight: '20px', letterSpacing: '0.0145em', fontWeight: 400, color: 'var(--semantic-label-neutral)' }}>{description}</p>
            )}
            {children != null && <div style={{ marginTop: description != null ? padY : 0 }}>{children}</div>}
          </div>
        </div>
      </div>

      {divider && (
        <hr
          data-role="accordion-divider"
          style={{
            margin: '0 auto',
            width: '100%',
            height: 0,
            borderStyle: 'solid',
            borderWidth: 0,
            borderBottomWidth: 1,
            borderColor: 'var(--semantic-line-normal-alternative)',
            opacity: !expanded && hover && !disabled ? 0 : 1,
            transition: disableAnimation ? undefined : `opacity 0.3s ${EASING}`,
          }}
        />
      )}
    </div>
  );
}
