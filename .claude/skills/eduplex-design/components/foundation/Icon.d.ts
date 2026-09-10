import type { CSSProperties } from 'react';

/** Icon name, matching a file in assets/icons (e.g. "chevron-right"). */
export interface IconProps {
  name?: string;
  /** Rendered box in px. Montage sizes icons 12-24 depending on the host component. */
  size?: number;
  /** Explicit URL, overriding the name lookup. */
  src?: string;
  style?: CSSProperties;
}

export declare function Icon(props: IconProps): JSX.Element;
