import { useMemo } from 'react';
import styled from 'styled-components';
import useAutoSwitchNav from '../../AutoSwitchNav';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 400px) {
    gap: 3rem;
  }
`;

const LinkText = styled.span`
  font-family: 'Barlow Condensed';
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 3px;
  cursor: pointer;
  font-size: 1.6rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1rem;
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
`;

function DestinationNav({ destination, setDestination }) {
  const destinations = useMemo(() => ['Moon', 'Mars', 'Europa', 'Titan'], []);

  const handleItemClick = useAutoSwitchNav(
    destinations,
    setDestination,
    8000, // Change item every 8 seconds
  );

  return (
    <Container>
      {destinations.map((dest, index) => (
        <LinkText
          key={index}
          className={destination === dest ? 'active' : ''}
          onClick={() => handleItemClick(index)}
        >
          {dest}
        </LinkText>
      ))}
    </Container>
  );
}

export default DestinationNav;
