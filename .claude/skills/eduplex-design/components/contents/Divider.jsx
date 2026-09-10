import React from 'react';

/** Hairline rule. Solid tokens for opaque separators, normal tokens for
 * separators that sit over color or imagery. */
export function Divider({ vertical = false, thickness = 1, size = '100%', color = 'var(--semantic-line-normal-alternative)', style, ...rest }) {
  return (
    <hr
      data-wds="divider"
      {...rest}
      style={{
        margin: 0,
        borderStyle: 'solid',
        borderColor: color,
        borderWidth: 0,
        ...(vertical
          ? { borderRightWidth: thickness, width: 0, height: size, alignSelf: 'stretch' }
          : { borderBottomWidth: thickness, height: 0, width: size }),
        ...style,
      }}
    />
  );
}
