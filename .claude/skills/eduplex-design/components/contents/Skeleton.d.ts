/** Loading placeholder in three shapes. */
export interface SkeletonProps {
  variant?: 'text' | 'rectangle' | 'circle';
  width?: string | number;
  height?: string | number;
  /** Rectangle only. */
  radius?: string | number;
  animation?: boolean;
}

export declare function Skeleton(props: SkeletonProps): JSX.Element;
