import { styled } from 'frontity';
import MainFrameBlock from '../../../MainFrameBlock';
import Breadcrumbs from '../../../Breadcrumbs';

export const Banner = styled(MainFrameBlock)`
  margin-bottom: 20px;
`;

export const Crumbs = styled(Breadcrumbs)``;

export const Wrapper = styled.div`
  padding: 0;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 40px;

  @media screen and (max-width: 991px) {
    max-width: 728px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 0 10px;
  }

  * {
    box-sizing: border-box;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin-bottom: 80px;

  @media screen and  (max-width: 767px) {
    margin-bottom: 50px;
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
  
  img {
    margin: 0 auto;
    position: relative !important;
    height: auto !important;
    max-width: 100%;
  }
  
  p span {
    
  }
  
  li span {

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
