import type { CSSProperties, ElementType, ReactNode } from 'react';

/**
 * One cell of a Grid. Must be a direct child of `Grid` — its gutter padding
 * comes from the `--wds-row-spacing` / `--wds-column-spacing` variables the
 * parent publishes.
 */
export interface GridItemProps {
  /** Rendered tag. Defaults to `div`. */
  as?: ElementType;
  alignSelf?: CSSProperties['alignSelf'];
  /**
   * Width in twelfths. `true` shares the leftover space equally
   * (`flex-grow: 1`), `'auto'` sizes to content (`flex: 0 0 auto`).
   */
  columns?:
    | 1
    | 2
    | 2.4
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 'auto'
    | true;
  /** Indent by this many twelfths, or `'auto'` to push to the right edge. */
  offset?: number | 'auto';
  children?: ReactNode;
  style?: CSSProperties;
}

export declare function GridItem(props: GridItemProps): JSX.Element;
