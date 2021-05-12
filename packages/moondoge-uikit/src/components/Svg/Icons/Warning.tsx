import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 27.429 32" {...props}>
      <path d="M141.714,70.857A11.335,11.335,0,0,1,153.143,82.1V90.3A1.138,1.138,0,0,1,152,91.429H131.433a1.138,1.138,0,0,1-1.147-1.127V82.1A11.333,11.333,0,0,1,141.714,70.857ZM139.685,64h1.774a.3.3,0,0,1,.256.327v3.918a.379.379,0,0,1-.073.231.229.229,0,0,1-.183.1h-1.776a.3.3,0,0,1-.254-.327V64.327a.373.373,0,0,1,.075-.231.229.229,0,0,1,.176-.1Zm-10.133,4.658a.3.3,0,0,1,.421,0l2.514,2.514a.3.3,0,0,1,0,.416l-1.467,1.467a.3.3,0,0,1-.418,0l-2.514-2.514a.3.3,0,0,1,0-.418l1.467-1.465Zm24.325,0,1.465,1.465a.3.3,0,0,1,0,.418l-2.512,2.514a.3.3,0,0,1-.418,0l-1.467-1.467a.3.3,0,0,1,0-.418l2.512-2.514a.3.3,0,0,1,.418,0v0ZM129.248,93.714h24.933a1.313,1.313,0,0,1,.882.334,1.1,1.1,0,0,1,.366.809v.859a.3.3,0,0,1-.313.283h-26.8a.327.327,0,0,1-.222-.082.274.274,0,0,1-.091-.2v-.857A1.2,1.2,0,0,1,129.248,93.714Zm5.609-11.429v9.143h2.286V82.286Z" transform="translate(-128 -64)" />
    </Svg>


  );
};

export default Icon;
