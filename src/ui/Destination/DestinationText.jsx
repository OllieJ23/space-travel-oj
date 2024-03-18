import styled from 'styled-components';
import DestinationData from './DestinationData';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  margin-bottom: 3rem;

  @media (max-width: 800px) {
    align-items: center;
  }

  @media (max-width: 400px) {
    margin-bottom: 1rem;
  }
`;

const DestinationTitle = styled(motion.h2)`
  color: var(--white);
  font-weight: 300;

  @media (max-width: 800px) {
    font-size: 6.4rem;
  }
`;

const DestinationBody = styled(motion.p)`
  letter-spacing: 0.5px;
  color: var(--pale-blue);
  font-size: 1.8rem;
  line-height: 1.8;
  font-weight: 300;

  @media (max-width: 800px) {
    max-width: 50rem;
    min-width: 50rem;
    text-align: center;
  }

  @media (max-width: 400px) {
    max-width: 30rem;
    min-width: 30rem;
    text-align: center;
    font-size: 1.6rem;
    letter-spacing: 1px;
  }
`;

function DestinationText({ destination }) {
  const destinationDescriptions = DestinationData.reduce((acc, dest) => {
    acc[dest.name] = dest.description;
    return acc;
  }, {});

  return (
    <Container>
      <DestinationTitle
        initial={{ opacity: 0, scale: 1.2, filter: 'blur(25px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0)' }}
        transition={{ duration: 0.5 }}
      >
        {destination.toUpperCase()}
      </DestinationTitle>
      <DestinationBody
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {destinationDescriptions[destination]}
      </DestinationBody>
    </Container>
  );
}

export default DestinationText;
