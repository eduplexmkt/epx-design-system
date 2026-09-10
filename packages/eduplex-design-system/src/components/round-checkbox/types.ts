import type { DefaultComponentProps } from '@eduplexmkt/mkt-engine';
import type { CheckboxProps } from '../checkbox/types';

export type RoundCheckboxProps = Omit<
  DefaultComponentProps<CheckboxProps, 'button'>,
  'onChange' | 'value'
>;
