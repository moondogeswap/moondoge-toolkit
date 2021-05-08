import React from "react";
import styled from "styled-components";
import Flex from "../Box/Flex";
import Box from "../Box/Box";
import { StatusProps, StepProps } from "./types";

const getStepNumberFontColor = ({ theme, status }: StatusProps) => {
  if (status === "past") {
    return theme.colors.white;
  }
  if (status === "current") {
    return theme.colors.publicColor;
  }
  return '#201F1E';
};
const getStepNumberBkColor = ({ theme, status }: StatusProps) => {
  if (status === "past") {
    return 'linear-gradient(180deg, #DFBC70 0%, #B88513 100%);';
  }
  if (status === "current") {
    return 'linear-gradient(180deg, #FEF6E3 0%, #FEC23D 100%);';
  }
  return '#fff';
};
const StyledStep = styled(Flex)`
  ${({ theme }) => theme.mediaQueries.md} {
    justify-content: center;
  }
`;

const Connector = styled.div<StatusProps>`
  position: absolute;
  width: 4px;
  height: 100%;
  top: 50%;
  left: calc(50% - 2px);
  background: ${({ theme, status }) => status === "past" ? "linear-gradient(180deg, #DFBC70 0%, #B88513 100%);" : "#FCE1BF"};
`;

const ChildrenWrapper = styled(Box) <{ isVisible: boolean }>`
  ${({ theme }) => theme.mediaQueries.md} {
    visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  }
`;

const ChildrenLeftWrapper = styled(ChildrenWrapper)`
  display: none;
  ${({ theme }) => theme.mediaQueries.md} {
    display: block;
    margin-right: 16px;
  }
`;

const ChildrenRightWrapper = styled(ChildrenWrapper)`
  margin-left: 8px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin-left: 16px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const StepNumber = styled.div<StatusProps>`
  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);
  background: ${getStepNumberBkColor} ;
  border: ${({ theme, status }) => (["past", "current"].includes(status) ? 'transparent' : "2px solid #FFE7D8")};
  border-radius: ${({ theme }) => theme.radii.circle};
  color: ${getStepNumberFontColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 32px;
  width: 48px;
  height: 48px;
  z-index: 1;
  ${({ theme }) => theme.mediaQueries.md} {
    font-size: 40px;
    width: 80px;
    height: 80px;
  }
`;

/**
 * ChildrenLeftWrapper and ChildrenRightWrapper are used on the non mobile version, to force the alternate layout.
 * One of the child is hidden based on the step number.
 */
export const Step: React.FC<StepProps> = ({ index, status, numberOfSteps = 0, children }) => {
  const isIndexPair = index % 2 === 0;
  return (
    <StyledStep mb={index < numberOfSteps - 1 ? "16px" : 0}>
      <ChildrenLeftWrapper isVisible={!isIndexPair}>{children}</ChildrenLeftWrapper>
      <Wrapper>
        <StepNumber status={status}>{index + 1}</StepNumber>
        {index < numberOfSteps - 1 && <Connector status={status} />}
      </Wrapper>
      <ChildrenRightWrapper isVisible={isIndexPair}>{children}</ChildrenRightWrapper>
    </StyledStep>
  );
};
