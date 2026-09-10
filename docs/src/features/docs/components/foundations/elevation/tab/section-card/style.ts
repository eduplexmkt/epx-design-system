import { css } from '@eduplexmkt/mkt-design-system';

import type { Theme } from '@eduplexmkt/mkt-design-system';

export const sectionCardStyle = (theme: Theme) => css`
  border-radius: 24px;

  &::after {
    border-color: ${theme.semantic.line.normal.alternative};
  }
`;
