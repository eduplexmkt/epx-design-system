import React from 'react';

const SIZES = {
  small: { width: 360, fixedHeight: 400, popupRadius: 12, contentMargin: 20, navPad: '16px 16px', navMinHeight: 56, actionPad: '20px 20px' },
  medium: { width: 400, fixedHeight: 480, popupRadius: 12, contentMargin: 20, navPad: '20px 16px', navMinHeight: 64, actionPad: '20px 20px' },
  large: { width: 480, fixedHeight: 560, popupRadius: 20, contentMargin: 24, navPad: '20px 20px', navMinHeight: 64, actionPad: '24px 24px' },
  xlarge: { width: 560, fixedHeight: 640, popupRadius: 20, contentMargin: 32, navPad: '24px 28px', navMinHeight: 72, actionPad: '24px 32px' },
};

const CLOSE_PATH =
  'M4.86349 4.86346C5.21496 4.51199 5.78481 4.51199 6.13628 4.86346L11.9999 10.7271L17.8634 4.86346C18.2149 4.51199 18.7848 4.51199 19.1362 4.86346C19.4877 5.21493 19.4877 5.78478 19.1362 6.13625L13.2726 11.9999L19.1362 17.8635C19.4877 18.2149 19.4877 18.7848 19.1362 19.1363C18.7848 19.4877 18.2149 19.4877 17.8634 19.1363L11.9999 13.2727L6.13628 19.1363C5.78481 19.4877 5.21496 19.4877 4.86349 19.1363C4.51202 18.7848 4.51202 18.2149 4.86349 17.8635L10.7271 11.9999L4.86349 6.13625C4.51202 5.78478 4.51202 5.21493 4.86349 4.86346Z';

const WRAPPER_VARIANT = {
  popup: { alignItems: 'center', justifyContent: 'center', padding: 20 },
  bottom: { alignItems: 'flex-end', justifyContent: 'center', padding: 0 },
  full: { alignItems: 'stretch', justifyContent: 'center', padding: 0 },
};

/**
 * Dialog layer. The wrapper is fixed at z-index 1300 over a `material.dimmer`
 * scrim; popup floats centred, bottom rises as a sheet, full takes the viewport.
 * Portal, scroll lock and focus trap are simplified away — geometry is verbatim.
 */
