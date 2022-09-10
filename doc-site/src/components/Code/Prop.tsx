import React from "react";
import "./Prop.css";

interface PropProps {
  children?: React.ReactNode;
  name: string;
  value: string;
}

export const Prop: React.FunctionComponent<PropProps> = (props: PropProps) => {
  return (
    <div className="prop-container">
      {props.name}=&#123;{props.value}&#125;
    </div>
  );
};
