import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  background: #fff;
  width: 1000px;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 32px;
    padding: 32px;

    .avatar {
      background-color: #0db14b;
      margin-bottom: 16px;
    }

    .form-button {
      margin-top: 16px;
    }

    .links {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 16px;

      a {
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 400px) {
      padding: 12px;
    }
  }
`;

export const Header = styled.header`
  background: #fff;
  height: 120px;
  padding: 10px;

  img {
    height: 100px;
  }
`;

export const Background = styled.main`
  width: 100%;

  .title {
    z-index: 1;
    position: absolute;
    padding: 0 32px;
    top: 30%;

    h1 {
      color: #fff;
      font-weight: bold;
      font-size: 56px;

      span {
        color: #0db14b;
      }
    }
  }

  @media (max-width: 800px) {
    display: none;
  }
`;

export const VideoBg = styled.video`
  position: relative;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #f2f2f2;
`;
