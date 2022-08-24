import React from "react";
import { ButtonProps } from "./Button.types";
import "../../styles/Button.css";

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={`et-btn ${props.className}`}
      data-id={props.id}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
