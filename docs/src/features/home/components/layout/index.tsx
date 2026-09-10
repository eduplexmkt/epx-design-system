'use client';
import { respondTo } from '@eduplexmkt/mkt-design-system';
import { FlexBox } from '@eduplexmkt/mkt-design-system';

import type { PropsWithChildren } from 'react';

const HomeLayout = ({ children }: PropsWithChildren) => {
  return (
    <FlexBox
      flexDirection="column"
      alignItems="center"
      sx={(theme) => ({
        width: '100%',
        padding: '0px var(--layout-padding-inline)',
        '--home-layout-gap': '96px',
        [respondTo(theme.breakpoint.md)]: {
          '--home-layout-gap': '80px',
        },
      })}
    >
      <FlexBox
        flexDirection="column"
        alignItems="center"
        sx={{ width: '100%', maxWidth: 'var(--layout-max-width)' }}
      >
        {children}
      </FlexBox>
    </FlexBox>
  );
};

export default HomeLayout;
