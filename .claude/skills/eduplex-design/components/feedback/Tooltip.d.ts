/** Short hint anchored to a control. */
export interface TooltipProps {
  size?: 'small' | 'medium';
  children?: React.ReactNode;
  /** Trailing keyboard shortcut, rendered at 61% inverse label. */
  shortcut?: React.ReactNode;
  arrow?: 'top' | 'bottom' | false;
}

export declare function Tooltip(props: TooltipProps): JSX.Element;
