import type { ChangeEvent, CSSProperties, ReactNode } from 'react';

/** Square 5px-radius checkbox with a 1.5px hairline and an animated check. */
export interface CheckboxProps {
  name?: string;
  size?: 'small' | 'medium';
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  required?: boolean;
  /** Sets aria-invalid. The system ships no visual error state for a checkbox. */
  invalid?: boolean;
  /** Renders the label bold (600) instead of regular. */
  bold?: boolean;
  /** Removes the side spacing so the box aligns flush with the content column. */
  tight?: boolean;
  /** Custom check glyph. */
  icon?: ReactNode;
  /** Custom indeterminate glyph. */
  indeterminateIcon?: ReactNode;
  label?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onCheckedChange?: (state: boolean) => void;
  style?: CSSProperties;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
