import React from "react";
import styled from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import Text from "../Text/Text";
import { LinkProps } from "./types";

const StyledLink = styled(Text) <LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
    color:${({ theme }) => theme.colors.linkAH}
  }
`;

const Link: React.FC<LinkProps> = ({ external, ...props }) => {
  const internalProps = external ? getExternalLinkProps() : {};
  return <StyledLink as="a" bold {...internalProps} {...props} />;
};

Link.defaultProps = {
  color: "linkADefault",
};

export default Link;
