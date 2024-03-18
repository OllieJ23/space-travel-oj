import styled from 'styled-components';
import techData from './TechnologyData';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 48rem;
  margin-bottom: 3rem;
  transform: translateX(-30%);

  @media (max-width: 800px) {
    align-items: center;
    text-align: center;
    transform: translateX(0%);
  }
`;

const TechSubtitle = styled.span`
  font-size: 1.8rem;
  letter-spacing: 2.35px;
  font-weight: 200;
  color: var(--pale-blue);
`;

const TechH3 = styled(motion.h3)`
  color: var(--white);
  font-weight: 300;

  @media (max-width: 800px) {
    font-size: 4rem;
  }

  @media (max-width: 400px) {
    font-size: 3.8rem;
  }
`;

const TechBody = styled(motion.p)`
  letter-spacing: 0.5px;
  color: var(--pale-blue);
  font-size: 1.8rem;
  line-height: 1.8;
  font-weight: 300;
  max-width: 45rem;

  @media (max-width: 800px) {
    max-width: 55rem;
  }

  @media (max-width: 400px) {
    max-width: 32rem;
    font-size: 1.6rem;
  }
`;

function TechnologyContent({ techSlide }) {
  const techDescriptions = techData.reduce((acc, tech) => {
    acc[tech.name] = tech.description;
    return acc;
  }, {});

  return (
    <Container>
      <TechSubtitle>THE TERMINOLOGY...</TechSubtitle>
      <TechH3
        initial={{ opacity: 0, scale: 1.2, filter: 'blur(25px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0)' }}
        transition={{ duration: 0.5 }}
      >
        {techSlide.toUpperCase()}
      </TechH3>
      <TechBody
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {techDescriptions[techSlide]}
      </TechBody>
    </Container>
  );
}

export default TechnologyContent;
