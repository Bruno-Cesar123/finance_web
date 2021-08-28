import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const Content = styled.div`
  max-width: 1000px;
  margin: 24px auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

export const SectionGrid = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-size: 32px;
      color: #555;
    }

    svg {
      color: #0db14b;
      font-size: 32px;
    }
  }

  p {
    margin-top: 32px;
    font-size: 32px;
    font-weight: 500;
  }
`;

export const ContentChart = styled.div`
  max-width: 1000px;
  margin: 24px auto;

  display: grid;
  grid-template-columns: 1fr;
`;
