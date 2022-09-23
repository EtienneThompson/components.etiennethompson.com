import React from "react";
import "./Tag.css";

interface TagProps {
  indent?: number;
  layout?: "row" | "column";
  children?: React.ReactNode;
}

export const Tag: React.FunctionComponent<TagProps> = (props: TagProps) => {
  const getStyles = (): React.CSSProperties => {
    let styles: React.CSSProperties = {};
    if (props.indent) {
      styles.marginLeft = `${10 * props.indent}px`;
    }

    if (props.layout) {
      styles.display = "flex";
      styles.flexDirection = props.layout;
    }

    return styles;
  };

  return (
    <div style={getStyles()} className="tag-container">
      &lt;{props.children}&gt;
    </div>
  );
};
