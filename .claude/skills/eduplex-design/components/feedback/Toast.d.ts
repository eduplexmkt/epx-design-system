/** Transient message overlay, bottom-anchored in product surfaces. */
export interface ToastProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
  /** Optional single trailing action, e.g. a TextButton. */
  action?: React.ReactNode;
}

export declare function Toast(props: ToastProps): JSX.Element;
