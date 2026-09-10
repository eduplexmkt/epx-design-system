/** Immediate on/off toggle — no confirm step. */
export interface SwitchProps {
  size?: 'small' | 'medium';
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export declare function Switch(props: SwitchProps): JSX.Element;
