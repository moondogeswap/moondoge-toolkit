import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";
import BunnyPlaceholderPng from "./BunnyPlaceholder.png"

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
  return (
    <img src={BunnyPlaceholderPng} alt="" width={props.width} />
  );
};

export default Icon;
