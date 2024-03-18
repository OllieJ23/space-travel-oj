import React from 'react';
import styled, { keyframes } from 'styled-components';

const backgroundAnimation = keyframes`
  0% { transform: scale(1); }
  55% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

const starAnimation = keyframes`
  0% { transform: rotate(200deg) translateX(0); opacity: 1; }
  40% { opacity: 0.8; }
  70% { opacity: 1; }
  100% { transform: rotate(200deg) translateX(-1400px); opacity: 0; }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-position-x: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  animation: ${backgroundAnimation} 68s linear infinite;
  z-index: -2;
  opacity: 0.5;
`;

const Star = styled.span`
  position: absolute;
  width: 5px;
  height: 5px;
  background: white;
  border-radius: 50%;
  box-shadow:
    0 1px 0 5px rgba(254, 254, 255, 0.2),
    0 1px 0 7px rgba(245, 254, 255, 0.1),
    0 1px 21px rgba(253, 253, 245, 1);
  animation: ${starAnimation} 10s ease-in-out infinite;
`;

const StarWithBefore = styled(Star)`
  &::before {
    content: '';
    width: 290px;
    height: 2px;
    position: absolute;
    top: 20%;
    transform: translateY(50%);
    background: linear-gradient(90deg, rgba(255, 255, 255, 1), transparent);
  }
`;

const ShootingStarAnimation = () => {
  return (
    <Container>
      <StarWithBefore style={{ top: '0', right: '0', left: 'inherit' }} />
      <StarWithBefore
        style={{
          top: '20vh',
          right: '20px',
          left: 'inherit',
          animationDelay: '-2s',
        }}
      />
    </Container>
  );
};

export default ShootingStarAnimation;
