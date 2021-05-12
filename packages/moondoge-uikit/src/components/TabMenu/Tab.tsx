import React from "react";
import StyledTab from "./StyledTab"
import ScaleStyledTab from "./ScaleStyledTab";
import { TabProps } from "./types";
import { Text } from "../Text";

const Tab: React.FC<TabProps> = ({ isActive = false, onClick, children, scale }) => {
  console.log(scale, 'scaletext')
  return (
    <>
      {
        scale ? <ScaleStyledTab
          onClick={onClick}
          bgColor={isActive ? "textSubtle" : "stepMenuBkColor"}
          color={isActive ? "publicColor" : "stepMenuColor"}
        >
          <Text fontWeight={600} color={isActive ? "publicColor" : "stepScaleColor"} fontSize={scale === 'md' ? '18' : '14'}>
            {children}
          </Text>
          {isActive ? <span /> : null}
        </ScaleStyledTab> :
          <StyledTab
            onClick={onClick}
            bgColor={isActive ? "textSubtle" : "stepMenuBkColor"}
            color={isActive ? "white" : "stepMenuColor"}
          >
            <Text fontWeight={600} color={isActive ? "white" : "stepMenuColor"}>
              {children}
            </Text>
          </StyledTab>
      }
    </>
  );
};
export default Tab;
