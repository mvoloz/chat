import { SyntheticEvent } from 'react';

export enum ButtonType {
  default = 'default',
  primary = 'primary'
}

export type ButtonProps = {
  id: string;
  handleClick: (evt: SyntheticEvent) => void;
  modifier?: string;
  title: string;
  type?: ButtonType;
};
