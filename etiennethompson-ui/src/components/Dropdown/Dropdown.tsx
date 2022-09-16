import React from "react";
import { DropdownProps } from "./Dropdown.types";
import "../../styles/Dropdown.css";

export const Dropdown: React.FunctionComponent<DropdownProps> = (props: DropdownProps) => {
  const getClassName = () => {
    let className: string = "et-dropdown";

    if (props.className) {
      className += props.className;
    }

    return className;
  };

  return (
    <div className={getClassName()}>
      <select>{props.children}</select>
    </div>
  );
};
