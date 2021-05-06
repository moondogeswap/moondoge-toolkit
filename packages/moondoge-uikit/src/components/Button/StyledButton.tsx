import styled, { DefaultTheme } from "styled-components";
import { space, layout, variant } from "styled-system";
import { scaleVariants, styleVariants } from "./theme";
import { BaseButtonProps } from "./types";

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme;
}

interface TransientButtonProps extends ThemedButtonProps {
  $isLoading?: boolean;
  $isVariant?: boolean
}

const getDisabledStyles = ({ $isLoading, theme }: TransientButtonProps) => {
  if ($isLoading === true) {
    return `
      &:disabled,
      &.pancake-button--disabled {
        cursor: not-allowed;
      }
    `;
  }

  return `
    &:disabled,
    &.pancake-button--disabled {
      background: ${theme.colors.backgroundDisabled};
      border-color: ${theme.colors.backgroundDisabled};
      box-shadow: none;
      color: ${theme.colors.textDisabled};
      cursor: not-allowed;
    }
    &.pancake-button--disabled span{
      background: #FFFFFF;
      border: 4px solid #C8C8C8;
    }
  `;
};

const getIsVariantStyles = ({ $isVariant, theme }: TransientButtonProps) => {
  if ($isVariant) {
    return `
    width: 490px;
    height: 88px;
    background: linear-gradient(133deg, #E9FFE4 0%, #3DFEF1 100%);
    box-shadow: 0px 6px 36px rgba(24, 194, 188, 0.24) !important;
    opacity: 1;
    border-radius: 20px;
    width:490px;
    height:88px;
    display: flex;
    justify-content: space-between !important;
    align-items: center !important;
    font-weight: bold;
    color: #1A191B !important;
    `;
  }
};

/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */

const getOpacity = ({ $isLoading = false }: TransientButtonProps) => {
  return $isLoading ? ".5" : "1";
};

const StyledButton = styled.button<BaseButtonProps>`
  ${getIsVariantStyles}
  align-items: center;
  border: 0;
  border-radius: 16px;
  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  letter-spacing: 0.03em;
  line-height: 1;
  opacity: ${getOpacity};
  outline: 0;
  transition: background-color 0.2s, opacity 0.2s;

  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    opacity: 0.65;
  }

  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {
    opacity: 0.85;
    transform: translateY(1px);
    box-shadow: none;
  }

  ${getDisabledStyles}
  ${variant({
  prop: "scale",
  variants: scaleVariants,
})}
  ${variant({
  variants: styleVariants,
})}
  ${layout}
  ${space}
`;

export default StyledButton;
