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
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
  /** Renders an attached button on the right edge, sharing the field's radius. */
  trailingButton?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export declare function TextField(props: TextFieldProps): JSX.Element;
