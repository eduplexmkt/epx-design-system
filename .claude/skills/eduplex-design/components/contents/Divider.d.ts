/** Horizontal or vertical hairline. */
export interface DividerProps {
  vertical?: boolean;
  thickness?: number | string;
  size?: number | string;
  /** Any line token; defaults to line.normal.alternative. */
  color?: string;
}

export declare function Divider(props: DividerProps): JSX.Element;
