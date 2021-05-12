import React from "react";
import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    bold: {
      name: "bold",
      table: {
        type: { summary: "bool", detail: "Bold the text" },
        defaultValue: { summary: false },
      },
      control: {
        type: null,
      },
    },
    fontSize: {
      name: "fontSize",
      table: {
        type: { summary: "string", detail: "Fontsize in px or em" },
        defaultValue: { summary: "16px" },
      },
      control: {
        type: null,
      },
    },
    color: {
      name: "color",
      table: {
        type: { summary: "string", detail: "Color from the theme, or CSS color" },
        defaultValue: { summary: "theme.colors.text" },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Default: React.FC = () => {
  return (
    <div>
      <Text>Default</Text>
      <Text bold>Bold text</Text>
      <Text small>Small text</Text>
      <Text fontSize="24px" color="publicColor">Custom fontsize</Text>
      <Text color="pink" fontSize="14px">Custom color</Text>
      <Text color="publicColor">Custom color from theme</Text>
      <Text color="orange" textTransform="uppercase">
        with text transform
      </Text>
      <Text textAlign="center">center</Text>
    </div>
  );
};
