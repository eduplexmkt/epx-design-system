/**
 * Multi-step progress trail. The active step is named by value; everything
 * before it is derived as completed.
 */
export interface StepperProps {
  /** Value of the step currently in progress. */
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children?: React.ReactNode;
}

export interface StepperItemProps {
  value: string;
  /** Shown while the step is pending or active. */
  label?: React.ReactNode;
  /** Shown instead of `label` once the step is behind the active one. */
  completedLabel?: React.ReactNode;
}

export declare function Stepper(props: StepperProps): JSX.Element;
export declare function StepperItem(props: StepperItemProps): JSX.Element;
