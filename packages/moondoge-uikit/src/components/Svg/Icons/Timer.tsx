import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // <Svg viewBox="0 0 24 24" {...props}>
    //   <path d="M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" />
    // </Svg>
    <Svg viewBox="0 0 32 30.947" {...props}>
      <g transform="translate(-64.312 -79.051)">
        <path d="M349.174,363.877V359.5h2.916v4.377h4.374v2.916h-7.29Z" transform="translate(-270.319 -270.273)" />
        <path d="M108.869,108.7a14.956,14.956,0,1,0,14.969,14.956A14.963,14.963,0,0,0,108.869,108.7Zm0,26.922a11.966,11.966,0,1,1,11.976-11.966A11.973,11.973,0,0,1,108.869,135.622Z" transform="translate(-28.556 -28.615)" />
        <path d="M88.97,81.118l2.113-2.062,5.229,5.1L94.2,86.221ZM64.312,84.156l5.232-5.105,2.113,2.062-5.232,5.105Z" />
      </g>
    </Svg>

  );
};

export default Icon;
