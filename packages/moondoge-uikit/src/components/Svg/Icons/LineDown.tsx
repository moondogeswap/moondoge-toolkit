import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024"><path d="M94.590423 636.866186l365.698439 365.698438a73.112381 73.112381 0 0 0 103.422276 0l365.698439-365.698438a73.146514 73.146514 0 0 0-103.422277-103.422277l-240.874919 240.874919V73.163581a73.146514 73.146514 0 1 0-146.293028 0v701.155247l-240.874919-240.874919a73.146514 73.146514 0 0 0-103.422276 103.422277z" p-id="7104"></path></Svg>
  );
};

export default Icon;
