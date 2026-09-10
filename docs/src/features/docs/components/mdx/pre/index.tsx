import { Box, ScrollArea } from '@eduplexmkt/mkt-design-system';

import { preStyle, preWrapperStyle } from './style';

import type { ComponentProps } from 'react';

type Props = ComponentProps<'pre'>;

const Pre = (props: Props) => {
  return (
    <ScrollArea sx={preWrapperStyle} data-role="pre">
      <Box sx={preStyle} {...props} as="pre" />
    </ScrollArea>
  );
};

export default Pre;
