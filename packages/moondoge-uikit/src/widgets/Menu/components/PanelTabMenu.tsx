import React from "react";
import styled from "styled-components";
import PanelTabMenuBody from "./PanelTabMenuBody";
import PanelFooter from "./PanelFooter";
import PanelTabMenuFooter from "./PanelTabMenuFooter"
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPanel = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex:1;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  margin-left: 50px;
  height: 100%;
  ::-webkit-scrollbar{
    width:1px;
    height:3px;
  }
`;

const Panel: React.FC<Props> = (props) => {
  const { isPushed, showMenu } = props;
  return (
    <StyledPanel isPushed={isPushed} showMenu={showMenu}>
      <PanelTabMenuBody {...props} />
      <PanelTabMenuFooter {...props} />
    </StyledPanel>
  );
};

export default Panel;
