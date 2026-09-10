export interface BottomNavigationItem {
  value: string;
  icon?: React.ReactNode;
  label?: string;
}

/** Fixed mobile tab bar, 56px tall. */
export interface BottomNavigationProps {
  items?: BottomNavigationItem[];
  value?: string;
  onChange?: (value: string) => void;
}

export declare function BottomNavigation(props: BottomNavigationProps): JSX.Element;
