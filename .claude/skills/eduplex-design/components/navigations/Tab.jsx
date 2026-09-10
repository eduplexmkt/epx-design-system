import React from 'react';

const SIZES = {
  small: { padY: 9, padX: 12, font: 15, line: '22px', ls: '0.0096em' },
  medium: { padY: 12, padX: 12, font: 17, line: '24px', ls: '0em' },
  large: { padY: 14, padX: 12, font: 17, line: '24px', ls: '0em' },
};

/** The list's horizontal inset, and the fade the overflow edges are masked with. */
const LIST_PADDING = 20;
const FADE = '48px';

// The theme's mask ramp, verbatim from getGradientMaskImage(..., 'mask').
// rgba() here is mask alpha, not a paint color.
const MASK_OFFSET = [1, 0.86, 0.74, 0.63, 0.54, 0.46, 0.4, 0.34, 0.29, 0.24, 0.2, 0.17, 0.13, 0.09, 0.05, 0];
const MASK_OPACITY = [1, 0.86, 0.73, 0.62, 0.52, 0.43, 0.35, 0.29, 0.23, 0.18, 0.14, 0.1, 0.07, 0.04, 0.02, 0];
const maskGradient = (direction, size) =>
  `linear-gradient(to ${direction}, ${MASK_OFFSET.map(
    (offset, i) => `rgba(0, 0, 0, ${MASK_OPACITY[i]}) calc(100% - calc(${size} * ${offset}))`,
  ).join(', ')})`;

/** The scroll area hides its bars; neither rule can be written inline. */
const SCROLLBAR_CSS =
  '[data-role="tab-scroll-area"]{scrollbar-width:none;-ms-overflow-style:none}' +
  '[data-role="tab-scroll-area"]::-webkit-scrollbar{display:none}';

/** Underline tab bar. The 2px selected rule is the only selection cue. */
export function Tab({
  items = [],
  value,
  size = 'medium',
  resize = 'hug',
  horizontalPadding = false,
  iconButton,
  onChange,
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.medium;
  const fill = resize === 'fill';
  const padX = fill ? 0 : s.padX;
  const [hovered, setHovered] = React.useState(null);
  const [edges, setEdges] = React.useState({ left: false, right: false });
  const scrollRef = React.useRef(null);

  // `resize="fill"` never scrolls, so it never fades or shows the sticky button.
  const showIconButton = Boolean(iconButton) && !fill;

  const measure = React.useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const left = el.scrollLeft > 0;
    const right = Math.ceil(el.scrollLeft + el.clientWidth) < el.scrollWidth;
    // Keep the previous object when nothing moved, so re-measuring on every
    // render cannot loop.
    setEdges((prev) => (prev.left === left && prev.right === right ? prev : { left, right }));
  }, []);

  React.useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure, items, size, resize]);

  const maskImage = (() => {
    if (fill) return 'none';
    if (horizontalPadding) {
      // With the inset, only the sticky button's edge is faded.
      return showIconButton && edges.right ? maskGradient('right', FADE) : 'none';
    }
    const parts = [edges.left && maskGradient('left', FADE), edges.right && maskGradient('right', FADE)].filter(Boolean);
    return parts.length ? parts.join(', ') : 'none';
  })();

  const contentPadding = (() => {
    if (fill || !horizontalPadding) return 0;
    return showIconButton ? `0 0 0 ${LIST_PADDING}px` : `0 ${LIST_PADDING}px`;
  })();

  return (
    <div
      role="tablist"
      data-wds="tab"
      {...rest}
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        gap: 20,
        margin: 0,
        padding: 0,
        listStyle: 'none',
        boxShadow: 'inset 0 -1px 0 0 var(--semantic-line-normal-alternative)',
        ...style,
      }}
    >
      <style>{SCROLLBAR_CSS}</style>
      <div
        ref={scrollRef}
        data-role="tab-scroll-area"
        onScroll={measure}
        style={{
          flex: '1 1 auto',
          minWidth: 0,
          overflowX: fill ? 'visible' : 'auto',
          scrollBehavior: 'smooth',
          maskImage,
          WebkitMaskImage: maskImage,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      >
        <div data-role="tab-list-wrapper" style={{ position: 'relative', display: 'flex', gap: padX * 2, padding: contentPadding, width: fill ? '100%' : 'fit-content' }}>
          {items.map((it) => {
            const on = it.value === value;
            const hover = hovered === it.value && !it.disabled && !on;
            return (
              <button
                key={it.value}
                type="button"
                role="tab"
                aria-selected={on}
                aria-disabled={it.disabled || undefined}
                disabled={it.disabled}
                onMouseEnter={() => setHovered(it.value)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => onChange && onChange(it.value)}
                style={{
                  position: 'relative',
                  flex: fill ? '1 1 0' : 'initial',
                  overflow: fill ? 'hidden' : 'initial',
                  padding: `${s.padY}px 0`,
                  border: 'none',
                  background: 'none',
                  scrollMarginInline: 25,
                  cursor: it.disabled ? 'initial' : 'pointer',
                  fontFamily: 'var(--font-family-core)',
                  fontSize: s.font,
                  lineHeight: s.line,
                  letterSpacing: s.ls,
                  fontWeight: 600,
                  textAlign: fill ? 'center' : 'initial',
                  color: it.disabled
                    ? 'var(--semantic-label-disable)'
                    : on
                      ? 'var(--semantic-label-strong)'
                      : hover
                        ? 'var(--semantic-label-alternative)'
                        : 'var(--semantic-label-assistive)',
                  transition: 'color 0.2s ease',
                }}
              >
                <span data-role="tab-list-item-text" style={{ position: 'relative', whiteSpace: 'nowrap', display: 'block', textAlign: fill ? 'center' : 'initial' }}>
                  {it.label}
                </span>
                <span
                  data-role="tab-list-item-divider"
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    height: 2,
                    maxHeight: on ? 2 : 0,
                    backgroundColor: on
                      ? it.disabled
                        ? 'var(--semantic-fill-alternative)'
                        : 'var(--semantic-label-strong)'
                      : 'transparent',
                    transition: 'background-color 0.2s ease',
                  }}
                />
                {/* Hit area, not a tint: it reaches padding-x past both edges so the
                    gap between items still belongs to the tab. */}
                <span
                  data-role="tab-list-item-interaction-area"
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: `calc(100% + ${padX * 2}px)`,
                    height: '100%',
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>

      {showIconButton && (
        <span
          data-role="tab-list-icon-button"
          style={{
            position: 'sticky',
            right: 0,
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            flexShrink: 0,
            padding: horizontalPadding ? `0 ${LIST_PADDING - 4}px 0 0` : 0,
          }}
        >
          {iconButton}
        </span>
      )}
    </div>
  );
}
