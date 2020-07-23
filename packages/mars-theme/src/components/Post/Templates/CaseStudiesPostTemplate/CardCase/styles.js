import { styled } from 'frontity';
import SvgSprite from '../../StandartTemplate/SvgSprite';

const styledLiTag = `
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 26px;
  color: #FFFFFF;
  position: relative;
  padding-left: 18px;
  margin-bottom: 4px;

  &:before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #FF8D23;
    position: absolute;
    left: 0;
    top: 10px;
    margin-right: 10px;
  }

  @media screen and (max-width: 991px) {
    line-height: 18px;

    &:before {
      top: 6px;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 17px;
    padding-left: 15px;

    &:before {
      display: none;
    }
  }
`;

export const Card = styled.div`
  background: #216628;
  padding: 42px 40px 36px 40px;
  position: relative;

  @media screen and (max-width: 991px) {
    padding: 38px 36px 38px 40px;
  }

  @media screen and (max-width: 767px) {
    min-height: 270px;
    padding: 19px 7px 28px 21px;
  }

  b {
    color: white;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      ${styledLiTag}
    }
  }
  
  p {
    margin-top: 0;
    font-family: 'Open Sans';
    font-size: 14px;
    line-height: 26px;
    
    @media screen and (max-width: 991px) {
      line-height: 18px;
    }
  
    @media screen and (max-width: 767px) {
      font-size: 12px;
      line-height: 17px;
    }
  }
  
  ol {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      ${styledLiTag}
    }
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 26px;
  font-weight: 800;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
  
  @media screen and (max-width: 991px) {
    font-size: 36px;
    margin-bottom: 21px;
  }

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 25px;
    margin-bottom: 16px;
  }
`;

export const Content = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  ${styledLiTag}
`;

export const Icon = styled(SvgSprite)`
  width: 120px;
  height: 120px;
  fill: white;
  position: absolute;
  top: 30px;
  right: 18px;
  opacity: 0.1;

  @media screen and (max-width: 991px) {
    width: 100px;
    height: 100px;
    right: 31px;
    top: 26px;
  }

  @media screen and (max-width: 767px) {
    width: 70px;
    height: 70px;
    top: 10px;
    right: 20px;
  }
`;
