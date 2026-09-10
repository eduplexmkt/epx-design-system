export interface SegmentedControlItem {
  value: string;
  label: React.ReactNode;
  leadingContent?: React.ReactNode;
  disabled?: boolean;
}

/**
 * Two to four mutually exclusive views. Fills its container.
 *
 * @startingPoint section="Selection & input" subtitle="Solid and outlined view switches, three sizes" viewport="700x150"
 */
export interface SegmentedControlProps {
  items?: SegmentedControlItem[];
  value?: string;
  size?: 'small' | 'medium' | 'large';
  variant?: 'solid' | 'outlined';
  onChange?: (value: string) => void;
}

export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;
