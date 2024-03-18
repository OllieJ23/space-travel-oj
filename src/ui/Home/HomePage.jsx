import styled from 'styled-components';
import HomePageContent from './HomePageContent';
import { Link } from 'react-router-dom';
import ShootingStarAnimation from './ShootingStars';
import { motion } from 'framer-motion';

const HomePageLayout = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  margin-top: 10%;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 400px) {
    margin-top: 20%;
    overflow: hidden;
  }
`;

const FloatingAnimation = styled.div`
  animation: floating 3s ease-in-out infinite;

  @keyframes floating {
    0% {
      transform: translateY(0) translateX(0);
    }
    50% {
      transform: translateY(-10px) translateX(-5px);
    }
    100% {
      transform: translateY(0) translateX(0);
    }
  }
`;

const ExploreButton = styled(Link)`
  background-color: #ffffff;
  border-radius: 50%;
  border: none;
  color: var(--dark-blue);
  width: 28rem;
  height: 28rem;
  font-size: 3.6rem;
  font-family: 'Bellefair';
  margin-top: 10rem;
  transition: all 0.3s ease;
  position: relative;
  align-self: end;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #ffffff;
    width: 28rem;
    height: 28rem;
    transition: all 0.3s ease;
    opacity: 0;
  }

  &:hover::before {
    width: 45rem;
    height: 45rem;
    background-color: #ffffff;
    opacity: 0.2;
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 400px) {
    width: 20rem;
    height: 20rem;
    margin-top: 5rem;
  }
`;

function HomePage() {
  return (
    <>
      <ShootingStarAnimation />
      <HomePageLayout
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
      >
        <HomePageContent />
        <FloatingAnimation>
          <ExploreButton to="/destination">EXPLORE</ExploreButton>
        </FloatingAnimation>
      </HomePageLayout>
    </>
  );
}

export default HomePage;
