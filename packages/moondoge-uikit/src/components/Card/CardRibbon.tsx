import React from "react";
import styled, { DefaultTheme } from "styled-components";
import { CardRibbonProps } from "./types";

interface StyledCardRibbonProps extends CardRibbonProps {
  theme: DefaultTheme;
}

const StyledCardRibbon = styled.div<Partial<StyledCardRibbonProps>>`
  background: ${({ variantColor = "secondary", theme }) => theme.colors[variantColor]};
  color:${({ variantColor }) => variantColor === 'white' ? '#A56A46' : '#fff'};
  padding: 5px 22px;
  position: absolute;
  top:${({ variantColor }) => variantColor === 'white' ? '16px' : '36px'};
  right:${({ ribbonPosition }) => (ribbonPosition === "right" ? 0 : 'auto')};
  border-radius: ${({ ribbonPosition }) => (ribbonPosition === "right" ? '50px 0px 0px 50px' : ' 0px 50px 50px 0px;')};
  left: ${({ ribbonPosition }) => (ribbonPosition === "left" ? 0 : "auto")};
  text-align: center;
  width:98px;

  & > div {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const CardRibbon: React.FC<CardRibbonProps> = ({ variantColor, text, ribbonPosition }) => {
  return (
    <StyledCardRibbon variantColor={variantColor} ribbonPosition={ribbonPosition}>
      <div title={text}>{text}</div>
    </StyledCardRibbon>
  );
};

CardRibbon.defaultProps = {
  ribbonPosition: "right",
};

export default CardRibbon;
