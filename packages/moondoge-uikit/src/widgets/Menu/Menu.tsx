import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import Panel from "./components/Panel";
import Logo from "./components/Logo"
import PanelTabMenu from "./components/PanelTabMenu"
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
import Avatar from "./components/Avatar";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { HamburgerIcon, HamburgerCloseIcon } from "./icons";
import MenuButton from "./components/MenuButton";

const PCLogoDoge = `data:image/png;base64,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`;


const MobileLogoDoge = `data:image/png;base64,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`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean, isMobile: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${({ isMobile }) => isMobile ? '8px' : '40px'};
  padding-right: ${({ isMobile }) => isMobile ? '8px' : '40px'};
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.navBorderColor};
  z-index: 20;
  transform: translate3d(0, 0, 0);
  box-sizing:border-box;
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const InnerBox = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;
const StyledLogoA = styled.a<{ isMobile: boolean }>`
 display: inline-block;
 flex:${({ isMobile }) => isMobile ? 1 : 'none'};
 min-width:  ${({ isMobile }) => isMobile ? '32px' : '153px'};
 min-height: ${({ isMobile }) => isMobile ? '32px' : '30px'};
`;
const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);
  const [index, setIndex] = useState(0);
  const handleClick = (newIndex: number) => setIndex(newIndex);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu} isMobile={isMobile}>
        {
          isMobile ?
            <MenuButton aria-label="Toggle menu" onClick={() => setIsPushed((prevState: boolean) => !prevState)} mr="24px">
              {isPushed ? (
                <HamburgerCloseIcon width="24px" color="textSubtle" />
              ) : (
                <HamburgerIcon width="24px" color="textSubtle" />
              )}
            </MenuButton> : null}
        <StyledLogoA href={homeLink?.href ?? "/"} isMobile={isMobile}>
          {isMobile ? <img src={MobileLogoDoge} alt="" width={32} height={32} /> :
            <img src={PCLogoDoge} alt="" width={154} height={30} />}
        </StyledLogoA>
        {
          isMobile ? null :
            <PanelTabMenu
              isPushed={isPushed}
              isMobile={isMobile}
              showMenu={showMenu}
              isDark={isDark}
              toggleTheme={toggleTheme}
              langs={langs}
              setLang={setLang}
              currentLang={currentLang}
              cakePriceUsd={cakePriceUsd}
              pushNav={setIsPushed}
              links={links}
            />}
        {/* <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        /> */}
        <Flex>
          <UserBlock account={account} login={login} logout={logout} />
          {profile && <Avatar profile={profile} />}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        {
          isMobile ?
            <Panel
              isPushed={isPushed}
              isMobile={isMobile}
              showMenu={showMenu}
              isDark={isDark}
              toggleTheme={toggleTheme}
              langs={langs}
              setLang={setLang}
              currentLang={currentLang}
              cakePriceUsd={cakePriceUsd}
              pushNav={setIsPushed}
              links={links}
            /> : null}
        <InnerBox isPushed={isPushed} showMenu={showMenu}>
          {children}
        </InnerBox>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
