import { darkColors, lightColors } from "../../theme/colors";
import { shadows } from "../../theme/base";
import { CardTheme } from "./types";

export const light: CardTheme = {
  background: lightColors.backgroundAlt,
  boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: {
    default: lightColors.gradients.cardHeader,
    blue: lightColors.gradients.blue,
    violet: lightColors.gradients.violet,
    defaultY:lightColors.gradients.defaultY,
    darkY:lightColors.gradients.darkY,
    darkSuccess:lightColors.gradients.darkSuccess,
    darkPurple:lightColors.gradients.darkPurple,
    darkGreen:lightColors.gradients.darkGreen,
  },
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

export const dark: CardTheme = {
  background: darkColors.backgroundAlt,
  boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  boxShadowActive: shadows.active,
  boxShadowSuccess: shadows.success,
  boxShadowWarning: shadows.warning,
  cardHeaderBackground: {
    default: darkColors.gradients.cardHeader,
    blue: darkColors.gradients.blue,
    violet: darkColors.gradients.violet,
    defaultY:darkColors.gradients.defaultY,
    darkY:darkColors.gradients.darkY,
    darkSuccess:darkColors.gradients.darkSuccess,
    darkPurple:darkColors.gradients.darkPurple,
    darkGreen:darkColors.gradients.darkGreen,
  },
  dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
