import { useMemo } from 'react';
import styled from 'styled-components';
import useAutoSwitchNav from '../../AutoSwitchNav';

const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  height: 20rem;
`;

const Dot = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  background-color: grey;
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: lightgrey;
  }

  &.active {
    background-color: #ffffff;
  }
`;

function CrewNav({ crewMember, setCrewMember }) {
  const crewMembers = useMemo(
    () => [
      'Douglas Hurley',
      'Mark Shuttleworth',
      'Victor Glover',
      'Anousheh Ansari',
    ],
    [],
  );

  const handleItemClick = useAutoSwitchNav(crewMembers, setCrewMember, 8000);

  return (
    <NavigationContainer>
      {crewMembers.map((member, index) => (
        <Dot
          key={index}
          className={crewMember === member ? 'active' : ''}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </NavigationContainer>
  );
}

export default CrewNav;
