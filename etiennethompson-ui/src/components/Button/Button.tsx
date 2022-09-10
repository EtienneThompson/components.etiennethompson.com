import React from "react";
import { ButtonCorners, ButtonProps, ButtonSize, ButtonVariants } from "./Button.types";
import "../../styles/Button.css";

export const Button: React.FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  const getClassName = () => {
    let className: string = "";

    switch (props.variant) {
      case ButtonVariants.Filled:
        className += "et-btn et-btn-filled";
        break;
      case ButtonVariants.FilledTonal:
        className += "et-btn et-btn-filled-tonal";
        break;
      case ButtonVariants.Outlined:
        className += "et-btn et-btn-outline";
        break;
      case ButtonVariants.Raised:
        className += "et-btn et-btn-filled et-btn-raised";
        break;
      case ButtonVariants.Text:
        className += "et-btn et-btn-text";
        break;
      default:
        className += "et-btn et-btn-filled";
        break;
    }

    switch (props.corners) {
      case ButtonCorners.Square:
        className += " et-btn-corner-square";
        break;
      case ButtonCorners.Small:
        className += " et-btn-corner-small";
        break;
      case ButtonCorners.Medium:
        className += " et-btn-corner-medium";
        break;
      case ButtonCorners.Circle:
        className += " et-btn-corner-circle";
        break;
      default:
        className += " et-btn-corner-small";
        break;
    }

    switch (props.size) {
      case ButtonSize.Xsmall:
        className += " et-btn-xsmall";
        break;
      case ButtonSize.Small:
        className += " et-btn-small";
        break;
      case ButtonSize.Medium:
        className += " et-btn-medium";
        break;
      case ButtonSize.Large:
        className += " et-btn-large";
        break;
      case ButtonSize.Xlarge:
        className += " et-btn-xlarge";
        break;
      default:
        className += " et-btn-medium";
        break;
    }

    if (props.block) {
      className += " et-btn-block";
    }

    if (props.className) {
      className = className + " " + props.className;
    }

    return className;
  };

  return (
    <button className={`${getClassName()}`} data-id={props.id} disabled={props.disabled} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
