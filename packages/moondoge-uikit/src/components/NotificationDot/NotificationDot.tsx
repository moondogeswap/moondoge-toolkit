import React, { cloneElement, Children, ReactElement } from "react";
import styled from "styled-components";
import { NotificationDotProps, DotProps } from "./types";

const NotificationDotRoot = styled.span`
  display: inline-flex;
  position: relative;
`;

const Dot = styled.span<DotProps>`
  display: ${({ show }) => (show ? "inline-flex" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  width: 10px;
  height: 10px;
  pointer-events: none;
  border: 2px solid #FFFFFF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  background: #FFB000;
  border-radius: 50%;
`;

const NotificationDot: React.FC<NotificationDotProps> = ({ show = false, children, ...props }) => (
  <NotificationDotRoot>
    {Children.map(children, (child: ReactElement) => cloneElement(child, props))}
    <Dot show={show} />
  </NotificationDotRoot>
);

export default NotificationDot;
