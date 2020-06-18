import { styled, css } from 'frontity';
import CaseItem from '../ServicesTemplate/CaseItem';

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 47px 0 101px 0;

  @media screen and (max-width: 991px) {
    max-width: 728px;
    padding: 30px 0 100px 0;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 30px 10px 80px 10px;
  }

  * {
    box-sizing: border-box;
  }
`;

export const HeaderFilter = styled.div`
  display: flex;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin-right: -10px;
  }
`;


export const CaseWrapper = styled.div`
  width: 100%;
  position: relative;

  &:after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const ItemBlock = styled(CaseItem)`
  width: calc(50% - 10px);
  height: 470px;
  float: left;
  margin-right: 20px;
 
  &:nth-child(even) {
    margin-right: 0;
    margin-top: 40px;
  }

  &:nth-child(even) + * {
    position: relative;
    top: -10px;
  }

  &:nth-child(even) + * + * {
    margin-top: 30px;
  }

  ${({ textBlock }) => (
    textBlock
    ? 'padding-top: 0;'
    : null
  )}

  @media screen and (max-width: 991px) {
    height: 354px;

    &:nth-child(even) + * {
      position: relative;
      top: -20px;
    }

    &:nth-child(even) + * + * {
      margin-top: 20px !important;
    }
  }

  @media screen and (max-width: 767px) {
    height: 300px;
    width: 100%;
    top: 0 !important;
    margin-top: 0 !important;
    margin-bottom: 20px;

    &:nth-child(even) + * + * {
      margin-top: 0 !important;
    }
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;
  flex-grow: 2;
  padding: 16px 50px 10px 58px;

  @media screen and (max-width: 991px) {
    padding: 16px 18px 10px 18px;
  }
`;

export const ItemLabel = styled.span`
  font-weight: bold;
  font-size: 22px;
  line-height: 44px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  margin-bottom: 37px;
  display: block;

  @media screen and (max-width: 991px) {
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 25px;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 18px;
    margin-bottom: 15px;
  }
`;

export const ItemTitle = styled.h4`
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
  color: #FFFFFF;
  margin-top: 0;
  margin-bottom: 21px;

  @media screen and (max-width: 991px) {
    font-size: 26px;
    line-height: 30px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 767px) {
    font-size: 22px;
    line-height: 25px;
  }
`;

export const ItemDescription = styled.p`
  font-family: 'Open Sans';
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  margin: 0;

  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 18px;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 15px;
  }
`;

export const LastItem = styled.div`
  height: 470px;
  float: left;
  width: calc(50% - 10px);
  background: #F2F2F2;
  padding: 20px 56px 79px 56px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 991px) {
    height: 354px;
    padding: 30px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 300px;
    padding: 15px 26px 22px 26px;
  }
`;

export const LastItemFrame = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 30px;

  @media screen and (max-width: 991px) {
    width: 180px;
    height: 180px;
    margin-bottom: 11px;
  }

  @media screen and (max-width: 767px) {
    width: 152px;
    height: 152px;
    margin-bottom: 10px;
  }
`;

export const LastItemTitle = styled.span`
  font-weight: bold;
  font-size: 30px;
  line-height: 30px;
  color: #8E8E8E;
  display: flex;
  text-align: center;
  margin-bottom: 15px;

  @media screen and (max-width: 991px) {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 15px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 13px;
  }
`;

export const LastItemDescription = styled.p`
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #8E8E8E;
  text-align: center;
  margin: 0;
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  height: 50px;
  
  ${({ active = false }) => (
    active
    ? css`
      background: linear-gradient(274.14deg, #3FA54A 3.6%, #216628 97.69%);
      box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
      color: white;
      pointer-events: none;`
    : css`background: #F2F2F2; 
    color: #222222;` 
  )}
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  cursor: pointer;
  margin-right: 10px;
  transition: all .3s;
  
  br {
    display: none;
  }

  &:last-child {
    margin-right: 0;

    br {
      display: block;
    }
  }

  &:hover {
    background-color: #dcdcdc;
  }

  @media screen and (max-width: 991px) {
    ${({ active = false }) => (
      active
      ? css`text-align: center;`
      : css`text-align: center;` 
    )}
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
    padding: 0 25px;

    &:first-child {
      flex-grow: 2;
    }

    &:nth-child(2) {
      flex-grow: 2;
    }

    &:nth-child(3) {
      flex-grow: 2;
    }

    &:last-child {
      flex-grow: 2;
    }

    br {
      display: block;
    }
  }
`;