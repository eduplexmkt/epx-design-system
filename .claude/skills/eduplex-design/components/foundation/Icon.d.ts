import type { CSSProperties, ReactNode } from 'react';

export interface IconProps {
  /** Icon name, matching a file in assets/icons (e.g. "chevron-right"). Used as the accessible title when paths are passed as children. */
  name?: string;
  /** Rendered box in px. The system sizes icons 12-24 depending on the host component. */
  size?: number;
  /** The markup between <svg> and </svg>, lifted from assets/icons/<name>.svg. */
  markup?: string;
  /** Defaults to "0 0 24 24"; a handful of icons declare their own. */
  viewBox?: string;
  /** Paths as JSX, an alternative to `markup`. */
  children?: ReactNode;
  style?: CSSProperties;
}

export declare function Icon(props: IconProps): JSX.Element;
