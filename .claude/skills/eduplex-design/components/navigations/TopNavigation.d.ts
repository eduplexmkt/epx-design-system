/** Top app bar with four layouts. */
export interface TopNavigationProps {
  variant?: 'normal' | 'display' | 'search' | 'floating';
  /** Title text — or, for variant="search", the SearchField itself. */
  title?: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  /** Frosted 88% elevated surface. Off for transparent headers over imagery. */
  background?: boolean;
}

export declare function TopNavigation(props: TopNavigationProps): JSX.Element;
