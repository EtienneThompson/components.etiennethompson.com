import React from "react";
import { LoadingSpinnerProps, SpinnerVariants } from "./LoadingSpinner.types";
import "../../styles/LoadingSpinner.css";

export const LoadingSpinner: React.FunctionComponent<LoadingSpinnerProps> = (props: LoadingSpinnerProps) => {
  const getClassName = () => {
    let className: string = "";

    switch (props.variant) {
      case SpinnerVariants.Single:
        className += "et-loading-spinner";
        break;
      case SpinnerVariants.Double:
        className += "et-double-spinner";
        break;
      default:
        className += "et-loading-spinner";
        break;
    }

    return className;
  };

  return <div className={getClassName()}></div>;
};
