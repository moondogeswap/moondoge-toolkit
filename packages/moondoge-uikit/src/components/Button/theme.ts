import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 15px",
    fontSize: "18px"
  },
  [scales.SM]: {
    height: "36px",
    padding: "0 16px",
    fontSize: "16px",
  },
  [scales.XS]: {
    height: "24px",
    fontSize: "14px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.CONNECTION]: {
    backgroundColor: "#A56A45",
    color: "white",
    border: "2px solid #A56A45",
    borderRadius: "44px",
    boxShadow: "none",
  },
  [variants.PRIMARY]: {
    backgroundColor: "#A56A46",
    color: "white",
    boxShadow: "0px 2px 0px #7B2E06",
    borderRadius: "25px",
  },
  [variants.DEFAULTICON]: {
    background: "linear-gradient(180deg, #DFBC70 0%, #B88513 100%)",
    boxShadow: "0px 3px 6px rgba(178, 178, 178, 0.31)",
    borderRadius: "44px",
    position:'relative',
    color:'#fff',
    span:{
      position:'absolute',
      left:'20px',
      width: "20px",
      height: "20px",
      background: "#FFB000;",
      border: "4px solid #A56A46",
      borderRadius: "50%",
      opacity: "1",
    }
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "1px solid #A56A46",
    boxShadow: "none",
    color: "#A56A46",
    borderRadius:'25px',
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.MAX]: {
    border: "1px solid #A56A46",
    boxShadow: "none",
    color: "#A56A46",
    borderRadius:'22px',
    height:'33px',
    fontSize: '18px',
    backgroundColor: "butRadiusMax",
    ":hover": {
      background: "#A56A46",
      color:'#fff',
      opacity:1,
    },
  },
  [variants.TOP]: {
    boxShadow: "0px 3px 6px rgba(178, 101, 43, 0.16);",
    borderRadius:'5px',
    width:'44px',
    height:'44px',
    background:'transparent'
  },
  [variants.DOWN]: {
    boxShadow: "none",
    borderRadius:'50%',
    width:'30px',
    height:'30px',
    backgroundColor:'lineDownBk'
  },
  [variants.UnstakeDOGE]: {
    backgroundColor: "#EEEEEE ",
    boxShadow: "none",
    color: "#201F1E",
    width:'204px',
    height:'44px',
  },
  [variants.SQUARE]: {
    background: '#FFB000',
    color: "#fff",
    borderRadius:'5px',
    boxShadow: "none",
    ":disabled": {
      backgroundColor: "transparent",
    },
  },
  [variants.TERTIARY]: {
    background: "tertiary",
    boxShadow: "none",
    color: "primary",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "white",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.SQRT]: {
    backgroundColor: "butRadiusMax",
    color: "publicColor",
    padding:"14px 28px",
    borderRadius: "10px",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "#A56A46",
    boxShadow: "none",
  },
};
