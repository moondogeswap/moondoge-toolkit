import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // <Svg viewBox="0 0 24 24" {...props}>
    //   <path d="M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z"
    //   />
    // </Svg>
    <Svg {...props} viewBox="0 0 29.091 32">
      <path d="M62.718,26.224h2.339a1.107,1.107,0,0,0,1.1-1.112V15.57a1.107,1.107,0,0,0-1.1-1.112H62.718a1.106,1.106,0,0,0-1.1,1.112v9.543a1.106,1.106,0,0,0,1.1,1.112Zm-7.228,0h2.339a1.106,1.106,0,0,0,1.1-1.112V5.668a1.106,1.106,0,0,0-1.1-1.112H55.49a1.106,1.106,0,0,0-1.1,1.112V25.112a1.106,1.106,0,0,0,1.1,1.112Zm15.236,4.449-2.231-1.328v.5H43.768V2.26h.489L42.947,0,41.635,2.26h.5V30.67a.821.821,0,0,0,.815.825H68.495V32l2.231-1.327ZM48.261,26.224H50.6a1.106,1.106,0,0,0,1.1-1.112v-12.7A1.107,1.107,0,0,0,50.6,11.3H48.261a1.107,1.107,0,0,0-1.1,1.112v12.7a1.105,1.105,0,0,0,1.1,1.112Z" transform="translate(-41.635)" />
    </Svg>
  );
};

export default Icon;
