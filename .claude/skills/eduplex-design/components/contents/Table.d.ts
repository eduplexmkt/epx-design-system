export interface TableColumn {
  /** Field read off each row, and the column's React key. */
  key: string;
  /** Head cell content. label2 bold on `label.neutral`. */
  label?: React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  /** Overrides `row[key]` for the body cell. */
  render?: (row: Record<string, unknown>) => React.ReactNode;
}

/**
 * Bordered data table. Upstream composes `TableHead` / `TableBody` /
 * `TableRow` / `TableCell`; this version takes `columns` and `rows`.
 */
export interface TableProps {
  columns?: TableColumn[];
  rows?: Array<Record<string, unknown>>;
  /** Whether to enable the interaction — pointer cursor plus the hover/press overlay. */
  interaction?: boolean;
  onRowClick?: (row: Record<string, unknown>) => void;
  /** The pagination of the table. Pass a `Pagination` component. */
  pagination?: React.ReactNode;
  /** Caps the scroll viewport so the head can stick. */
  maxHeight?: string | number;
}

export declare function Table(props: TableProps): JSX.Element;
