import styled from "styled-components";

interface StyledTabProps {
  color: "publicColor" | "white" | "stepMenuColor";
  bgColor: "textSubtle" | "stepMenuBkColor";
}

const StyledTab = styled.button<StyledTabProps>`
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
  border: 0;
  outline: 0;
  flex-grow: 1;
  padding: 6px;
  border-radius: 10px 10px 0 0;
  color: ${({ theme, color }) => theme.colors[color]};
  background: ${({ theme, bgColor }) => theme.colors[bgColor]};

  ${({ theme }) => theme.mediaQueries.md} {
    flex-grow: 0;
    padding: 6px 12px;
  }
`;

export default StyledTab
