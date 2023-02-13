import React from "react";
import { LoadingSpinnerProps } from "./LoadingSpinner.types";
import "../../styles/LoadingSpinner.css";

export const LoadingSpinner: React.FunctionComponent<LoadingSpinnerProps> = () => {
  return <div className="et-double-spinner"></div>;
};
