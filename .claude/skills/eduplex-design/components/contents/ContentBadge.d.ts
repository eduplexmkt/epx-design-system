/**
 * Small read-only label attached to content — "전체", "신청임박", "D-3".
 */
export interface ContentBadgeProps {
  size?: 'xsmall' | 'small' | 'medium';
  variant?: 'solid' | 'outlined';
  color?: 'accent' | 'neutral';
  accentColor?: 'red' | 'redOrange' | 'orange' | 'lime' | 'green' | 'cyan' | 'lightBlue' | 'blue' | 'violet' | 'purple' | 'pink' | 'yellow';
  leadingContent?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function ContentBadge(props: ContentBadgeProps): JSX.Element;
