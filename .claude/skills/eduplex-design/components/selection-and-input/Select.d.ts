export interface SelectOption {
  value: string;
  label: React.ReactNode;
}

/** Dropdown select built on the TextField shell. */
export interface SelectProps {
  options?: SelectOption[];
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  invalid?: boolean;
  width?: string | number;
  onChange?: (value: string) => void;
}

export declare function Select(props: SelectProps): JSX.Element;
