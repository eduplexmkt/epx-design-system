/** Search input used in top navigation and filter bars. */
export interface SearchFieldProps {
  size?: 'small' | 'medium';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  width?: string | number;
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export declare function SearchField(props: SearchFieldProps): JSX.Element;
