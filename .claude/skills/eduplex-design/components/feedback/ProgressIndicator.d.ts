/**
 * Determinate 2px progress bar. `fill.normal` track, `primary.normal` fill.
 */
export interface ProgressIndicatorProps {
  /** 0–100. Drives the fill's translateX(-100 + percent)%. */
  percent?: number;
}

export declare function ProgressIndicator(props: ProgressIndicatorProps): JSX.Element;
