import type { CSSProperties, ElementType, ReactNode } from 'react';

/**
 * Flex container primitive. Every prop maps 1:1 to the CSS property of the same
 * name; only the ones you pass are emitted, so nothing is set by default except
 * `display: flex`.
 */
export interface FlexBoxProps {
  /** Rendered tag. Defaults to `div`. */
  as?: ElementType;
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  alignContent?: CSSProperties['alignContent'];
  order?: CSSProperties['order'];
  flex?: CSSProperties['flex'];
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
  flexBasis?: CSSProperties['flexBasis'];
  alignSelf?: CSSProperties['alignSelf'];
  gap?: CSSProperties['gap'];
  rowGap?: CSSProperties['rowGap'];
  columnGap?: CSSProperties['columnGap'];
  children?: ReactNode;
  style?: CSSProperties;
}

export declare function FlexBox(props: FlexBoxProps): JSX.Element;
