/**
 * Filter / tag control with a selected state. Solid inverts to the dark inverse
 * surface when active; outlined tints primary.
 */
export interface ChipProps {
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  variant?: 'solid' | 'outlined';
  active?: boolean;
  disabled?: boolean;
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export declare function Chip(props: ChipProps): JSX.Element;
