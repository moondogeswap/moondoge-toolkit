import React, { useState } from "react";
import PancakeToggle from "./PancakeToggle";

export default {
  title: "Components/PancakeToggle",
  component: PancakeToggle,
};

export const Default: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggle = () => setIsChecked(!isChecked);

  return (
    <>
      <div style={{ marginBottom: "32px" }}>
        <PancakeToggle checked={isChecked} onChange={toggle} />
      </div>
      <div style={{ marginBottom: "32px" }}>
        <PancakeToggle checked={isChecked} onChange={toggle} bk="#A56A46" />
      </div>
      <div>
        <PancakeToggle checked={isChecked} onChange={toggle} scale="sm" bk="#FFB000" />
      </div>
    </>
  );
};
