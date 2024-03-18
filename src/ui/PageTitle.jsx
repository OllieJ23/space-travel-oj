import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  @media (max-width: 400px) {
    gap: 2rem;
  }
`;

const PageTitleText = styled.h5`
  font-weight: 300;
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

const PageNumber = styled.h5`
  font-weight: bold;
  color: #616161;
  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

function PageTitle({ number, children }) {
  return (
    <Container>
      <PageNumber>{number}</PageNumber>
      <PageTitleText>{children}</PageTitleText>
    </Container>
  );
}

export default PageTitle;
