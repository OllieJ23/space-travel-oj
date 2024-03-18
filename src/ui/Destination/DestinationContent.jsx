import styled from 'styled-components';
import DestinationNav from './DestinationNav';
import DestinationStats from './DestinationStats';
import DestinationText from './DestinationText';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  align-items: start;
  gap: 2rem;

  @media (max-width: 800px) {
    align-items: center;
    gap: 3rem;
  }
`;

const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--pale-blue);
  opacity: 0.4;

  @media (max-width: 400px) {
    width: 80%;
  }
`;

function DestinationContent({ destination, setDestination }) {
  return (
    <Container>
      <DestinationNav
        setDestination={setDestination}
        destination={destination}
      />
      <DestinationText destination={destination} />
      <HorizontalLine />
      <DestinationStats destination={destination} />
    </Container>
  );
}

export default DestinationContent;
