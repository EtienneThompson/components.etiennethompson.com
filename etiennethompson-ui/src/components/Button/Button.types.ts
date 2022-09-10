import React, { MouseEventHandler } from "react";

export enum ButtonVariants {
  Filled = "Filled",
  FilledTonal = "FilledTonal",
  Outlined = "Outlined",
  Text = "Text",
  Raised = "Raised",
  Fab = "Fab",
}

export enum ButtonCorners {
  Square = "Square",
  Small = "Small",
  Medium = "Medium",
  Circle = "Circle",
}

export enum ButtonSize {
  Xsmall = "Xsmall",
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
  Xlarge = "Xlarge",
}

export interface ButtonProps {
  block?: boolean;
  className?: string;
  children?: React.ReactNode;
  corners?: ButtonCorners;
  disabled?: boolean;
  id?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
  variant?: ButtonVariants;
}
