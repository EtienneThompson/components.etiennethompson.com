import React, { MouseEventHandler } from "react";

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
