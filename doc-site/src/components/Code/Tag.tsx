import React from "react";
import "./Tag.css";

interface TagProps {
  children?: React.ReactNode;
}

export const Tag: React.FunctionComponent<TagProps> = (props: TagProps) => {
  return <div className="tag-container">&lt;{props.children}&gt;</div>;
};
