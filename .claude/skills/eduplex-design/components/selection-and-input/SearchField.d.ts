import type { CSSProperties, ChangeEvent, Ref } from 'react';

/** Search input used in top navigation and filter bars. The magnifier and the reset button are built in. */
export interface SearchFieldProps {
  size?: 'small' | 'medium';
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  /** The width of the search field. */
  width?: CSSProperties['width'];
  /** Ref to the wrapper, not the input. */
  wrapperRef?: Ref<HTMLDivElement>;
  /** Fired when the built-in reset button is clicked, with the value it cleared. */
  onReset?: (prevValue: string) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export declare function SearchField(props: SearchFieldProps): JSX.Element;
