import React from 'react';

/** The 19 variants of the type scale, verbatim from typography/style.ts. */
const VARIANTS = {
  display1: { fontSize: '3.5rem', lineHeight: '4.5rem', letterSpacing: '-0.0319em' },
  display2: { fontSize: '2.5rem', lineHeight: '3.25rem', letterSpacing: '-0.0282em' },
  display3: { fontSize: '2.25rem', lineHeight: '3rem', letterSpacing: '-0.027em' },
  title1: { fontSize: '2rem', lineHeight: '2.75rem', letterSpacing: '-0.0253em' },
  title2: { fontSize: '1.75rem', lineHeight: '2.375rem', letterSpacing: '-0.0236em' },
  title3: { fontSize: '1.5rem', lineHeight: '2rem', letterSpacing: '-0.023em' },
  heading1: { fontSize: '1.375rem', lineHeight: '1.875rem', letterSpacing: '-0.0194em' },
  heading2: { fontSize: '1.25rem', lineHeight: '1.75rem', letterSpacing: '-0.012em' },
  headline1: { fontSize: '1.125rem', lineHeight: '1.625rem', letterSpacing: '-0.002em' },
  headline2: { fontSize: '1.0625rem', lineHeight: '1.5rem', letterSpacing: '0em' },
  body1: { fontSize: '1rem', lineHeight: '1.5rem', letterSpacing: '0.0057em' },
  'body1-reading': { fontSize: '1rem', lineHeight: '1.625rem', letterSpacing: '0.0057em' },
  body2: { fontSize: '0.9375rem', lineHeight: '1.375rem', letterSpacing: '0.0096em' },
  'body2-reading': { fontSize: '0.9375rem', lineHeight: '1.5rem', letterSpacing: '0.0096em' },
  label1: { fontSize: '0.875rem', lineHeight: '1.25rem', letterSpacing: '0.0145em' },
  'label1-reading': { fontSize: '0.875rem', lineHeight: '1.375rem', letterSpacing: '0.0145em' },
  label2: { fontSize: '0.8125rem', lineHeight: '1.125rem', letterSpacing: '0.0194em' },
  caption1: { fontSize: '0.75rem', lineHeight: '1rem', letterSpacing: '0.0252em' },
  caption2: { fontSize: '0.6875rem', lineHeight: '0.875rem', letterSpacing: '0.0311em' },
};

/** getWeightMap: bold is 700 on display/title, 600 on everything else. */
const HEAVY_BOLD = ['display1', 'display2', 'display3', 'title1', 'title2', 'title3'];

function getWeight(variant, weight) {
  if (weight === 'medium') return 500;
  if (weight === 'bold') return HEAVY_BOLD.includes(variant) ? 700 : 600;
  return 400;
}

/** Every piece of text in the system. Color is `inherit` unless one is passed,
 * so Typography takes the color of whatever surface it sits in. */
export function Typography({ as = 'span', variant = 'body1', weight = 'regular', noWrap = false, align, display, color = 'inherit', children, style, ...rest }) {
  const v = VARIANTS[variant] || VARIANTS.body1;
  return React.createElement(
    as,
    {
      'data-wds': 'typography',
      'data-variant': variant,
      ...rest,
      style: {
        fontFamily: 'var(--font-family-core)',
        fontSize: v.fontSize,
        lineHeight: v.lineHeight,
        letterSpacing: v.letterSpacing,
        fontWeight: getWeight(variant, weight),
        color,
        ...(noWrap ? { textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' } : null),
        ...(align ? { textAlign: align } : null),
        ...(display ? { display } : null),
        ...style,
      },
    },
    children,
  );
}
