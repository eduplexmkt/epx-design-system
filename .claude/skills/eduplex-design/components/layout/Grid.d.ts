import type { CSSProperties, ElementType, ReactNode } from 'react';

/**
 * Key of the spacing scale — 0, 0.5, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 32,
 * 40, 48, 56, 64, 72, 80 — not a raw px value.
 */
export type GridSpacing =
  | 0 | 0.5 | 1 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 20
  | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80;

/**
 * 12-column grid container. Gutters are negative margins here plus matching
 * padding on each GridItem, passed down as `--wds-row-spacing` /
 * `--wds-column-spacing`.
 */
export interface GridProps {
  /** Rendered tag. Defaults to `div`. */
  as?: ElementType;
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  /** Both gutters at once. Defaults to `20`. */
  spacing?: GridSpacing;
  /** Horizontal gutter. Defaults to `spacing`. */
  rowSpacing?: GridSpacing;
  /** Vertical gutter. Defaults to `spacing`. */
  columnSpacing?: GridSpacing;
  /** The content of the grid. Use `GridItem` components as the children. */
  children?: ReactNode;
  style?: CSSProperties;
}

export declare function Grid(props: GridProps): JSX.Element;
