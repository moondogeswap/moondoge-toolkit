import styled from "styled-components";
import { space } from "styled-system";
import { RadioProps, scales } from "./types";

const getScale = ({ scale }: RadioProps) => {
  switch (scale) {
    case scales.SM:
      return "20px";
    case scales.MD:
    default:
      return "30px";
  }
};

const getCheckedScale = ({ scale }: RadioProps) => {
  switch (scale) {
    case scales.SM:
      return "12px";
    case scales.MD:
    default:
      return "22px";
  }
};

const Radio = styled.input.attrs({ type: "radio" }) <RadioProps>`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${getScale};
  width: ${getScale};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.radioDefault};
  border: 1px solid ${({ theme }) => theme.colors.publicColor};
  &:after {
    border-radius: 50%;
    content: "";
    height: ${getCheckedScale};
    left: 4px;
    position: absolute;
    top: 4px;
    width: ${getCheckedScale};
  }

  &:hover:not(:disabled):not(:checked) {
    background:${({ theme }) => theme.colors.publicColor};
    border:none;
    &:after{
      background: ${({ theme }) => theme.colors.radioCheck};
      border: 4px solid ${({ theme }) => theme.colors.orange};
    }
  }

  &:focus {
    outline: none;
    background:${({ theme }) => theme.colors.publicColor}
    &:after{
      border:  4px solid ${({ theme }) => theme.colors.orange};
    }
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.orange};
    border:none;
    &:after {
      background: ${({ theme }) => theme.colors.radioCheck};
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
  ${space}
`;

Radio.defaultProps = {
  scale: scales.MD,
  m: 0,
};

export default Radio;
