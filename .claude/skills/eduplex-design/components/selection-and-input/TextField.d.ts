/**
 * Single-line text input.
 */
export interface TextFieldProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  invalid?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  width?: string | number;
  height?: string | number;
  /** Sits before the input. The slot only caps height at 24px — size and tint it yourself. */
  leadingContent?: React.ReactNode;
  /** Sits after the input. The slot only caps height at 24px — size and tint it yourself. */
  trailingContent?: React.ReactNode;
  /** Renders an attached button on the right edge, sharing the field's radius. */
  trailingButton?: React.ReactNode;
  /** `normal` is bold primary text, `assistive` is medium `label.normal`. */
  trailingButtonVariant?: 'normal' | 'assistive';
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export declare function TextField(props: TextFieldProps): JSX.Element;
