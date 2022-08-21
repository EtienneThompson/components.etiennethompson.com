import React from "react";
import { ButtonProps } from "./Button.types";

const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      className={`btn btn--${props.className} CTA`}
      data-id={props.id}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      <h4>{props.text}</h4>
    </button>
  );
};

export default Button;
