import styled from "styled-components";

const StyledTh = styled.th`
  background: ${({ theme }) => theme.colors.stepMenuBkColor};
  padding: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.publicColor};

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding-left: 20px;
  }

  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-right: 20px;
  }
`;

export default StyledTh;
