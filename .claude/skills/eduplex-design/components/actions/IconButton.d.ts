/** Icon-only action with a pill-shaped interaction overlay. */
export interface IconButtonProps {
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  color?: 'normal' | 'assistive' | 'primary';
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  'aria-label'?: string;
}

export declare function IconButton(props: IconButtonProps): JSX.Element;
