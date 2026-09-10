import React from 'react';

const PLATFORM = {
  desktop: {
    gap: 8,
    ratio: '3 / 2',
    contentPad: '0 6px',
    title: { font: 16, line: '24px', ls: '0.0057em' },
    caption: { font: 13, line: '18px', ls: '0.0194em' },
    overlayText: { font: 13, line: '18px', ls: '0.0194em' },
    overlayPad: 14,
    footerTop: 8,
  },
  mobile: {
    gap: 6,
    ratio: '4 / 3',
    contentPad: '0 2px',
    title: { font: 15, line: '22px', ls: '0.0096em' },
    caption: { font: 13, line: '18px', ls: '0.0194em' },
    overlayText: { font: 11, line: '14px', ls: '0.0311em' },
    overlayPad: 10,
    footerTop: 6,
  },
};

// The scrim's mask ramp, verbatim from the theme's gradient() mask stops.
// The rgba() here is mask alpha, not a paint color — the fill is static.black.
const MASK_OFFSET = [1, 0.86, 0.74, 0.63, 0.54, 0.46, 0.4, 0.34, 0.29, 0.24, 0.2, 0.17, 0.13, 0.09, 0.05, 0];
const MASK_OPACITY = [1, 0.86, 0.73, 0.62, 0.52, 0.43, 0.35, 0.29, 0.23, 0.18, 0.14, 0.1, 0.07, 0.04, 0.02, 0];
const OVERLAY_MASK = `linear-gradient(to bottom, ${MASK_OFFSET.map(
  (offset, i) => `rgba(0, 0, 0, ${MASK_OPACITY[i]}) ${Math.round((1 - offset) * 100)}%`,
).join(', ')})`;

/** Descendant selectors are out of reach for inline styles, so the toggle slot's
 * button sizing and its unpressed white tint ship as a scoped rule. */
const TOGGLE_CSS =
  '[data-role="card-thumbnail-content-toggle-icon"][data-platform="desktop"] > button{width:24px;height:24px;font-size:24px}' +
  '[data-role="card-thumbnail-content-toggle-icon"][data-platform="mobile"] > button{width:20px;height:20px;font-size:20px}' +
  '[data-role="card-thumbnail-content-toggle-icon"] button[aria-pressed="false"]{color:var(--semantic-static-white)}';

/** Thumbnail-led content card. The image scales 1.025x on hover; nothing else moves. */
export function Card({
  platform = 'desktop',
  width = '100%',
  src,
  alt = '',
  ratio,
  title,
  caption,
  overlay,
  overlayAction,
  badges,
  footer,
  onClick,
  style,
  ...rest
}) {
  const p = PLATFORM[platform] || PLATFORM.desktop;
  const [hover, setHover] = React.useState(false);
  const hasOverlay = Boolean(overlay) || Boolean(overlayAction);

  return (
    <div
      data-wds="card"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
      style={{ display: 'flex', flexDirection: 'column', gap: p.gap, width, cursor: onClick ? 'pointer' : 'default', ...style }}
    >
      <style>{TOGGLE_CSS}</style>
      <div style={{ position: 'relative', width: '100%' }}>
        {/* Thumbnail: radius + a 1px line.normal.neutral hairline, always. */}
        <div
          data-wds="thumbnail"
          style={{
            position: 'relative',
            width: '100%',
            aspectRatio: ratio || p.ratio,
            borderRadius: 12,
            overflow: 'hidden',
            backgroundColor: 'var(--semantic-fill-alternative)',
          }}
        >
          {src && (
            <img
              src={src}
              alt={alt}
              style={{
                borderRadius: 'inherit',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: hover ? 'scale(1.025)' : 'scale(1)',
                transition: 'transform 0.2s ease',
                willChange: 'transform',
              }}
            />
          )}
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              borderRadius: 'inherit',
              border: '1px solid var(--semantic-line-normal-neutral)',
              boxSizing: 'border-box',
              pointerEvents: 'none',
            }}
          />
        </div>

        {hasOverlay && (
          <div
            data-role="card-thumbnail-content-wrapper"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              display: 'flex',
              gap: 4,
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              padding: p.overlayPad,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: 12,
                maskImage: OVERLAY_MASK,
                WebkitMaskImage: OVERLAY_MASK,
                backgroundColor: 'var(--semantic-static-black)',
                opacity: 0.35,
                zIndex: 1,
                pointerEvents: 'none',
              }}
            />
            <span
              data-role="card-thumbnail-content-text"
              style={{
                position: 'relative',
                zIndex: 2,
                display: 'flex',
                flex: 1,
                color: 'var(--semantic-static-white)',
                fontWeight: 600,
                fontSize: p.overlayText.font,
                lineHeight: p.overlayText.line,
                letterSpacing: p.overlayText.ls,
              }}
            >
              {overlay}
            </span>
            {overlayAction && (
              <span
                data-role="card-thumbnail-content-toggle-icon"
                data-platform={platform}
                style={{ position: 'relative', zIndex: 2, display: 'flex' }}
              >
                {overlayAction}
              </span>
            )}
          </div>
        )}
      </div>

      <div data-wds="card-content" style={{ display: 'flex', flexDirection: 'column', flex: 1, gap: 2, padding: p.contentPad, overflow: 'hidden' }}>
        {badges && <div style={{ display: 'flex', gap: 6, marginTop: 2, marginBottom: 4 }}>{badges}</div>}
        {title != null && (
          <p
            data-wds="card-title"
            style={{
              margin: 0,
              marginBottom: 2,
              fontWeight: 600,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              fontSize: p.title.font,
              lineHeight: p.title.line,
              letterSpacing: p.title.ls,
            }}
          >
            {title}
          </p>
        )}
        {caption != null && (
          <p
            data-wds="card-caption"
            style={{
              margin: 0,
              color: 'var(--semantic-label-alternative)',
              fontWeight: 500,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              fontSize: p.caption.font,
              lineHeight: p.caption.line,
              letterSpacing: p.caption.ls,
            }}
          >
            {caption}
          </p>
        )}
        {footer && <div style={{ marginTop: p.footerTop, display: 'flex', alignItems: 'center', gap: 6 }}>{footer}</div>}
      </div>
    </div>
  );
}
