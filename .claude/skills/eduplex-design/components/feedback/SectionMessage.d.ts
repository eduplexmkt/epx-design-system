/**
 * Persistent in-page notice tied to a section of content.
 */
export interface SectionMessageProps {
  variant?: 'info' | 'positive' | 'cautionary' | 'negative' | 'custom';
  icon?: React.ReactNode;
  title?: React.ReactNode;
  children?: React.ReactNode;
  trailingButton?: React.ReactNode;
  onClose?: () => void;
}

export declare function SectionMessage(props: SectionMessageProps): JSX.Element;
