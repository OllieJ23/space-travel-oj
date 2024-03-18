import styled from 'styled-components';
import PageTitle from '../PageTitle';
import CrewContent from './CrewContent';
import CrewNav from './CrewNav';
import { useState } from 'react';
import { motion } from 'framer-motion';
import CrewBg from './CrewBG';

const CrewPageLayout = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto auto;
  justify-items: center;
  row-gap: 4rem;
  margin-top: 10rem;
  max-width: 100vw;
  min-width: 100vw;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 400px) {
    margin-top: 5rem;
  }
`;

const CrewImg = styled(motion.img)`
  grid-column: 2;
  grid-row: 1 / 4;
  max-width: 100%;
  animation: floating 3s ease-in-out infinite;
  margin-top: 10rem;

  @keyframes floating {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-4px) translateX(-2px);
    }
    100% {
      transform: translateY(0) translateX(0);
    }
  }

  @media (max-width: 800px) {
    max-width: 80%;
    margin-top: -20rem;
    z-index: -2;
    filter: opacity(0.9);
  }

  @media (max-width: 400px) {
    margin-top: -13rem;
  }
`;

const CrewFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  gap: 10rem;
  min-width: 62rem;
  max-width: 62rem;

  @media (max-width: 800px) {
    align-items: center;
    gap: 4rem;
  }
`;

function CrewPage() {
  const [crewMember, setCrewMember] = useState('Douglas Hurley');
  const formattedName = crewMember.toLowerCase().split(' ').join('-');

  return (
    <>
      <CrewBg />
      <CrewPageLayout
        initial={{ opacity: 0, y: 50 }}
        animate={{
          width: '100%',
          opacity: 1,
          y: 0,
          transition: { delay: 0.3 },
        }}
        exit={{ y: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <CrewFlexContainer>
          <PageTitle number="02">MEET YOUR CREW</PageTitle>
          <CrewContent crewMember={crewMember} />
          <CrewNav setCrewMember={setCrewMember} crewMember={crewMember} />
        </CrewFlexContainer>

        <CrewImg
          src={`src/assets/crew/image-${formattedName}.webp`}
          alt={`Image of ${formattedName}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
      </CrewPageLayout>
    </>
  );
}

export default CrewPage;
