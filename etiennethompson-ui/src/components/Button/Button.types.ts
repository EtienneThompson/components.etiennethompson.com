import { MouseEventHandler } from "react";

export interface ButtonProps {
  className?: string;
  id?: string;
  text?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
