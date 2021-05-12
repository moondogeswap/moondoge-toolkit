import { InputHTMLAttributes } from "react";

export type PancakeToggleTheme = {
  handleBackground: string;
  handleShadow: string;
};

export const scales = {
  SM: "sm",
  MD: "md",
} as const;

export type Scales = typeof scales[keyof typeof scales];

export interface PancakeToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  scale?: Scales;
  checked?: boolean;
  bk?: string
}

export interface HandleProps {
  scale: Scales;
  bk?: string;
}

export interface InputProps {
  scale: Scales;
}

export const scaleKeys = {
  pancakeSize: "pancakeSize",
  travelDistance: "travelDistance",
  toggleHeight: "toggleHeight",
  toggleWidth: "toggleWidth",
  pancakeThickness: "pancakeThickness",
  pancakeTwoOffset: "pancakeTwoOffset",
  pancakeThreeOffset: "pancakeThreeOffset",
  butterTop: "butterTop",
  butterLeft: "butterLeft",
  butterWidth: "butterWidth",
  butterHeight: "butterHeight",
  butterThickness: "butterThickness",
  butterRadius: "butterRadius",
  butterSmearOneTop: "butterSmearOneTop",
  butterSmearOneLeft: "butterSmearOneLeft",
  butterSmearTwoTop: "butterSmearTwoTop",
  butterSmearTwoRight: "butterSmearTwoRight",
  circleSize:"circleSize",
  circleMargin:"circleMargin"
} as const;

export type ScaleKeys = typeof scaleKeys[keyof typeof scaleKeys];
