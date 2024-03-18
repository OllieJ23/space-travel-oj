import styled from 'styled-components';
import crewData from './CrewData';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 62rem;
  min-width: 50rem;

  @media (max-width: 800px) {
    text-align: center;
    align-items: center;
    max-width: 35rem;
    min-width: 35rem;
  }

  @media (max-width: 400px) {
    gap: 1rem;
  }
`;

const CrewRole = styled(motion.h4)`
  color: grey;
  font-weight: 300;
  @media (max-width: 400px) {
    font-size: 2.4rem;
  }
`;

const CrewName = styled(motion.h3)`
  color: var(--white);
  font-weight: 300;

  @media (max-width: 400px) {
    font-size: 3rem;
  }
`;

const CrewBody = styled(motion.p)`
  letter-spacing: 0.5px;
  color: var(--pale-blue);
  font-size: 1.8rem;
  line-height: 1.8;
  font-weight: 300;
  max-width: 62rem;
  min-width: 62rem;

  @media (max-width: 400px) {
    font-size: 1.6rem;
    max-width: 32rem;
    min-width: 32rem;
    text-align: center;
  }
`;

function CrewContent({ crewMember }) {
  const crewRole = crewData.reduce((acc, crew) => {
    acc[crew.name] = crew.role;
    return acc;
  }, {});

  const crewBio = crewData.reduce((acc, crew) => {
    acc[crew.name] = crew.bio;
    return acc;
  }, {});

  return (
    <Container>
      <CrewRole
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {crewRole[crewMember].toUpperCase()}
      </CrewRole>
      <CrewName
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {crewMember.toUpperCase()}
      </CrewName>
      <CrewBody
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {crewBio[crewMember]}
      </CrewBody>
    </Container>
  );
}

export default CrewContent;
