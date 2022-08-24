import React from "react";
import { Button } from "etiennethompson-ui";
import "./ButtonPage.scss";

export const ButtonPage = () => {
  return (
    <div className="button-page">
      <h1>Button</h1>
      <p>Allows users to perform some action.</p>
      <Button>button</Button>
    </div>
  );
};
