/**
 * Thumbnail + title + caption content card, the unit every Montage listing grid
 * is built from.
 */
export interface CardProps {
  /** Desktop uses a 3:2 thumbnail and body1 title; mobile 4:3 and body2. */
  platform?: 'desktop' | 'mobile';
  width?: string | number;
  src?: string;
  alt?: string;
  /** Override aspect ratio, e.g. "16 / 9". */
  ratio?: string;
  title?: React.ReactNode;
  caption?: React.ReactNode;
  /** Text placed over the thumbnail's top gradient. */
  overlay?: React.ReactNode;
  badges?: React.ReactNode;
  footer?: React.ReactNode;
  onClick?: () => void;
}

export declare function Card(props: CardProps): JSX.Element;
