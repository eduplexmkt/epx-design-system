import React from 'react';

/** Grid divides by 12; widths are rounded to 6 decimal places, exactly as the
 * source does (Math.round((value / 12) * 10e7) / 10e5). */
const toPercent = (value) => `${Math.round((value / 12) * 10e7) / 10e5}%`;

const columnStyle = (columns) => {
  if (!columns) return null;
  if (columns === true) {
    return { flexGrow: 1, flexBasis: 0, flexShrink: 'initial', maxWidth: '100%', width: 'initial' };
  }
  if (columns === 'auto') {
    return { flex: '0 0 auto', maxWidth: 'initial', width: 'auto' };
  }
  return { maxWidth: toPercent(columns), width: 'initial', flexGrow: 0, flexBasis: toPercent(columns), flexShrink: 'initial' };
};

const offsetStyle = (offset) => {
  if (!offset) return null;
  if (offset === 'auto') return { marginLeft: 'auto' };
  return { marginLeft: `calc(100% * ${offset} / 12)` };
};

/** A cell of a Grid. Its padding is the gutter the parent Grid published. */
export function GridItem({ as = 'div', alignSelf = 'initial', columns, offset, children, style, ...rest }) {
  return React.createElement(
    as,
    {
      'data-wds': 'grid-item',
      ...rest,
      style: {
        paddingTop: 'var(--wds-column-spacing)',
        paddingLeft: 'var(--wds-row-spacing)',
        alignSelf,
        ...columnStyle(columns),
        ...offsetStyle(offset),
        ...style,
      },
    },
    children,
  );
}
