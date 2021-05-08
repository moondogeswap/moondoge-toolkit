import React from "react";
import { PancakeStack, PancakeInput, PancakeLabel } from "./StyledPancakeToggle";
import { PancakeToggleProps, scales } from "./types";

const PancakeToggle: React.FC<PancakeToggleProps> = ({ checked, scale = scales.MD, bk, ...props }) => (
  <PancakeStack scale={scale} bk={bk}>
    <PancakeInput id={props.id || "pancake-toggle"} scale={scale} type="checkbox" checked={checked} {...props} />
    <PancakeLabel scale={scale} checked={checked} htmlFor={props.id || "pancake-toggle"} bk={bk}>
      <div className="pancakes">
        {/* <div className="pancake" /> */}
        {/* <div className="pancake" />
        <div className="pancake" />
        <div className="butter" /> */}
      </div>
    </PancakeLabel>
  </PancakeStack>
);

PancakeToggle.defaultProps = {
  scale: scales.MD,
};

export default PancakeToggle;
