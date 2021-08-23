import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  height: 120px;
  padding: 10px;

  img {
    height: 100px;
  }
`;

export const Content = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 600px;

    margin-top: 24px;
    padding: 32px;

    .avatar {
      background-color: #0db14b;
      margin-bottom: 16px;
    }

    .form-button {
      margin-top: 16px;
    }

    .links {
      margin-top: 16px;

      a {
        display: flex;
        align-items: center;
        color: #1e90ff;
        text-decoration: none;
        transition: all 0.2s;

        svg {
          margin-right: 8px;
          color: #1e90ff;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;
