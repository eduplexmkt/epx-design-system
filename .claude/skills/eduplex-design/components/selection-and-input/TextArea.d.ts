/**
 * Multi-line input. Shares TextField's 12px frosted shell and ring states, but
 * lays out as a column with an optional bottom row for counters and actions.
 */
export interface TextAreaProps {
  invalid?: boolean;
  disabled?: boolean;
  maxLength?: number;
  /** Wrap in `TextAreaContent`. Sits at the bottom-left of the shell. */
  leadingContent?: React.ReactNode;
  /** Wrap in `TextAreaContent`. Sits at the bottom-right; replaces the invalid icon. */
  trailingContent?: React.ReactNode;
  width?: React.CSSProperties['width'];
  /** Rows the field grows to at most. Unbounded when omitted. */
  maxRows?: number;
  /** Rows the field is never shorter than. Defaults to 2. */
  minRows?: number;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface TextAreaContentProps {
  variant?: 'custom' | 'button' | 'characterCounter' | 'badge' | 'chip' | 'icon' | 'icon-button';
  /** For `characterCounter`, the max length — the current length is read from the field. */
  children?: React.ReactNode;
}

export declare function TextArea(props: TextAreaProps): JSX.Element;
export declare function TextAreaContent(props: TextAreaContentProps): JSX.Element;
