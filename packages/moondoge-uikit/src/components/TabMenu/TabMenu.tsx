import React, { cloneElement, Children, ReactElement } from "react";
import styled from "styled-components";
import Flex from "../Box/Flex";
import { TabMenuProps } from "./types";

const Wrapper = styled(Flex)`
  border-bottom: 2px solid ${({ theme }) => theme.colors.textSubtle};
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Inner = styled(Flex)`
  justify-content: space-between;
  flex-grow: 1;

  & > button + button {
    margin-left: 4px;
  }

  ${({ theme }) => theme.mediaQueries.md} {
    flex-grow: 0;
  }
`;

const ScaleWrapper = styled(Flex)`
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const ScaleInner = styled(Flex)`
  justify-content: space-between;

  & > button + button {
    margin-left: 63px;
  }

${({ theme }) => theme.mediaQueries.md} {
  flex - grow: 0;
}
`;


const ButtonMenu: React.FC<TabMenuProps> = ({ activeIndex = 0, onItemClick, children, scale }) => {
  return (
    <>
      {
        scale ? <ScaleWrapper>
          <ScaleInner>
            {Children.map(children, (child: ReactElement, index) => {
              return cloneElement(child, {
                isActive: activeIndex === index,
                onClick: onItemClick ? () => onItemClick(index) : undefined,
              });
            })}
          </ScaleInner>
        </ScaleWrapper> :
          <Wrapper p={["0 4px", "0 16px"]}>
            <Inner>
              {Children.map(children, (child: ReactElement, index) => {
                return cloneElement(child, {
                  isActive: activeIndex === index,
                  onClick: onItemClick ? () => onItemClick(index) : undefined,
                });
              })}
            </Inner>
          </Wrapper>
      }
    </>
  );
};

export default ButtonMenu;
