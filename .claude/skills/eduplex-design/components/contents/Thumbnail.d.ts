/**
 * Ratio-locked image frame. The unit Card composes for its picture.
 */
export interface ThumbnailProps {
  /** The ratio of the thumbnail. */
  ratio?: '1:1' | '5:4' | '4:3' | '3:2' | '16:10' | '1.618:1' | '16:9' | '2:1' | '21:9';
  /**
   * Whether to enable portrait mode.
   * The aspect ratio is now specified as height:width instead of width:height.
   */
  portrait?: boolean;
  /** Whether to enable the border — a 1px `line.normal.neutral` hairline. */
  border?: boolean;
  /** Whether to enable the radius. true is 12px, false is 0. */
  radius?: boolean;
  /** The width of the thumbnail. */
  width?: React.CSSProperties['width'];
  src?: string;
  alt?: string;
  /** The overlay of the thumbnail, centred in the frame. */
  overlay?: React.ReactNode;
  children?: React.ReactNode;
}

export declare function Thumbnail(props: ThumbnailProps): JSX.Element;
