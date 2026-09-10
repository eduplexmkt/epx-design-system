import React from 'react';

/** `display: flex` plus the flex properties, as props. Numbers become px
 * (gap={12} → 12px); strings pass through untouched. */
export function FlexBox({ as = 'div', flexDirection, flexWrap, justifyContent, alignItems, alignContent, order, flex, flexGrow, flexShrink, flexBasis, alignSelf, gap, rowGap, columnGap, children, style, ...rest }) {
  return React.createElement(
    as,
    {
      'data-wds': 'flex-box',
      ...rest,
      style: {
        display: 'flex',
        ...(gap !== undefined ? { gap } : null),
        ...(rowGap !== undefined ? { rowGap } : null),
        ...(columnGap !== undefined ? { columnGap } : null),
        ...(flexDirection !== undefined ? { flexDirection } : null),
        ...(flexWrap !== undefined ? { flexWrap } : null),
        ...(justifyContent !== undefined ? { justifyContent } : null),
        ...(alignItems !== undefined ? { alignItems } : null),
        ...(alignContent !== undefined ? { alignContent } : null),
        ...(order !== undefined ? { order } : null),
        ...(flex !== undefined ? { flex } : null),
        ...(flexGrow !== undefined ? { flexGrow } : null),
        ...(flexShrink !== undefined ? { flexShrink } : null),
        ...(alignSelf !== undefined ? { alignSelf } : null),
        ...(flexBasis !== undefined ? { flexBasis } : null),
        ...style,
      },
    },
    children,
  );
}
