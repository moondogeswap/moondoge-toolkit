import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} viewBox="0 0 1024 1024"><path d="M755.2 28.8c-64 3.2-124.8 25.6-172.8 70.4l-179.2 182.4c-48 44.8-70.4 108.8-70.4 176 0 83.2 41.6 160 112 204.8 9.6 6.4 22.4 9.6 35.2 6.4 12.8 0 19.2-6.4 28.8-22.4 6.4-9.6 9.6-22.4 6.4-35.2 0-12.8-6.4-22.4-19.2-28.8-41.6-28.8-67.2-76.8-70.4-124.8 0-38.4 12.8-76.8 41.6-105.6l179.2-182.4c28.8-25.6 64-41.6 102.4-41.6 83.2 0 150.4 70.4 153.6 153.6 0 38.4-12.8 76.8-41.6 105.6l-83.2 83.2c-9.6 9.6-12.8 22.4-12.8 35.2 0 12.8 6.4 22.4 12.8 35.2 9.6 9.6 22.4 12.8 35.2 12.8 12.8 0 19.2-6.4 35.2-12.8l83.2-83.2c48-44.8 70.4-108.8 70.4-176-3.2-137.6-112-249.6-246.4-252.8z m-172.8 342.4c-9.6-6.4-22.4-9.6-35.2-6.4-12.8 0-19.2 6.4-28.8 22.4-6.4 9.6-6.4 22.4-6.4 35.2 0 12.8 6.4 22.4 19.2 28.8 41.6 28.8 67.2 76.8 70.4 124.8 0 38.4-12.8 76.8-41.6 105.6L380.8 864c-28.8 25.6-64 41.6-102.4 41.6-83.2 0-150.4-70.4-153.6-153.6 0-38.4 12.8-76.8 41.6-105.6l83.2-83.2c9.6-9.6 12.8-22.4 12.8-35.2 0-12.8-6.4-22.4-12.8-35.2-9.6-9.6-22.4-12.8-35.2-12.8-12.8 0-19.2 6.4-35.2 12.8L96 576C48 620.8 25.6 684.8 25.6 752c0 134.4 108.8 243.2 243.2 246.4 64-3.2 124.8-25.6 172.8-70.4l179.2-182.4c48-44.8 70.4-108.8 70.4-176-3.2-80-44.8-153.6-108.8-198.4z" p-id="7056"></path></Svg>
  );
};

export default Icon;
