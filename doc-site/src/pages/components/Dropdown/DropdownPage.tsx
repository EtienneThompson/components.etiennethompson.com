import React from "react";
import { Dropdown } from "etiennethompson-ui";
import { Code, Tag, Prop } from "../../../components/Code";
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

      <h2>Outlined</h2>
      <p>You can style the dropdown to have an outline if you want.</p>
      <div>
        Use this variant like{" "}
        <Code>
          <Tag indent={0}>
            Dropdown&nbsp;
            <Prop name="outline" value="true" />
          </Tag>
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Tag indent={1}>option</Tag>Option 1<Tag>/option</Tag>
          </div>
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Tag indent={1}>option</Tag>Option 2<Tag>/option</Tag>
          </div>
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Tag indent={1}>option</Tag>Option 3<Tag>/option</Tag>
          </div>
          <Tag indent={0}>/Dropdown</Tag>
        </Code>
      </div>
      <br />
      <Dropdown outline={true}>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Dropdown>

      <h2>Filled</h2>
      <p>You can also style the dropdown to be filled in with a background color.</p>
      <div>
        Use this variant like{" "}
        <Code>
          <Tag indent={0}>
            Dropdown&nbsp;
            <Prop name="filled" value="true" />
          </Tag>
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Tag indent={1}>option</Tag>Option 1<Tag>/option</Tag>
          </div>
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Tag indent={1}>option</Tag>Option 2<Tag>/option</Tag>
          </div>
          <br />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Tag indent={1}>option</Tag>Option 3<Tag>/option</Tag>
          </div>
          <Tag indent={0}>/Dropdown</Tag>
        </Code>
      </div>
      <br />
      <Dropdown filled={true}>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </Dropdown>
    </div>
  );
};
