import type { WithSxProps } from '@eduplexmkt/mkt-engine';

export type VirtualCheckboxInputProps = WithSxProps<{
  checked?: boolean;
  bubbles?: boolean;
}>;

export type VirtualValueInputProps = WithSxProps<{
  value?: string | number;
  bubbles?: boolean;
}>;
