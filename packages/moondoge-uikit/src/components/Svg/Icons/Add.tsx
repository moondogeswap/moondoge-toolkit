import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    // <Svg viewBox="0 0 24 24" {...props}>
    //   <path d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" />
    // </Svg>
    <Svg {...props} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6859" width="24" height="24"><path d="M950.857143 438.857143H585.142857V73.142857a73.142857 73.142857 0 0 0-146.285714 0v365.714286H73.142857a73.142857 73.142857 0 0 0 0 146.285714h365.714286v365.714286a73.142857 73.142857 0 0 0 146.285714 0V585.142857h365.714286a73.142857 73.142857 0 0 0 0-146.285714z" fill="#9b5f3d" p-id="6860"></path></Svg>
  );
};

export default Icon;
