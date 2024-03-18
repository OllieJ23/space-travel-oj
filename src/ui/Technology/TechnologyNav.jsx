import styled from 'styled-components';
import { useMemo } from 'react';
import useAutoSwitchNav from '../../AutoSwitchNav';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 2rem;
  }
`;

const CircleNav = styled.button`
  background-color: var(--dark-blue);
  border: 1px solid #ffffff50;
  border-radius: 50%;
  width: 8rem;
  height: 8rem;
  font-size: 2.8rem;
  transition: all 0.1s ease-in;
  font-family: 'Bellefair';
  font-weight: 200;

  @media (max-width: 800px) {
    width: 6rem;
    height: 6rem;
  }

  @media (max-width: 400px) {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
  }

  &:hover {
    border: 2px solid #ffffff;
  }

  &.active {
    background-color: #ffffff;
    color: var(--dark-blue);
  }
`;

function TechnologyNav({ setTechSlide, techSlide }) {
  const techNames = useMemo(
    () => ['Launch vehicle', 'Spaceport', 'Space capsule'],
    [],
  );

  const handleItemClick = useAutoSwitchNav(techNames, setTechSlide, 8000);

  return (
    <Container>
      {techNames.map((name, index) => (
        <CircleNav
          key={index}
          className={name === techSlide ? 'active' : ''}
          onClick={() => handleItemClick(index)}
        >
          {index + 1}
        </CircleNav>
      ))}
    </Container>
  );
}

export default TechnologyNav;
