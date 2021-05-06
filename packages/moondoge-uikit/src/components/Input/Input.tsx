import styled, { DefaultTheme } from "styled-components";
import { InputProps, scales } from "./types";

interface StyledInputProps extends InputProps {
  theme: DefaultTheme;
}

/**
 * Priority: Warning --> Success
 */
const getBoxShadow = ({ isSuccess = false, isWarning = false, theme }: StyledInputProps) => {
  if (isWarning) {
    // return theme.shadows.warning;
    return theme.colors.pink;
  }

  if (isSuccess) {
    return theme.colors.orange;
    // return theme.shadows.success;
  }
  return theme.colors.input

  return theme.shadows.inset;
};

const getHeight = ({ scale = scales.MD }: StyledInputProps) => {
  switch (scale) {
    case scales.SM:
      return "32px";
    case scales.LG:
      return "48px";
    case scales.MD:
      return "40px";
    default:
      return "32px";
  }
};

const Input = styled.input<InputProps>`
  background-color: ${({ theme }) => theme.colors.input};
  border: 0;
  border-radius: 16px;
  border: 2px solid ${getBoxShadow};
  color: ${({ theme }) => theme.colors.textSubtle};
  display: block;
  font-size: 16px;
  height: ${getHeight};
  outline: 0;
  padding: 0 16px;
  width: 100%;
  box-sizing:border-box;

  &::placeholder {
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.inputDisabled};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.textDisabled};
    cursor: not-allowed;
  }

  &:focus:not(:disabled) {
    border: 2px solid ${({ theme }) => theme.colors.textSubtle};
    box-sizing:border-box;
  }
`;

Input.defaultProps = {
  scale: scales.MD,
  isSuccess: false,
  isWarning: false,
};

export default Input;
