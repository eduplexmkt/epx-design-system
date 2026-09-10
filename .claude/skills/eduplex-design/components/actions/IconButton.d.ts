/** Icon-only action with a circular interaction overlay. */
export interface IconButtonProps {
  /**
   * `normal` is a bare glyph, `background` a frosted pill, `outlined` a hairline box
   * and `solid` a filled primary box.
   */
  variant?: 'normal' | 'background' | 'outlined' | 'solid';
  /**
   * `outlined`/`solid` take a real box: `'medium'` 40px, `'small'` 32px, or any number.
   * `normal`/`background` are glyph-sized and only read a number (24 by default).
   */
  size?: number | 'medium' | 'small';
  /**
   * Icon color. Pass a `var(--semantic-…)` value; the shorthands `'normal'`,
   * `'assistive'` and `'primary'` are kept for existing call sites. Defaults per
   * variant: `static.white` for solid, `label.normal` otherwise.
   */
  color?: string;
  /** Color of the interaction overlay. Defaults to `var(--semantic-label-normal)`. */
  interactionColor?: string;
  /** With `variant="background"`, renders the dark pill instead of the frosted one. */
  alternative?: boolean;
  disabled?: boolean;
  /** Keeps the button live but drops the hover/press overlay. */
  disableInteraction?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  'aria-label'?: string;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
