/** Identity image with a 5% inset hairline so light logos still read on white. */
export interface AvatarProps {
  size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | number;
  variant?: 'person' | 'company' | 'academy';
  src?: string;
  alt?: string;
  /** Initials shown when there is no image. */
  fallback?: React.ReactNode;
}

export declare function Avatar(props: AvatarProps): JSX.Element;
