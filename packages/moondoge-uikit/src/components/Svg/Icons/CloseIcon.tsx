import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024" width="24" height="24"><path d="M512.57344 1023.96736A511.99968 511.99968 0 0 1 313.277565 40.191975a512.15968 512.15968 0 0 1 398.59175 943.55141A508.799682 508.799682 0 0 1 512.57344 1023.96736z m0.863999-459.359713l129.53592 129.759919a36.607977 36.607977 0 0 0 51.743967-51.807968l-129.567919-129.727919 129.279919-129.471919a36.671977 36.671977 0 1 0-51.807967-51.871967l-129.279919 129.471919-129.53592-129.791919a36.511977 36.511977 0 0 0-51.711967 0 36.735977 36.735977 0 0 0 0 51.839968l129.567919 129.727919-129.279919 129.471919a36.671977 36.671977 0 0 0 51.775967 51.871967l129.279919-129.471919z" p-id="6482" fill="#A56A46"></path></Svg>
  );
};

export default Icon;
