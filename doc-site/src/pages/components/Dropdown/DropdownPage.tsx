import React from "react";
import { Dropdown } from "etiennethompson-ui";
import "./DropdownPage.scss";

export const DropdownPage = () => {
  return (
    <div className="dropdown-page">
      <h1>Dropdowns</h1>
      <p>Allows users to select an option from a list which drops down below the selected option.</p>

      <Dropdown>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Dropdown>
    </div>
  );
};
