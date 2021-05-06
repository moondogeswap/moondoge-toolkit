import styled from "styled-components";
import Button from "./Button";
import { BaseButtonProps, PolymorphicComponent } from "./types";

const IconButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(Button) <BaseButtonProps>`
  padding: 0;
  width: ${({ scale }) => (scale === "sm" ? "32px" : "48px")};
  background: linear-gradient(180deg, #FEF6E3 0%, #FEC23D 100%);
  box-shadow: none
`;

export default IconButton;
