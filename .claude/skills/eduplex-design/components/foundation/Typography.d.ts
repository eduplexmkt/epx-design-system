import type { CSSProperties, ElementType, ReactNode } from 'react';

export type TypographyVariant =
  | 'display1'
  | 'display2'
  | 'display3'
  | 'title1'
  | 'title2'
  | 'title3'
  | 'heading1'
  | 'heading2'
  | 'headline1'
  | 'headline2'
  | 'body1'
  | 'body1-reading'
  | 'body2'
  | 'body2-reading'
  | 'label1'
  | 'label1-reading'
  | 'label2'
  | 'caption1'
  | 'caption2';

export type TypographyWeight = 'regular' | 'medium' | 'bold';

/**
 * The type primitive. `variant` picks size / line-height / letter-spacing from
 * the 19-step scale; `weight` resolves to 400 / 500 / bold, where bold is 700
 * on display and title variants and 600 on the rest.
 */
export interface TypographyProps {
  /** Rendered tag. Defaults to `span`. */
  as?: ElementType;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  /**
   * Whether to wrap the text.
   * If `noWrap` is set to true, the text will not wrap and overflowing content will be displayed with ellipsis.
   */
  noWrap?: boolean;
  /** The alignment of the text. */
  align?: CSSProperties['textAlign'];
  /** The display of the text. */
  display?: CSSProperties['display'];
  /**
   * Text color. Defaults to `inherit`. Upstream takes a `ThemeColorsToken`
   * (e.g. `semantic.label.strong`); here pass the matching CSS variable
   * (`var(--semantic-label-strong)`).
   */
  color?: string;
  children?: ReactNode;
  style?: CSSProperties;
}

export declare function Typography(props: TypographyProps): JSX.Element;
