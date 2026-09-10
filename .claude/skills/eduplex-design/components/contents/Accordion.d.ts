/**
 * Disclosure row built on the list cell. Upstream splits this into
 * `AccordionSummary` / `AccordionDetails` / `AccordionDescription` /
 * `AccordionContent`; this version takes those as `summary`, `description`
 * and `children`.
 */
export interface AccordionProps {
  /** The always-visible row label. body2 bold. */
  summary?: React.ReactNode;
  /** Panel copy. label1 regular on `label.neutral`. */
  description?: React.ReactNode;
  /** Panel content, placed below the description. */
  children?: React.ReactNode;
  /** Whether the accordion is expanded. */
  expanded?: boolean;
  /** Whether the accordion is expanded by default. */
  defaultExpanded?: boolean;
  /** Whether to disable the accordion. */
  disabled?: boolean;
  /** Whether to show the divider. */
  divider?: boolean;
  /** Whether to disable the expand animation. */
  disableAnimation?: boolean;
  /** List-cell vertical padding: none 0, small 8, medium 12, large 16. */
  verticalPadding?: 'none' | 'small' | 'medium' | 'large';
  /** Content displayed in the leading area of the summary. */
  leadingContent?: React.ReactNode;
  /** Content displayed in the trailing area; replaces the rotating chevron. */
  trailingContent?: React.ReactNode;
  /** Callback function when the expanded state changes. */
  onChange?: (expanded: boolean) => void;
}

export declare function Accordion(props: AccordionProps): JSX.Element;
