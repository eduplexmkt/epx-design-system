import type { CheckboxProps } from '../checkbox/types';
import type { DefaultComponentProps } from '@eduplexmkt/mkt-engine';

export type CheckMarkProps = Omit<
  DefaultComponentProps<CheckboxProps, 'button'>,
  'onChange' | 'value' | 'indeterminate' | 'indeterminateIcon'
>;
