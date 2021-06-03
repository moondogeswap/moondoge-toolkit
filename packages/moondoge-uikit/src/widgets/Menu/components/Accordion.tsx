import React, { ReactNode, useEffect, useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";
import { LinkLabel, MenuEntry } from "./MenuEntry";
import { PushedProps } from "../types";
import { ArrowDropDownIcon, ArrowDropUpIcon } from "../../../components/Svg";

interface Props extends PushedProps {
  label: string;
  icon?: React.ReactElement | null;
  initialOpenState?: boolean;
  className?: string;
  children: ReactNode;
  isActive?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
  position: relative;
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  position: absolute;
  overflow: inherit;
  top:50px;
  left:0;
  width: 122px;
  background:#fff;
  border-radius: 8px;
  box-shadow: 0px 4px 12px rgba(64, 39, 6, 0.22);

  &::before {
    content: "";
    position: absolute;
    border-width:8px;
    border-style: dashed dashed solid dashed;
    border-color:transparent transparent #fff transparent;
    right:38px;
    top:-15px;
    display:${({ isOpen }) => isOpen ? 'block' : 'none'};
  }

  div[role="button"]{
    display:${({ isOpen }) => isOpen ? 'flex' : 'none'};
    color:#1A191B;
    height:26px;
    margin:4px 0;
    line-height:26px;
    align-items: center;
    padding:0 10px;
    &:hover{
      color:#A56A46;
      background:#FFF1D5;
      svg{
        fill:#A56A46
      }
    }
    svg{
      margin-right: 8px;
      fill:#AAA;
    }
  }
`;

const Accordion: React.FC<Props> = ({
  label,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
  isActive,
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);

  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <Container>
      <MenuEntry onClick={handleClick} className={className} isActive={isActive}>
        {/* {icon} */}
        {/* <Dropdown target={<Text>{label}</Text>}>
          <div>{children}</div>
        </Dropdown> */}
        <LinkLabel isPushed={isPushed}>{label}</LinkLabel>
        {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </MenuEntry>
      {/* <Dropdown target={<Text>{label}</Text>}>
        <div>{'111111'}</div>
      </Dropdown> */}
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default React.memo(
  Accordion,
  (prev, next) => prev.isPushed === next.isPushed && prev.isActive === next.isActive
);
