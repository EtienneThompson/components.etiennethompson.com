import React from "react";
import { Button, ButtonCorners, ButtonSize, ButtonVariants } from "etiennethompson-ui";
import "./ButtonPage.scss";
import { Code, Prop, Tag } from "../../../components/Code";

export const ButtonPage = () => {
  return (
    <div className="button-page">
      <h1>Buttons</h1>

      <p>Allows users to perform some action.</p>
      <h2>Color Variants</h2>
      <p>
        You can customize the appearance of buttons to best accomodate the goal you are trying to accomplish. There are
        6 different varients defined by the ButtonVariants enum and the examples provided below.
      </p>

      <h3>Filled Button</h3>
      <p>
        Filled buttons are the most common types of button used for calls-to-action. They attract the eye, which is why
        it's best used for the main action of a page.
      </p>
      <b>This is the default style applied to buttons if the variant property is not set.</b>
      <p>
        Use this variant like{" "}
        <Code>
          <Tag>
            Button&nbsp;
            <Prop name="variant" value="ButtonProps.Filled" />
          </Tag>
          Text<Tag>/Button</Tag>
        </Code>
      </p>
      <Button variant={ButtonVariants.Filled}>Click me</Button>

      <h3>Filled Tonal Button</h3>
      <p>
        Filled tonal variants designate a lower priority in the view hierarchy because of their lighter background
        color.
      </p>
      <p>
        Use this variant like{" "}
        <Code>
          <Tag>
            Button&nbsp;
            <Prop name="variant" value="ButtonProps.FilledTonal" />
          </Tag>
          Test<Tag>/Button</Tag>
        </Code>
      </p>
      <Button variant={ButtonVariants.FilledTonal}>Click me</Button>

      <h3>Outlined Button</h3>
      <p>Outlined buttons are for options which aren't used very often.</p>
      <p>
        Use this variant like{" "}
        <Code>
          <Tag>
            Button&nbsp;
            <Prop name="variant" value="ButtonProps.Outlined" />
          </Tag>
          Test<Tag>/Button</Tag>
        </Code>
      </p>
      <Button variant={ButtonVariants.Outlined}>Click me</Button>

      <h3>Text Button</h3>
      <p>
        Text buttons are for very minor actions. They only show the label by default, and therefore need a label which
        represents their action.
      </p>
      <p>
        Use this variant like{" "}
        <Code>
          <Tag>
            Button&nbsp;
            <Prop name="variant" value="ButtonProps.Text" />
          </Tag>
          Test<Tag>/Button</Tag>
        </Code>
      </p>
      <Button variant={ButtonVariants.Text}>Click me</Button>
      <h3>Raised Button</h3>
      <p>A raised button is a filled button but with shadow, to increase a user's attention to the button.</p>
      <Button variant={ButtonVariants.Raised}>Click me</Button>

      <h2>Button Corners</h2>
      <p>
        You can customize the corners on buttons as well. There are 4 options, found in the ButtonCorners enum and in
        the examples below.
      </p>
      <h3>Square</h3>
      <p>
        Use these corners like
        <Code>
          <Tag>
            Button&nbsp;<Prop name="corners" value="ButtonCorners.Square"></Prop>
          </Tag>
          Button<Tag>/Button</Tag>
        </Code>
      </p>
      <Button corners={ButtonCorners.Square}>Button</Button>

      <h3>Small</h3>
      <b>This is the default style applied to buttons if the corners property is not set.</b>
      <p>
        Use these corners like
        <Code>
          <Tag>
            Button&nbsp;<Prop name="corners" value="ButtonCorners.Small"></Prop>
          </Tag>
          Button<Tag>/Button</Tag>
        </Code>
      </p>
      <Button corners={ButtonCorners.Small}>Button</Button>

      <h3>Medium</h3>
      <p>
        Use these corners like
        <Code>
          <Tag>
            Button&nbsp;<Prop name="corners" value="ButtonCorners.Medium"></Prop>
          </Tag>
          Button<Tag>/Button</Tag>
        </Code>
      </p>
      <Button corners={ButtonCorners.Medium}>Button</Button>

      <h3>Circle</h3>
      <p>
        Use these corners like
        <Code>
          <Tag>
            Button&nbsp;<Prop name="corners" value="ButtonCorners.Circle"></Prop>
          </Tag>
          Button<Tag>/Button</Tag>
        </Code>
      </p>
      <Button corners={ButtonCorners.Circle}>Button</Button>

      <h2>Button Sizes</h2>
      <p>
        You can customize the size of your buttons as well. There are five different sizes, defined in the ButtonSizes
        enum and in the examples below.
      </p>

      <h3>Extra Small</h3>
      <p>
        Use this size like
        <Code>
          <Tag>
            Button&nbsp;<Prop name="size" value="ButtonProps.Xsmall"></Prop>
          </Tag>
          Button<Tag>/Button</Tag>
        </Code>
      </p>
      <Button size={ButtonSize.Xsmall}>Button</Button>

      <h3>Small</h3>
      <p>
        Use this size like
        <Code>
          <Tag>
            Button&nbsp;<Prop name="size" value="ButtonProps.Small"></Prop>
          </Tag>
          Button<Tag>/Button</Tag>
        </Code>
      </p>
      <Button size={ButtonSize.Small}>Button</Button>

      <h3>Medium</h3>
      <p>
        Use this size like
        <Code>
          <Tag>
            Button&nbsp;<Prop name="size" value="ButtonProps.Medium"></Prop>
          </Tag>
          Button<Tag>/Button</Tag>
        </Code>
      </p>
      <Button size={ButtonSize.Medium}>Button</Button>

      <h3>Large</h3>
      <p>
        Use this size like
        <Code>
          <Tag>
            Button&nbsp;<Prop name="size" value="ButtonProps.Large"></Prop>
          </Tag>
          Button<Tag>/Button</Tag>
        </Code>
      </p>
      <Button size={ButtonSize.Large}>Button</Button>

      <h3>Extra Large</h3>
      <p>
        Use this size like
        <Code>
          <Tag>
            Button&nbsp;<Prop name="size" value="ButtonProps.Xlarge"></Prop>
          </Tag>
          Button<Tag>/Button</Tag>
        </Code>
      </p>
      <Button size={ButtonSize.Xlarge}>Button</Button>

      <h2>Block Buttons</h2>
      <p>
        You can specify a button to be a block button. This type of button will just take up as much horizontal space as
        it available to it.
      </p>
      <Button block={true}>Button</Button>

      <h2>Disabled</h2>
      <p>
        You can disable a button from being clickable by setting the disable property to true. By default this property
        is false.
      </p>
      <p>
        Use this property like
        <Code>
          <Tag>
            Button&nbsp;<Prop name="disabled" value="true"></Prop>
          </Tag>
          Button<Tag>/Button</Tag>
        </Code>
      </p>
      <Button disabled={true}>Click me</Button>
    </div>
  );
};