export function Modal({
  open = false,
  variant = 'popup',
  size = 'medium',
  resize = 'hug',
  handle = false,
  title,
  leadingContent,
  trailingContent,
  actions,
  onOpenChange,
  disableOutsideClickClose = false,
  disableEscapeKeyDownClose = false,
  children,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const close = React.useCallback(() => onOpenChange && onOpenChange(false), [onOpenChange]);

  React.useEffect(() => {
    if (!open || disableEscapeKeyDownClose) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, disableEscapeKeyDownClose, close]);

  const shell =
    variant === 'full'
      ? { width: '100%', height: '100%', maxWidth: '100%', maxHeight: '100%', minWidth: 'initial', borderRadius: 0 }
      : variant === 'bottom'
        ? {
            width: '100%',
            maxWidth: 480,
            minWidth: 'initial',
            maxHeight: 'calc(100% - env(safe-area-inset-top, 0px) - 40px)',
            paddingBottom: 'env(safe-area-inset-bottom, 0px)',
            borderRadius: '12px 12px 0px 0px',
            overflow: 'hidden',
            transform: open ? 'translateY(0)' : 'translateY(100%)',
            transition: 'transform 200ms ease, box-shadow 200ms ease',
            boxShadow: 'var(--elevation-spread-medium)',
          }
        : {
            width: s.width,
            minWidth: 320,
            maxWidth: '100%',
            height: resize === 'fixed' ? s.fixedHeight : 'initial',
            maxHeight: 'min(760px, 100%)',
            borderRadius: s.popupRadius,
            overflow: 'hidden',
          };

  const showNav = title != null || leadingContent || trailingContent !== null;

  return (
    <div
      data-wds="modal"
      data-visibility={open ? 'visible' : 'hidden'}
      {...rest}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        display: open ? 'flex' : 'none',
        width: '100vw',
        height: '100dvh',
        zIndex: 1300,
        ...WRAPPER_VARIANT[variant],
        ...style,
      }}
    >
      <div
        data-role="modal-dimmer"
        onClick={disableOutsideClickClose ? undefined : close}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: -1,
          backgroundColor: 'var(--semantic-material-dimmer)',
          transition: 'opacity ease 200ms',
          opacity: open ? 1 : 0,
        }}
      />
      <div
        role="dialog"
        aria-modal="true"
        data-role="modal-container"
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          outline: 'none',
          backgroundColor: 'var(--semantic-background-elevated-normal)',
          boxSizing: 'border-box',
          ...shell,
        }}
      >
        {variant === 'bottom' && handle && (
          <div
            data-role="modal-grabber"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              padding: '7px 2px 0px 2px',
              marginBottom: 8,
              backgroundColor: 'var(--semantic-background-elevated-normal)',
              zIndex: 10,
              touchAction: 'pan-y',
              boxSizing: 'border-box',
            }}
          >
            <span style={{ display: 'block', width: 40, height: 5, margin: '0 auto', borderRadius: 1000, backgroundColor: 'var(--semantic-fill-strong)' }} />
          </div>
        )}

        {showNav && (
          <div
            data-role="modal-navigation"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              width: '100%',
              padding: s.navPad,
              minHeight: s.navMinHeight,
              position: 'sticky',
              top: 0,
              left: 0,
              zIndex: 5,
              backgroundColor: 'var(--semantic-background-elevated-normal)',
              boxSizing: 'border-box',
            }}
          >
            {leadingContent && <div style={{ flex: '0 0 auto', display: 'flex' }}>{leadingContent}</div>}
            <div
              data-role="navigation-title"
              style={{
                flex: '1 1 auto',
                minWidth: 0,
                maxHeight: 24,
                padding: '0px 4px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
                fontSize: 20,
                lineHeight: '28px',
                letterSpacing: '-0.012em',
                fontWeight: 600,
                color: 'var(--semantic-label-normal)',
              }}
            >
              {title}
            </div>
            <div style={{ flex: '0 0 auto', display: 'flex' }}>
              {trailingContent === undefined ? (
                <button
                  type="button"
                  aria-label="Close dialog"
                  onClick={close}
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, height: 24, padding: 0, border: 'none', background: 'none', cursor: 'pointer', color: 'var(--semantic-label-alternative)' }}
                >
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
                    <path d={CLOSE_PATH} fill="currentColor" />
                  </svg>
                </button>
              ) : (
                trailingContent
              )}
            </div>
          </div>
        )}

        <div
          data-role="modal-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: s.contentMargin,
            width: '100%',
            flex: '1 1 auto',
            minHeight: 0,
            overflowY: 'auto',
            padding: `${s.contentMargin}px ${s.contentMargin}px`,
            boxSizing: 'border-box',
          }}
        >
          {children}
        </div>

        {actions && (
          <div
            data-role="modal-action-area"
            style={{
              position: 'sticky',
              bottom: 0,
              left: 0,
              zIndex: 5,
              width: '100%',
              padding: s.actionPad,
              backgroundColor: 'var(--semantic-background-elevated-normal)',
              display: 'flex',
              gap: 8,
              boxSizing: 'border-box',
            }}
          >
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}

/** Groups lines that belong together — a 12px column inside the content's 20–32px rhythm. */
export function ModalContentItem({ children, style, ...rest }) {
  return (
    <div {...rest} style={{ display: 'flex', flexDirection: 'column', gap: 12, ...style }}>
      {children}
    </div>
  );
}

/** heading2 bold — the dialog's own title, distinct from the navigation title. */
export function ModalHeading({ children, style, ...rest }) {
  return (
    <h2 {...rest} style={{ margin: 0, fontSize: 20, lineHeight: '28px', letterSpacing: '-0.012em', fontWeight: 600, color: 'var(--semantic-label-normal)', wordBreak: 'keep-all', overflowWrap: 'break-word', ...style }}>
      {children}
    </h2>
  );
}

/** body2 regular on label.alternative — the line under the heading. */
export function ModalSummary({ children, style, ...rest }) {
  return (
    <p {...rest} style={{ margin: 0, fontSize: 15, lineHeight: '22px', letterSpacing: '0.0096em', fontWeight: 400, color: 'var(--semantic-label-alternative)', wordBreak: 'keep-all', overflowWrap: 'break-word', ...style }}>
      {children}
    </p>
  );
}

/** body1-reading regular on label.normal — the dialog's body copy. */
export function ModalDescription({ children, style, ...rest }) {
  return (
    <p {...rest} style={{ margin: 0, fontSize: 16, lineHeight: '26px', letterSpacing: '0.0057em', fontWeight: 400, color: 'var(--semantic-label-normal)', wordBreak: 'keep-all', overflowWrap: 'break-word', ...style }}>
      {children}
    </p>
  );
}
