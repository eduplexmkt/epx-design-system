import { css, respondTo } from '@eduplexmkt/mkt-design-system';

import type { Theme } from '@eduplexmkt/mkt-design-system';

export const fallbackTitleStyle = (theme: Theme) => css`
  color: ${theme.semantic.label.assistive};
  font-size: 120px;
  font-style: normal;
  font-weight: 700;
  line-height: 85px;
  letter-spacing: -3.384px;
  text-align: center;

  ${respondTo(theme.breakpoint.lg)} {
    font-size: 80px;
    line-height: 57px;
    letter-spacing: -2.256px;
  }
`;
