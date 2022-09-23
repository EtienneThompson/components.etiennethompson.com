import { Button, ButtonVariants, Dropdown } from "etiennethompson-ui";
import { useNavigate } from "react-router";
import React from "react";
import "./Toolbar.css";

export const Toolbar = () => {
  const navigate = useNavigate();

  return (
    <div className="toolbar-container">
      <h3 style={{ cursor: "pointer", margin: "0 10px" }} onClick={() => navigate("")}>
        Component Library
      </h3>
      <Button variant={ButtonVariants.Text}>
        <Dropdown>
          <option onClick={() => navigate("components/button")}>Button</option>
          <option onClick={() => navigate("components/dropdown")}>Dropdown</option>
        </Dropdown>
      </Button>
    </div>
  );
};
