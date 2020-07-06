import { styled } from 'frontity';

export const Title = styled.h1`
  margin: 0;
  font-weight: bold;
  font-size: 44px;
  line-height: 50px;
  padding-bottom: 30px;
  padding-top: 20px;

  @media screen and (max-width: 991px) {
    font-size: 36px;
    line-height: 40px;
  }

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const Container = styled.div`
  padding: 41px 0 115px 0;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    max-width: 740px;
    padding: 35px 0 100px 0;
  }

  @media screen and (max-width: 767px) {
    padding: 28px 0 28px;
  }
`;

export const PageContent = styled.div`
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

  @media screen and  (max-width: 767px) {
      line-height: 22px;
      font-size: 12px;
      margin-bottom: 26px;
      padding-left: 15px;
      padding-right: 15px;

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
