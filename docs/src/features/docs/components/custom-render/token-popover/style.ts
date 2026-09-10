import { css } from '@eduplexmkt/mkt-design-system';

import type { Theme } from '@eduplexmkt/mkt-design-system';

export const popoverIconStyle = (theme: Theme) => css`
  color: ${theme.semantic.label.normal};
  font-size: 24px;
`;

export const palettePopoverWrapperStyle = css`
  min-width: unset !important;
  max-width: 100%;
  padding-inline: var(--layout-padding-inline);
`;
