import styled from "styled-components";
import Box from "../Box/Box";
import Input from "../Input/Input";
import { BalanceInputProps } from "./types";

export const StyledBalanceInput = styled(Box) <{ isWarning: BalanceInputProps["isWarning"] }>`
  background-color: ${({ theme }) => theme.colors.input};
  border-radius: 20px;
  border: ${({ theme, isWarning }) => isWarning ? `1px solid ${theme.colors.textInputBorder}` : ''};
  padding: 8px 30px 24px;
  box-sizing:border-box;
  border:none;
`;

export const StyledInput = styled(Input)`
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
  font-weight: bold;
  text-align: right;
  color: ${({ theme }) => theme.colors.textInput};
  font-size: 20px;
  border:none;

  ::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:focus:not(:disabled) {
    box-shadow: none;
    border:none;
  }
`;
