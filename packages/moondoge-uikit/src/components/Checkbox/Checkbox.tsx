import styled from "styled-components";
import { CheckboxProps, scales } from "./types";

const getScale = ({ scale }: CheckboxProps) => {
  switch (scale) {
    case scales.XS:
      return "14px";
    case scales.SM:
      return "20px";
    case scales.MD:
    default:
      return "30px";
  }
};

const Checkbox = styled.input.attrs({ type: "checkbox" }) <CheckboxProps>`
  appearance: none;
  overflow: hidden;
  cursor: pointer;
  position: relative;
  display: inline-block;
  height: ${getScale};
  width: ${getScale};
  vertical-align: middle;
  transition: background-color 0.2s ease-in-out;
  border: 0;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.checkboxInput};
  border: 1px solid #FFCE69;

  &:after {
    content: "";
    position: absolute;
    border-bottom: 2px solid;
    border-left: 2px solid;
    border-color: transparent;
    top: 27%;
    left: 0;
    right: 0;
    width: 62%;
    height: 36%;
    margin: auto;
    transform: rotate(-50deg);
    transition: border-color 0.2s ease-in-out;
  }

  &:hover:not(:disabled):not(:checked) {
    border: ${({ theme }) => '2px solid' + theme.colors.orange};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.colors.orange};
  }

  &:checked {
    background-color: ${({ theme }) => theme.colors.checkboxChecked};
    border: ${({ theme }) => '2px solid' + theme.colors.orange};
    &:after {
      border-color: white;
    }
  }

  &:disabled {
    cursor: default;
    opacity: 0.6;
  }
`;

Checkbox.defaultProps = {
  scale: scales.MD,
};

export default Checkbox;
