export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  bubblegum: string;
  cardHeader: string;
  blue: string;
  violet: string;
  defaultY:string;
  darkY:string;
  darkSuccess:string;
  darkPurple:string;
  darkGreen:string

};

export type Colors = {
  publicColor:string
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  contrast: string;
  dropdown: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  textInput: string;
  textInputBorder: string;
  background: string;
  backgroundDisabled: string;
  backgroundAlt: string;
  text: string;
  textDesc: string;
  textDisabled: string;
  textSubtle: string;
  borderColor: string;
  linkHover: string;
  info: string;
  // Gradients
  gradients: Gradients;
  butMenuBk:string;
  // Brand colors
  binance: string;
  butMenuBkOther:string;
  white:string;
  orange:string;
  gray:string;
  purple:string;
  checkboxInput:string;
  checkboxChecked:string;
  inputPlaceholder:string;
  inputDisabled:string;
  pink:string;
  linkDefault:string;
  radioDefault:string;
  radioCheck:string;
  progressBk:string;
  skeletonDefault:string
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
