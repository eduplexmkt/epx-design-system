/**
 * The primary Montage action. Solid primary is the page's single strongest action;
 * everything else is solid assistive or outlined.
 */
export interface ButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'solid' | 'outlined';
  color?: 'primary' | 'assistive';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  /** Renders only an icon; pass the icon as children. */
  iconOnly?: boolean;
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export declare function Button(props: ButtonProps): JSX.Element;
