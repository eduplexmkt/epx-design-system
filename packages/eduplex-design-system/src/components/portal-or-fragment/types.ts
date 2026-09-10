import type { Merge } from '@eduplexmkt/mkt-engine';
import type { PortalProps } from '../portal/types';

export type PortalOrFragmentProps = Merge<
  PortalProps,
  {
    disablePortal?: boolean;
  }
>;
