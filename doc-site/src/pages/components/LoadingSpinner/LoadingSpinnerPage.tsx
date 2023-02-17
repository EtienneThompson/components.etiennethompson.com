import React from "react";
import { LoadingSpinner, SpinnerVariants } from "etiennethompson-ui";
import { Code, Tag, Prop } from "../../../components/Code";

export const LoadingSpinnerPage = () => {
  return (
    <>
      <h1>Loading Spinners</h1>

      <p>
        Loading Spinners allow for showing the user there is something loading in the background before content can be
        loaded.
      </p>

      <h3>Single Spinner</h3>
      <p>
        The single spinner is a basic type of loading spinner with a single bar rotating. This variant has the bar slow
        down a bit each time it goes around the circle.
      </p>
      <Code>
        <Tag>LoadingSpinner&nbsp;/</Tag>
      </Code>
      <LoadingSpinner />

      <h3>Double Spinner</h3>
      <p>The double spinner has two bars on opposite ends of the circle rotating around.</p>
      <Code>
        <Tag>
          LoadingSpinner&nbsp;
          <Prop name="variant" value="SpinnerVariants.Double" />
          &nbsp;/
        </Tag>
      </Code>
      <LoadingSpinner variant={SpinnerVariants.Double} />
    </>
  );
};
