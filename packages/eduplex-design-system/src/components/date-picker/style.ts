import { css } from '@eduplexmkt/mkt-engine';

import type { Theme } from '@eduplexmkt/mkt-engine';

export const datePopperStyle = (theme: Theme) => css`
  background-color: ${theme.semantic.background.elevated.normal};
  box-shadow: ${theme.semantic.elevation.shadow.normal.small};
  border-radius: 12px;
  border: 1px solid ${theme.semantic.line.solid.neutral};
  overflow: hidden;
`;
