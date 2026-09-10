/**
 * Dialog layer rendered at z-index 1300 over the `material.dimmer` scrim.
 *
 * Merges the source's `Modal` + `ModalContainer` + `ModalNavigation` props into
 * one component; portal, scroll lock and focus scope are not reproduced here.
 */
export interface ModalProps {
  /** Whether the modal is open. */
  open?: boolean;
  /** Callback function when the open state changes. */
  onOpenChange?: (open: boolean) => void;
  variant?: 'popup' | 'bottom' | 'full';
  /** The size of the modal. */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  /** The resize mode of the modal. hug follows content, fixed pins the height. */
  resize?: 'hug' | 'fixed';
  /** When `variant="bottom"`, shows the grabber pill at the top of the sheet. */
  handle?: boolean;
  /** Navigation title, rendered heading2 bold and clamped to one line. */
  title?: React.ReactNode;
  /** The leading content of the modal navigation. */
  leadingContent?: React.ReactNode;
  /** The trailing content of the modal navigation. Defaults to a close button; pass `null` to drop it. */
  trailingContent?: React.ReactNode;
  /** Sticky action area pinned to the bottom of the container. */
  actions?: React.ReactNode;
  /** Whether to disable the outside click close. */
  disableOutsideClickClose?: boolean;
  /** Whether to disable the escape key close. */
  disableEscapeKeyDownClose?: boolean;
  children?: React.ReactNode;
}

export interface ModalTextProps {
  children?: React.ReactNode;
}

export declare function Modal(props: ModalProps): JSX.Element;
/** 12px column for lines that belong together. */
export declare function ModalContentItem(props: ModalTextProps): JSX.Element;
/** heading2 / bold / label.normal */
export declare function ModalHeading(props: ModalTextProps): JSX.Element;
/** body2 / regular / label.alternative */
export declare function ModalSummary(props: ModalTextProps): JSX.Element;
/** body1-reading / regular / label.normal */
export declare function ModalDescription(props: ModalTextProps): JSX.Element;
