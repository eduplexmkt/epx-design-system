import { css, typographyStyle } from '@eduplexmkt/mkt-design-system';

import type { Theme } from '@eduplexmkt/mkt-design-system';

export const paletteTitleStyle = (theme: Theme) => css`
  && {
    margin-top: 48px;
    margin-bottom: 12px;
    color: ${theme.semantic.label.strong};

    ${typographyStyle('headline2', 'bold')}

    &:first-of-type {
      margin-top: 0px;
    }
  }
`;
