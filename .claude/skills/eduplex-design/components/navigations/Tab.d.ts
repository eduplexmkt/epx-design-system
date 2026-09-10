export interface TabItem {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

/**
 * Underline tab bar for switching between sibling views.
 *
 * @startingPoint section="Navigation" subtitle="Underline tabs, hug and fill" viewport="700x150"
 */
export interface TabProps {
  items?: TabItem[];
  value?: string;
  size?: 'small' | 'medium' | 'large';
  /** hug: intrinsic widths with 24px gaps. fill: equal widths, centered. */
  resize?: 'hug' | 'fill';
  onChange?: (value: string) => void;
}

export declare function Tab(props: TabProps): JSX.Element;
