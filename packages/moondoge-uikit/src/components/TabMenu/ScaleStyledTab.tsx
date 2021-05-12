import styled from "styled-components";

interface StyledTabProps {
  color: "publicColor" | "stepMenuColor";
  bgColor: "textSubtle" | "stepMenuBkColor";
}

const StyledTab = styled.button<StyledTabProps>`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  border: 0;
  outline: 0;
  flex-grow: 1;
  border-radius: 10px 10px 0 0;
  color: ${({ theme, color }) => theme.colors[color]};
  background: transparent;
  position: relative;
  span{
    position: absolute;
    width:100%;
    height:4px;
    background:${({ theme, color }) => theme.colors[color]};
    bottom:-1px;
    left:0;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    flex-grow: 0;
    padding: 6px 12px;
  }

`;

export default StyledTab
