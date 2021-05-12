import React from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <>
      <div>
        <Checkbox />
        <Checkbox scale="sm" />
        <Checkbox scale="xs" />
      </div>
    </>
  );
};
