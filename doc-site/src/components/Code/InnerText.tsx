import React from "react";

interface InnerTextProps {
  indent?: number;
  children?: React.ReactNode;
}

export const InnerText: React.FunctionComponent<InnerTextProps> = (props: InnerTextProps) => {
  const calculateIndent = (): number => {
    if (props.indent) {
      return 10 * props.indent;
    }

    return 0;
  };

  return <div style={{ marginLeft: `${calculateIndent()}px` }}>{props.children}</div>;
};
