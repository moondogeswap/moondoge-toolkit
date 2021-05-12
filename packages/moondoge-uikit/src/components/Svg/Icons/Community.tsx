import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} viewBox="0 0 1295 1024" width={props.width || 18} height={props.width}><path d="M653.602054 400.698463c-218.82059 0-397.922795 289.389999-397.922795 400.693845 0 220.390852 179.009837 222.607692 397.922795 222.607692s397.922795-2.21684 397.922795-222.607692c0.369473-111.303846-178.732732-400.693845-397.922795-400.693845z m0 534.25846c-170.234845 0-309.433928 0-309.433928-133.564615 0-66.782307 139.291452-311.650768 309.433928-311.650768s309.433928 244.868461 309.433928 311.650768c0.369473 155.825384-138.82961 133.564615-309.433928 133.564615z m-508.025852-667.823075a144.648815 144.648815 0 1 0 143.725132 144.648816 143.909869 143.909869 0 0 0-143.725132-144.648816z m0 200.346923a55.421002 55.421002 0 1 1 55.421002-55.421002 54.95916 54.95916 0 0 1-55.421002 55.421002z m1005.798819-178.086153a144.648815 144.648815 0 1 0 143.725132 144.648815 143.909869 143.909869 0 0 0-143.8175-144.648815z m0 200.346922a55.421002 55.421002 0 1 1 55.421002-55.421002 54.95916 54.95916 0 0 1-55.51337 55.421002zM886.093158 22.265388a144.648815 144.648815 0 1 0 143.725132 144.648815A143.909869 143.909869 0 0 0 886.093158 22.265388z m0 200.346922a55.421002 55.421002 0 1 1 55.421002-55.421002 54.95916 54.95916 0 0 1-55.421002 55.421002zM466.09433 0.004618a166.909585 166.909585 0 1 0 165.801165 166.909585A167.556163 167.556163 0 0 0 466.09433 0.004618z m0 244.868461a77.866508 77.866508 0 1 1 77.404667-77.866508 78.605455 78.605455 0 0 1-77.404667 77.866508z" p-id="6318"></path></Svg>
  );
};

export default Icon;
