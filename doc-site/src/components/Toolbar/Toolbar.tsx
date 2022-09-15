import { Button, ButtonVariants } from "etiennethompson-ui";
import { useNavigate } from "react-router";
import React from "react";
import "./Toolbar.css";

export const Toolbar = () => {
  const navigate = useNavigate();

  return (
    <div className="toolbar-container">
      <h3 style={{ cursor: "pointer" }} onClick={() => navigate("")}>
        Component Library
      </h3>
      <Button variant={ButtonVariants.Text} onClick={() => navigate("components/button")}>
        Button
      </Button>
    </div>
  );
};