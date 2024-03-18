import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3.2rem;
    width: 100%;
    height: 3px;
    background-color: var(--white);
    opacity: 0;
    transition: all 0.2s ease-in;
  }

  &:hover::after {
    opacity: 0.5;
  }
  &:active::after,
  &.active::after {
    opacity: 1;
    height: 3px;
  }

  @media (max-width: 400px) {
    &:active::after,
    &.active::after {
      opacity: 1;
      bottom: -1rem;
      height: 2px;
    }

    &:hover::after {
      opacity: 0.5;
      bottom: -1rem;
      height: 2px;
    }
  }
`;

const LinkNumber = styled.span`
  font-weight: bold;
  font-family: 'Barlow Condensed';
  letter-spacing: 2px;

  @media (max-width: 768px) {
    display: none;
  }
`;
const LinkText = styled.span`
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  letter-spacing: 1.5px;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

function Navlink({ path, number }) {
  const formattedLinkText = path.split('/');
  const { pathname } = useLocation();
  return (
    <Link to={path}>
      <LinkContainer className={path === pathname ? 'active' : ''}>
        <LinkNumber>{number}</LinkNumber>
        <LinkText>{formattedLinkText}</LinkText>
      </LinkContainer>
    </Link>
  );
}

export default Navlink;
