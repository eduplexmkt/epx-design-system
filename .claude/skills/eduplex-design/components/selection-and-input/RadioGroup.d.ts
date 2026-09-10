export interface RadioOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

/** Single-select list of radios. */
export interface RadioGroupProps {
  options?: RadioOption[];
  value?: string;
  size?: 'small' | 'medium';
  disabled?: boolean;
  direction?: 'row' | 'column';
  onChange?: (value: string) => void;
}

export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
