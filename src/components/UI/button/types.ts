import { ButtonHTMLAttributes, SyntheticEvent } from 'react';

export type MyButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: (e: SyntheticEvent) => void;
  children: string;
};
