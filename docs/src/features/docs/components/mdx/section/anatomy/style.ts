import { css, respondTo } from '@eduplexmkt/mkt-design-system';

import type { Theme } from '@eduplexmkt/mkt-design-system';

export const anatomyListStyle = css`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const anatomyItemStyle = (theme: Theme) => css`
  width: calc(33% - 16px - 0.2em);

  ${respondTo(theme.breakpoint.sm)} {
    width: calc(50% - 16px);
  }
`;
