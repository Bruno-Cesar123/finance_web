import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const Content = styled.div`
  background: #fff;
  width: 1000px;
`;

export const Header = styled.header`
  background: #fff;
  height: 120px;
  padding: 10px;

  img {
    height: 100px;
  }
`;
export const VideoBg = styled.video`
  position: relative;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: red;
`;

export const Background = styled.main`
  background: red;
  width: 100%;

  div {
    z-index: 1;
    position: absolute;
    padding: 0 32px;
    top: 30%;

    h1 {
      color: #fff;
      font-weight: bold;
      font-size: 56px;
    }
  }
`;
