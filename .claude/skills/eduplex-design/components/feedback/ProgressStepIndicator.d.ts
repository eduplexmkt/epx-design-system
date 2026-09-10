export interface ProgressStepIndicatorStep {
  /** Identity of the step; matched against the indicator's `value`. */
  value: string;
}

/**
 * Segmented progress bar. Upstream composes `ProgressStepIndicatorItem`
 * children; this version takes the same items as a `steps` array.
 */
export interface ProgressStepIndicatorProps {
  steps?: ProgressStepIndicatorStep[];
  /** The value of the current step. Everything up to it renders filled. */
  value?: string;
  /** The size of the progress step indicator. medium 8px, small 4px. */
  size?: 'small' | 'medium';
  /** Whether to show the divider — a 1px gap between segments. */
  divider?: boolean;
}

export declare function ProgressStepIndicator(props: ProgressStepIndicatorProps): JSX.Element;
