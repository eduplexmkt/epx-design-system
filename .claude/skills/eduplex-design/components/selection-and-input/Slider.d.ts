/**
 * Range control. Values are always an array — one entry per thumb — so a single
 * point and a range share the same API.
 */
export interface SliderTitleProps {
  values: Array<number>;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export interface SliderLabelProps {
  value: number;
  index: number;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export interface SliderProps {
  /** Centred headline above the track. A node, or a function of the values. */
  title?: React.ReactNode | ((props: SliderTitleProps) => React.ReactNode);
  /** Caption under each thumb. A node, or a function of one thumb's value. */
  label?: React.ReactNode | ((props: SliderLabelProps) => React.ReactNode);
  disabled?: boolean;
  value?: Array<number>;
  defaultValue?: Array<number>;
  /** Increment for keyboard steps and pointer snapping. Defaults to 1. */
  step?: number;
  min?: number;
  max?: number;
  onValueChange?: (value: Array<number>) => void;
  onValueChangeComplete?: (value: Array<number>) => void;
  /** Form field name. With more than one thumb it is submitted as `name[]`. */
  name?: string;
}

export declare function Slider(props: SliderProps): JSX.Element;
