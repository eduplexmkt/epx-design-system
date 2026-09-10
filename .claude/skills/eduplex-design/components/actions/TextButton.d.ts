/** Inline text action. Bold by definition; primary or assistive only. */
export interface TextButtonProps {
  size?: 'small' | 'medium';
  color?: 'primary' | 'assistive';
  disabled?: boolean;
  leadingContent?: React.ReactNode;
  trailingContent?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export declare function TextButton(props: TextButtonProps): JSX.Element;
