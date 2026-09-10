import React from 'react';

/** The six type variants SectionHeader draws on, verbatim from typography/style.ts.
 * `bold` is 700 on title variants and 600 on the rest. */
const TYPE = {
  label1: { fontSize: '0.875rem', lineHeight: '1.25rem', letterSpacing: '0.0145em', fontWeight: 600 },
  headline2: { fontSize: '1.0625rem', lineHeight: '1.5rem', letterSpacing: '0em', fontWeight: 600 },
  headline1: { fontSize: '1.125rem', lineHeight: '1.625rem', letterSpacing: '-0.002em', fontWeight: 600 },
  heading2: { fontSize: '1.25rem', lineHeight: '1.75rem', letterSpacing: '-0.012em', fontWeight: 600 },
  heading1: { fontSize: '1.375rem', lineHeight: '1.875rem', letterSpacing: '-0.0194em', fontWeight: 600 },
  title3: { fontSize: '1.5rem', lineHeight: '2rem', letterSpacing: '-0.023em', fontWeight: 700 },
  title2: { fontSize: '1.75rem', lineHeight: '2.375rem', letterSpacing: '-0.0236em', fontWeight: 700 },
};

const SIZES = {
  xsmall: { color: 'var(--semantic-label-alternative)', desktop: 'label1', mobile: 'label1', maxHeightDesktop: 20, maxHeightMobile: 20 },
  small: { color: 'var(--semantic-label-strong)', desktop: 'headline1', mobile: 'headline2', maxHeightDesktop: 26, maxHeightMobile: 24 },
  medium: { color: 'var(--semantic-label-strong)', desktop: 'heading1', mobile: 'heading2', maxHeightDesktop: 30, maxHeightMobile: 28 },
  large: { color: 'var(--semantic-label-strong)', desktop: 'title2', mobile: 'title3', maxHeightDesktop: 38, maxHeightMobile: 32 },
};

/** Titles a block of content, with optional inline heading affordances and a
 * trailing slot for "전체보기" style actions. */
export function SectionHeader({ size = 'medium', platform = 'desktop', headingContent, trailingContent, color, headingTag = 'h2', children, style, ...rest }) {
  const s = SIZES[size] || SIZES.medium;
  const type = TYPE[platform === 'desktop' ? s.desktop : s.mobile];
  const maxHeight = platform === 'desktop' ? s.maxHeightDesktop : s.maxHeightMobile;
  return (
    <div
      data-wds="section-header"
      data-size={size}
      {...rest}
      style={{
        display: 'flex',
        width: '100%',
        gap: 12,
        fontFamily: 'var(--font-family-core)',
        fontSize: type.fontSize,
        lineHeight: type.lineHeight,
        letterSpacing: type.letterSpacing,
        fontWeight: type.fontWeight,
        color: color || s.color,
        ...style,
      }}
    >
      <div data-role="section-header-content" style={{ display: 'flex', gap: 12, flex: '1 0 0', alignItems: 'flex-end' }}>
        {React.createElement(
          headingTag,
          { 'data-role': 'section-header-content-heading', style: { font: 'inherit', color: 'inherit', margin: 0 } },
          children,
        )}
        {Boolean(headingContent) && (
          <div data-role="section-header-heading-content" style={{ display: 'flex', gap: 10, alignItems: 'center', maxHeight }}>
            {headingContent}
          </div>
        )}
      </div>
      {Boolean(trailingContent) && (
        <div data-role="section-header-trailing-content" style={{ display: 'flex', gap: 20, alignItems: 'center', alignSelf: 'end', maxHeight }}>
          {trailingContent}
        </div>
      )}
    </div>
  );
}
