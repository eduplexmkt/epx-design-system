import React from 'react';

const PLATFORM = {
  desktop: { gap: 8, ratio: '3 / 2', contentPad: '0 6px', title: { font: 16, line: '24px', ls: '0.0057em' }, caption: { font: 13, line: '18px', ls: '0.0194em' }, overlayPad: 14 },
  mobile: { gap: 6, ratio: '4 / 3', contentPad: '0 2px', title: { font: 15, line: '22px', ls: '0.0096em' }, caption: { font: 13, line: '18px', ls: '0.0194em' }, overlayPad: 10 },
};

/** Thumbnail-led content card. The image scales 1.025x on hover; nothing else moves. */
export function Card({ platform = 'desktop', width = '100%', src, alt = '', ratio, title, caption, overlay, badges, footer, onClick, style, ...rest }) {
  const p = PLATFORM[platform] || PLATFORM.desktop;
  const [hover, setHover] = React.useState(false);
  return (
    <div
      data-wds="card"
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
      style={{ display: 'flex', flexDirection: 'column', gap: p.gap, width, cursor: onClick ? 'pointer' : 'default', ...style }}
    >
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{ position: 'relative', width: '100%', aspectRatio: ratio || p.ratio, borderRadius: 12, overflow: 'hidden', backgroundColor: 'var(--semantic-fill-alternative)' }}>
          {src && <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hover ? 'scale(1.025)' : 'scale(1)', transition: 'transform 0.2s ease', willChange: 'transform' }} />}
          {overlay && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', padding: p.overlayPad, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
              <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), transparent)', pointerEvents: 'none' }} />
              <span style={{ position: 'relative', color: 'var(--semantic-static-white)', fontSize: platform === 'desktop' ? 13 : 11, lineHeight: platform === 'desktop' ? '18px' : '14px', fontWeight: 600 }}>{overlay}</span>
            </div>
          )}
        </div>
      </div>
      <div style={{ padding: p.contentPad, overflow: 'hidden' }}>
        {badges && <div style={{ display: 'flex', gap: 6, marginTop: 2, marginBottom: 4 }}>{badges}</div>}
        {title != null && (
          <div style={{ marginBottom: 2, color: 'var(--semantic-label-normal)', fontWeight: 600, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', ...p.title }}>{title}</div>
        )}
        {caption != null && (
          <div style={{ color: 'var(--semantic-label-alternative)', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', ...p.caption }}>{caption}</div>
        )}
        {footer && <div style={{ marginTop: platform === 'desktop' ? 8 : 6, display: 'flex', alignItems: 'center', gap: 6 }}>{footer}</div>}
      </div>
    </div>
  );
}
