import React from 'react';

/** The spacing scale (theme.spacing) — `spacing` is a key of it, not a px value. */
const SPACING = {
  0: '0px', 0.5: '0.5px', 1: '1px', 2: '2px', 4: '4px', 6: '6px', 8: '8px',
  10: '10px', 12: '12px', 14: '14px', 16: '16px', 20: '20px', 24: '24px',
  32: '32px', 40: '40px', 48: '48px', 56: '56px', 64: '64px', 72: '72px', 80: '80px',
};

/** 12-column container. Gutters are negative margins on the container plus
 * matching padding on each GridItem, published through two CSS variables. */
export function Grid({ as = 'div', justifyContent = 'initial', alignItems = 'initial', spacing = 20, rowSpacing = spacing, columnSpacing = spacing, children, style, ...rest }) {
  const row = SPACING[rowSpacing];
  const column = SPACING[columnSpacing];
  return React.createElement(
    as,
    {
      'data-wds': 'grid',
      ...rest,
      style: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent,
        alignItems,
        ...(rowSpacing
          ? { '--wds-row-spacing': row, width: `calc(100% + ${row})`, marginLeft: `calc(${row} * -1)` }
          : null),
        ...(columnSpacing
          ? { '--wds-column-spacing': column, marginTop: `calc(${column} * -1)` }
          : null),
        ...style,
      },
    },
    children,
  );
}
