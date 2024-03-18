import styled from 'styled-components';
import PageTitle from '../PageTitle';
import TechnologyContent from './TechnologyContent';
import TechnologyNav from './TechnologyNav';
import { useState } from 'react';
import { motion } from 'framer-motion';
import TechBg from './TechBg';

const TechPageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10rem;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 5rem;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  left: 8%;
  top: 20%;

  @media (max-width: 800px) {
    flex-direction: column;
    left: 30%;
    top: 15%;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    left: 20%;
    top: 10%;
  }
`;

const TechImg = styled(motion.img)`
  border-radius: 2%;
  max-width: 100%;
  opacity: 0.9;
  animation: floating 3s ease-in-out infinite;

  @keyframes floating {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-2.5px);
    }
    100% {
      transform: translateY(0) translateX(0);
    }
  }

  @media (max-width: 800px) {
    max-width: 50%;
    order: -1;
    margin-bottom: 5rem;
    margin-top: 2rem;
  }

  @media (max-width: 400px) {
    max-width: 60%;
    order: -1;
    margin-bottom: 5rem;
    margin-top: 2rem;
  }
`;

function TechnologyPage() {
  const [techSlide, setTechSlide] = useState('Launch vehicle');
  const formattedName = techSlide.toLowerCase().split(' ').join('-');

  return (
    <>
      <TechBg />
      <TitleContainer>
        <PageTitle number="03">SPACE LAUNCH 101</PageTitle>
      </TitleContainer>
      <TechPageLayout>
        <TechnologyNav setTechSlide={setTechSlide} techSlide={techSlide} />
        <TechnologyContent techSlide={techSlide} />
        <TechImg
          src={`src/assets/technology/image-${formattedName}-portrait.jpg`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          alt={`Image of ${formattedName}`}
        ></TechImg>
      </TechPageLayout>
    </>
  );
}

export default TechnologyPage;
