import { useState } from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  cursor: pointer;
  margin-left: auto;
  margin-right: 4rem;
  width: 3.2rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 100;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')};
  height: 100%;
  width: 25rem;

  backdrop-filter: blur(40px);
  transition: right 0.3s ease;
  z-index: 101;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  padding: 4rem;
  font-size: 2.6rem;

  &::before {
    backdrop-filter: blur(30px);
  }
`;

const HamburgerMenuOverlay = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Logo src="src\assets\shared\icon-hamburger.svg" onClick={toggleMenu} />
      <Overlay $isOpen={isOpen} onClick={toggleMenu} />
      <MenuContainer $isOpen={isOpen}>{children}</MenuContainer>
    </>
  );
};

export default HamburgerMenuOverlay;
