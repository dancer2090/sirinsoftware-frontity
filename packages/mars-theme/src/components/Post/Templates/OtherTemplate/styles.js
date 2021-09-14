import { styled } from 'frontity';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  font-family: 'Belleza', sans-serif;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    max-width: 728px;
  }

  @media screen and (max-width: 767px){
    max-width: 100%;
    padding: 0 10px;
  }
`;

export const PostTitle = styled.h2`
  margin: 0;
  font-weight: bold;
  font-size: 44px;
  line-height: 50px;
  color: black;

  @media screen and (max-width: 991px) {
    margin-bottom: 80px;
    font-size: 36px;
    line-height: 40px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 30px;
    font-size: 24px;
    line-height: 30px;
  }
`;


export const Content = styled.div`
  margin-bottom: 50px;
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
    
  img {
    margin: 0 auto;
    position: relative !important;
    height: auto !important;
    max-width: 100%;
  }
  
  p span {
    height: auto !important;
    padding: 0 !important;
    display: flex;
    justify-content: center;
  }
  
  li span {
    height: auto !important;
    padding: 0 !important;
    display: flex;
  }

  @media screen and  (max-width: 767px) {
    line-height: 22px;
    font-size: 12px;
    margin-bottom: 26px;

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

export const NotContent = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 20px 0;
`;
