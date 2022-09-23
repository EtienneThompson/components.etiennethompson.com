import React from "react";
import "./Code.css";

interface CodeProps {
  children?: React.ReactNode[];
}

export const Code: React.FunctionComponent<CodeProps> = (props: CodeProps) => {
  return <div className="code-container">{props.children}</div>;
};
