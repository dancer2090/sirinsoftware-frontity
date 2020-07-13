import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    max-width: 728px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
  }

  * {
    box-sizing: border-box;
  }
`;


export const Banner = styled.div`
  width: 100%;
  min-height: 400px;
  background: ${({ src }) => (
    src
    ? `url(${src});`
    : 'linear-gradient(272.07deg,#3FA44A 3.6%,#216628 97.69%);'
  )};
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  position: relative;

  &:before {
    content: ' ';
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    background: linear-gradient(0deg,rgba(0,0,0,0.75),rgba(0,0,0,0.75)),url(22957.jpg);
    box-shadow: 0px 4px 15px rgba(0,0,0,0.15);
    z-index: 1;
  }

  @media screen and (max-width: 991px) {
    min-height: 300px;
  }

  @media screen and (max-width: 767px) {
    min-height: 250px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-size: 45px;
  line-height: 48px;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 991px) {
    font-size: 35px;
    line-height: 38px;
  }

  @media screen and (max-width: 767px) {
    font-size: 30px;
    line-height: 35px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin-bottom: 50px;

  @media screen and  (max-width: 767px) {
    margin-bottom: 26px;
  }
`;

export const Content = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #222222;

  p {
    margin-bottom: 15px;
    font-family: 'Open Sans', sans-serif;
  }

  h2 {
    font-weight: 800;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #216628;
    margin-top: 29px;
    margin-bottom: 14px;
  }

  h3 {
    font-size: 20px;
    line-height: 32px;
  }

  h4 {
    font-size: 16px;
    line-height: 28px;
  }

  a {
    color: #3a6c2c;
    text-decoration: underline;
    transition: all .3s ease-in-out;

    &:hover {
      color: #25461c;
    }
  }

  @media screen and  (max-width: 767px) {
    line-height: 22px;
    font-size: 12px;

    h2 {
      margin-top: 19px;
      margin-bottom: 23px;
      font-size: 18px;
      line-height: 18px;
    }

    h3 {
      font-size: 14px;
      line-height: 18px;
    }

    h4 {
      font-size: 10px;
      line-height: 14px;
    }
  }
`;