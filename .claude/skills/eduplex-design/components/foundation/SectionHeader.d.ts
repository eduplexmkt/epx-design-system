import type { CSSProperties, ReactNode } from 'react';

/**
 * Heading for a block of content. Size picks a type variant that steps down one
 * notch on mobile; the trailing slot carries the section's action.
 */
export interface SectionHeaderProps {
  /** The size of the section header. */
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  /** The platform of the section header. */
  platform?: 'desktop' | 'mobile';
  /** The content of the heading. Sits inline after the title. */
  headingContent?: ReactNode;
  /** The content of the trailing. Pushed to the end of the row. */
  trailingContent?: ReactNode;
  /**
   * The color of the section header. Defaults to `--semantic-label-strong`
   * (`--semantic-label-alternative` at `xsmall`). Upstream takes a
   * `ThemeColorsToken`; here pass the matching CSS variable.
   */
  color?: string;
  /** The tag of the heading. */
  headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children?: ReactNode;
  style?: CSSProperties;
}

export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
