import { variants, scales } from "./types";

export const styleVariants = {
  [variants.DEFAULT]: {
    borderRadius: "5px",
  },
  [variants.ROUND]: {
    borderRadius: "5px",
  },
  [variants.FLAT]: {
    borderRadius: 0,
  },
};

export const styleScales = {
  [scales.MD]: {
    height: "20px",
  },
  [scales.SM]: {
    height: "10px",
  },
};

export default styleVariants;
