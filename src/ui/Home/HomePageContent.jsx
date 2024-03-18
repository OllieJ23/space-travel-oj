import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50rem;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }

  @media (max-width: 400px) {
    max-width: 30rem;
  }
`;

const HomeH5 = styled.h5`
  color: var(--pale-blue);

  @media (max-width: 400px) {
    font-size: 1.6rem;
  }
`;

const HomeText = styled(motion.p)`
  letter-spacing: 1px;
  color: var(--pale-blue);
  font-size: 2.2rem;

  @media (max-width: 400px) {
    font-size: 1.6rem;
  }
`;
const AnimatedText = styled(motion.span)`
  display: inline-block;
`;

const AnimatedHeading = styled(motion.h1)`
  overflow: hidden;
  @media (max-width: 400px) {
    font-size: 6rem;
  }
`;

function HomePageContent() {
  const text = 'SO, YOU WANT TO TRAVEL TO ...';
  return (
    <Container>
      <HomeH5>
        {text.split('').map((char, index) => (
          <AnimatedText
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: index * 0.08 }}
          >
            {char === ' ' ? '\u00A0' : char}{' '}
          </AnimatedText>
        ))}
      </HomeH5>
      <AnimatedHeading
        initial={{ opacity: 0, scale: 1.2, filter: 'blur(25px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0)' }}
        transition={{ duration: 0.5, delay: 2.5 }}
      >
        SPACE
      </AnimatedHeading>
      <HomeText
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 3 }}
      >
        Let’s face it, if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </HomeText>
    </Container>
  );
}

export default HomePageContent;
