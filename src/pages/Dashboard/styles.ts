import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background: #f2f2f2;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 24px auto;
  padding: 16px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const SectionGrid = styled.div`
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

export const ContentChart = styled.div`
  max-width: 1000px;
  margin: 24px auto;
  padding: 16px;

  display: grid;
  grid-template-columns: 1fr;
`;
