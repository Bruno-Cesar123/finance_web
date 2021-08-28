import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  width: 100%;
  padding: 16px;

  -webkit-box-shadow: 0px 1px 1px #fff;
  -moz-box-shadow: 0px 1px 1px #fff;
  box-shadow: 0px 1px 1px #fff;
`;

export const ContentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 60px;
  }
`;

export const Menu = styled.div`
  /* top: 20px;
  right: 30px; */
`;

export const Profile = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentMenu = styled.div`
  position: absolute;
  top: 100px;
  right: 10px;
  padding: 10px 20px;
  background: #fff;
  width: 200px;
  box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  transition: 0.5s;

  &::before {
    content: '';
    position: absolute;
    top: -5px;
    right: 28px;
    width: 20px;
    height: 20px;
    background: #fff;
    transform: rotate(45deg);
  }

  h3 {
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 20px 0;
    font-weight: 500;
    font-size: 18px;
    color: #555;
    line-height: 1.2em;
  }

  span {
    font-size: 14px;
    color: #cecece;
    font-weight: 400;
  }

  ul {
    li {
      list-style: none;
      padding: 10px 0;
      border-top: 1px solid rgba(0, 0, 0, 0.05);
      display: flex;
      align-items: center;

      &:hover svg {
        opacity: 1;
      }

      &:hover a {
        color: #0db14b;
      }

      svg {
        max-width: 20px;
        margin-right: 10px;
        opacity: 0.5;
        transition: 0.5s;
      }

      a {
        display: inline-block;
        text-decoration: none;
        color: #555;
        font-weight: 500;
        transition: 0.5s;
      }
    }
  }
`;
