import styled from 'styled-components';
import Navlink from './Navlink';

import HamburgerMenuOverlay from './HamburgerMenu';
import { useEffect, useState } from 'react';

const StyledNavBar = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 55vw;
  margin-left: auto;
  gap: 5rem;
  height: 9rem;
  padding-right: 23rem;
  padding-left: 20rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(30px);
    z-index: -1;
  }

  @media (max-width: 800px) {
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(40px);
      background-color: var(--pale-blue);
      opacity: 0.1;
      z-index: -1;
    }
    padding-left: 23rem;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;
  @media (max-width: 800px) {
    margin-top: 1rem;
  }
`;

const StyledLogo = styled.img`
  margin-left: 5%;
`;
const HeaderLine = styled.span`
  &::after {
    content: '';
    position: absolute;
    right: 44%;
    width: 40%;
    height: 1px;
    background-color: var(--white);
    opacity: 0.2;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  let screenWidth = window.screen.width;

  useEffect(() => {
    if (screenWidth < 400) setIsMobile(true);
  }, [screenWidth]);

  return (
    <HeaderContainer>
      <StyledLogo src="src\assets\shared\logo.svg" alt="" />
      <HeaderLine />
      {!isMobile ? (
        <StyledNavBar>
          <Navlink number="00" path="/home" />
          <Navlink number="01" path="/destination" />
          <Navlink number="02" path="/crew" />
          <Navlink number="03" path="/technology" />
        </StyledNavBar>
      ) : (
        <HamburgerMenuOverlay>
          <Navlink number="00" path="/home" />
          <Navlink number="01" path="/destination" />
          <Navlink number="02" path="/crew" />
          <Navlink number="03" path="/technology" />
        </HamburgerMenuOverlay>
      )}
    </HeaderContainer>
  );
}

export default Navbar;
