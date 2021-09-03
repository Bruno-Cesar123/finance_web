import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #f2f2f2;
`;

export const Content = styled.main`
  max-width: 1000px;
  margin: 24px auto;
  padding: 16px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 8px;
  border-bottom: 1px solid #555;

  h2 {
    font-size: 36px;
    color: #555;
  }

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    transition: all 0.2s;
    color: #555;

    &:hover {
      opacity: 0.8;
    }

    svg {
      margin-right: 8px;
    }
  }

  @media (max-width: 400px) {
    h2 {
      font-size: 28px;
    }
  }
`;

export const InfoValues = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 24px;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionGrid = styled.section`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4 {
      font-size: 28px;
      color: #555;
    }
  }

  .entrance {
    svg {
      color: #0db14b;
      font-size: 28px;
    }
  }

  .spend {
    svg {
      color: #9f0000;
      font-size: 28px;
    }
  }

  p {
    margin-top: 32px;
    font-size: 24px;
  }
`;

export const ContentChart = styled.section`
  display: grid;
  grid-template-columns: 1fr;

  margin-top: 24px;
`;

export const ContentTable = styled.section`
  margin-top: 24px;
`;
