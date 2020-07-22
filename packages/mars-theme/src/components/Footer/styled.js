import { styled } from 'frontity';
import Sprite from '../Post/Templates/StandartTemplate/SvgSprite';
import LinkComponent from '../link';

export const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

  width: 100%;
  background: #404040;
  padding: 34px 0 39px 0;
  box-sizing: border-box;
  margin-top: 100px;

  * {
    box-sizing: border-box;
  }

  @media screen and (max-width: 991px) {
    padding: 26px 10px 39px 21px;
    margin-top: 50px;
  }

  @media screen and (max-width: 576px) {
    padding: 22px 40px 51px 40px;
  }
`;

export const Container = styled.div`
  max-width: 860px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    max-width: 100%;
  }
  
  .info {
    margin-right: 50px;

    @media screen and (max-width: 991px) {
      margin-right: 0;
    }
  
    @media screen and (max-width: 576px) {
      margin: 0 auto 23px auto;
    }
  }
`;


export const Header = styled.div`
  display: flex;
  margin-bottom: 25px;

  @media screen and (max-width: 991px) {
    flex-wrap: wrap;
  }

  @media screen and (max-width: 576px) {
    margin-bottom: 0;
  }
`;

export const Navigation = styled.div`
  max-width: 396px;
  width: 100%;
  margin-right: 113px;

  @media screen and (max-width: 991px) {
    max-width: 416px;
    margin-right: 104px;
  }

  @media screen and (max-width: 576px) {
    display: flex;
    margin-right: 0;
    margin-bottom: 27px;
  }
`;

export const NavigationLine = styled.div`
  display: flex;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    width: fit-content;
    &:first-child {
      flex-grow: 2;
    }
  }
`;

export const Link = styled(LinkComponent)`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #FFFFFF;
  display: inline-block;
  margin-bottom: 21px;
  transition: all .3s;

  &:hover {
    color: #c3c3c3;
  }

  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 23px;
  }
`;

export const LinkItem = styled.div`
  width: calc(100% / 4);
  
  &:nth-child(4) {
    text-align: center;
  }

  @media screen and (max-width: 576px) {
    width: 100%;

    &:nth-child(4) {
      text-align: left;
    }

    &:last-child {
      a {
        margin-bottom: 0;
      }
    }
  }
`;

export const InfoTitle = styled.div`
  display: none;

  @media screen and (max-width: 576px) {
    display: block;
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    line-height: 30px;
    text-transform: uppercase;
    color: #FFFFFF;
  }
`;

export const InfoItem = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 40px;
  color: #FFFFFF;

  a {
    text-transform: initial;
    margin-bottom: 0;
  }

  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 40px;
  }

  @media screen and (max-width: 576px) {
    text-align: center;
    line-height: 30px;
  }
`;

export const InfoLabel = styled.label`
  margin-right: 5px;

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 991px) {
    width: 100%; 
    justify-content: center;
    margin-top: 16px;
  }

  @media screen and (max-width: 576px) {
    margin-top: 0;
    margin-bottom: 27px;
  }
`;

export const SocialLink = styled.a`
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 576px) {
    margin-right: 20px;
  }
`;

export const Icon = styled(Sprite)`
  fill: white;
  width: 30px;
  height: 30px;
  transition: all .3s;

  &:hover {
    fill: #c3c3c3;
  }
`;

export const Private = styled.div`
  text-align: center;
  font-family: 'Open Sans';
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #C4C4C4;

  .mobile {
    display: none;
  }

  a {
    text-transform: initial;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: #C4C4C4;
    margin-bottom: 0;

    &:hover {
      color: #c3c3c3;
    }
  }

  @media screen and (max-width: 576px) {
    br {
      &:not(.mobile) {
        display: none;
      }
      &.mobile {
        display: block;
      }
    }
  }
`;
