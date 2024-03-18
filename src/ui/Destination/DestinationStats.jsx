import styled from 'styled-components';
import DestinationData from './DestinationData';
import { motion } from 'framer-motion';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 0.5fr;
  column-gap: 8rem;
  row-gap: 0.5rem;
  @media (max-width: 400px) {
    text-align: center;
  }
`;

const StatTitle = styled(motion.span)`
  font-size: 1.4rem;
  letter-spacing: 2.35px;
  font-weight: 200;
`;

const StatText = styled(motion.span)`
  font-family: 'Bellefair';
  font-size: 2.8rem;
  font-weight: 100;

  @media (max-width: 400px) {
    font-size: 2rem;
    text-align: center;
  }
`;

function DestinationStats({ destination }) {
  const destinationDistance = DestinationData.reduce((acc, dest) => {
    acc[dest.name] = dest.distance;
    return acc;
  }, {});

  const destinationTravelTime = DestinationData.reduce((acc, dest) => {
    acc[dest.name] = dest.travel;
    return acc;
  }, {});

  return (
    <GridContainer>
      <StatTitle>AVG. DISTANCE</StatTitle>
      <StatTitle>EST. TRAVEL TIME</StatTitle>
      <StatText
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {destinationDistance[destination].toUpperCase()}
      </StatText>
      <StatText
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {destinationTravelTime[destination].toUpperCase()}
      </StatText>
    </GridContainer>
  );
}

export default DestinationStats;
