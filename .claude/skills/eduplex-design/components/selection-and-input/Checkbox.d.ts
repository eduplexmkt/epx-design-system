/** Square 5px-radius checkbox with a 1.5px hairline and an animated check. */
export interface CheckboxProps {
  size?: 'small' | 'medium';
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  /** Renders the label bold (600) instead of regular. */
  bold?: boolean;
  label?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
