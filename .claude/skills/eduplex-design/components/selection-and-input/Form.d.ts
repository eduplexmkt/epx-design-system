/**
 * Form is five cooperating parts, not one component. FormField generates the id
 * and lays the row out; the rest read that id from context.
 */
export interface FormFieldProps {
  children?: React.ReactNode;
}

export interface FormLabelProps {
  /** Appends a `status.negative` asterisk. */
  required?: boolean;
  display?: React.CSSProperties['display'];
  children?: React.ReactNode;
}

export interface FormControlProps {
  /** Exactly one element; it receives id, aria-labelledby and aria-describedby. */
  children: React.ReactElement;
}

export interface FormMessageProps {
  children?: React.ReactNode;
}

export interface FormErrorMessageProps {
  children?: React.ReactNode;
}

export declare function FormField(props: FormFieldProps): JSX.Element;
export declare function FormLabel(props: FormLabelProps): JSX.Element;
export declare function FormControl(props: FormControlProps): JSX.Element;
export declare function FormMessage(props: FormMessageProps): JSX.Element | null;
export declare function FormErrorMessage(props: FormErrorMessageProps): JSX.Element | null;
