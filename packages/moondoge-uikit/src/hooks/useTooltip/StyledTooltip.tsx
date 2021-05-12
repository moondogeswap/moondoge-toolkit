import styled from "styled-components";

export const Arrow = styled.div`
  &,
  &::before {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    z-index: -1;
  }

  &::before {
    content: "";
    transform: rotate(45deg);
    background: ${({ theme }) => theme.colors.tooTipBkColor};
  }
`;

export const StyledTooltip = styled.div`
  padding: 5px 30px;
  font-size: 16px;
  line-height: 130%;
  border-radius: 5px;
  max-width: 320px;
  z-index: 10;
  background: ${({ theme }) => theme.colors.tooTipBkColor};
  color: ${({ theme }) => theme.colors.tooTipFontColor};
  box-shadow: ${({ theme }) => theme.tooltip.boxShadow};

  &[data-popper-placement^="top"] > ${Arrow} {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > ${Arrow} {
    top: -4px;
  }

  &[data-popper-placement^="left"] > ${Arrow} {
    right: -4px;
  }

  &[data-popper-placement^="right"] > ${Arrow} {
    left: -4px;
  }
`;
