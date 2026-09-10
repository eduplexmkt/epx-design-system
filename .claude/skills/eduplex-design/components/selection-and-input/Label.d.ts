/**
 * Form caption rendered as a `<label>`. Typography is fixed at label1 / bold on
 * `semantic.label.neutral`; only `required` and `display` vary.
 */
export interface LabelProps {
  /** Appends a `status.negative` asterisk 4px after the text. */
  required?: boolean;
  /** Defaults to 'inline-block'. */
  display?: React.CSSProperties['display'];
  /** Id of the control this label captions. */
  htmlFor?: string;
  children?: React.ReactNode;
}

export declare function Label(props: LabelProps): JSX.Element;
