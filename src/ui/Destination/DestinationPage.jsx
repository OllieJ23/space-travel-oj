import styled from 'styled-components';
import PageTitle from '../PageTitle';
import DestinationContent from './DestinationContent';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Particle from './Particle';

const DestinationPageLayout = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.6fr auto;
  justify-items: center;
  row-gap: 4rem;
  margin-top: 5rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const PlanetImg = styled(motion.img)`
  grid-row: 2/3;
  justify-self: end;
  animation: floating 3s ease-in-out infinite;

  @keyframes floating {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-5px) translateX(-5px);
    }
    100% {
      transform: translateY(0) translateX(0);
    }
  }
  @media (max-width: 800px) {
    max-width: 40%;
  }
`;

function DestinationPage() {
  const [destination, setDestination] = useState('Moon');

  return (
    <>
      <Particle />
      <DestinationPageLayout
        initial={{ opacity: 0 }}
        animate={{ width: '100%', opacity: 1, transition: { delay: 0.25 } }}
        exit={{ scale: 4, opacity: 0 }}
      >
        <PageTitle number="01" style={{ gridColumn: '1/3' }}>
          PICK YOUR DESTINATION
        </PageTitle>
        <PlanetImg
          src={`src/assets/destination/image-${destination.toLowerCase()}.webp`}
          alt={`Image of ${destination}`}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
        <div style={{ gridRow: '2/-2' }}>
          <DestinationContent
            setDestination={setDestination}
            destination={destination}
          />
        </div>
      </DestinationPageLayout>
    </>
  );
}

export default DestinationPage;
