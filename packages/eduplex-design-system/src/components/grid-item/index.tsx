import { forwardRef } from 'react';
import { Box } from '@eduplexmkt/mkt-engine';

import { gridItemStyle } from './style';

import type {
  PolymorphicComponentInternal,
  PolymorphicPropsInternal,
} from '@eduplexmkt/mkt-engine';
import type { ElementType, ForwardedRef } from 'react';
import type { GridItemProps } from './types';

const GridItem = forwardRef(
  <T extends ElementType = 'div'>(
    {
      as,
      alignSelf = 'initial',
      columns,
      offset,
      xs,
      sm,
      md,
      lg,
      xl,
      ...props
    }: PolymorphicPropsInternal<GridItemProps, T>,
    ref: ForwardedRef<T>,
  ) => {
    return (
      <Box
        as={as || 'div'}
        ref={ref}
        {...props}
        sx={[
          gridItemStyle({
            columns,
            alignSelf,
            offset,
            xs,
            sm,
            md,
            lg,
            xl,
          }),
          props.sx,
        ]}
      />
    );
  },
) as PolymorphicComponentInternal<GridItemProps, 'div'>;

GridItem.displayName = 'GridItem';

export { GridItem };

export type { GridItemProps };
