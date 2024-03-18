import styled, { keyframes } from 'styled-components';

const drop = keyframes`
  0% {
    top: -50%;
  }
  100% {
    top: 110%;
  }
`;

const LinesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  margin: auto;
  width: 90vw;
  z-index: -5;
  opacity: 0.4;
`;

const Line = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  left: 50%;
  overflow: hidden;

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      #d0d6f9 75%,
      #d0d6f9 100%
    );
    animation: ${drop} 7s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }

  &:nth-child(1) {
    margin-left: -50%;
    &::after {
      animation-delay: 2s;
    }
  }

  &:nth-child(3) {
    margin-left: 45%;
    &::after {
      animation-delay: 2.5s;
    }
  }
`;

// React Component
const CrewBg = () => {
  return (
    <>
      <LinesContainer>
        <Line />
        <Line />
        <Line />
      </LinesContainer>
    </>
  );
};

export default CrewBg;
