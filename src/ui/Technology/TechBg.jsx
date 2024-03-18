import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for animations
const preloader = keyframes`
  0% {
    transform: rotate(180deg);
    opacity: 0;
  }
  25% {
     transform: rotate(180deg);
    opacity: 1;
  }
  50% {
    transform: rotate(360deg);
    opacity: 0.5;
  }
  100% {
    transform: rotate(720deg);
    opacity: 0;
  }
`;

// Styled component for the background container
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -4; /* Ensure the background is behind all content */
`;

// Styled component for the SVG loader
const Loader = styled.svg`
  position: absolute;
  top: 0%;
  left: 30%;
  transform: translate(-50%, -50%);
  max-width: 130rem;
  width: 100%;
  height: auto;
  stroke-linecap: round;
  opacity: 0.5;
`;

// Styled component for the circles in the loader
const Circle = styled.circle`
  fill: none;
  stroke-width: 0.1;
  animation: ${preloader} 4s infinite;
  transform-origin: 170px 170px;
  will-change: transform, opacity;

  &:nth-of-type(1) {
    stroke-dasharray: 550px;
    animation-delay: -0.15s;
  }

  &:nth-of-type(2) {
    stroke-dasharray: 500px;
    animation-delay: -0.3s;
  }

  &:nth-of-type(3) {
    stroke-dasharray: 450px;
    animation-delay: -0.45s;
  }

  &:nth-of-type(4) {
    stroke-dasharray: 300px;
    animation-delay: -0.6s;
  }
`;

// React component
const TechBg = () => {
  return (
    <Background>
      <Loader
        className="loader"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 340 340"
      >
        <Circle cx="170" cy="170" r="160" stroke="#d0d6f9" />
        <Circle cx="170" cy="170" r="135" stroke="#393939" />
        <Circle cx="170" cy="170" r="110" stroke="#d0d6f9" />
        <Circle cx="170" cy="170" r="85" stroke="#727272" />
      </Loader>
    </Background>
  );
};

export default TechBg;
