import { styled, css } from 'frontity';
import Slider from './MainSlider';
import Button from '../../../Button';
import Link from '../../../link';

export const GlobalContainer = styled.div`
  display: block;
  width: 100%;
`;

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 0px;

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
export const MainBlock = styled.div`
  display: block;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 72px;
  padding-bottom: 116px;
  position: relative;
  overflow: hidden;
  @media (max-width: 991px) {
    padding-top: 65px;
    padding-bottom: 65px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 0px;
    padding-bottom: 187px;
  }
  &:before{
    content: ' ';
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(22957.jpg);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
    z-index: 1;
  }
`;
export const MainBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 5;
`;
export const MainBlockLeft = styled.div`
  display: block;
  padding-top: 109px;
  @media (max-width: 991px) {
    padding-top: 70px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 147px;
    width: 100%;
    z-index: 5;
  }
`;
export const MainBlockTitle = styled.h1`
  display: block;
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  text-transform: uppercase;
  color: #FFFFFF;
  width: 550px;
  @media (max-width: 991px) {
    font-size: 48px;
    line-height: 48px;
    width: 430px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
export const MainBlockButton = styled(Button)`
  display: block;
  margin-top: 31px;
  padding-left: 35px;
  padding-right: 35px;
  background: linear-gradient(275.56deg, #3FA54A 3.6%, #216628 97.69%);
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
  width: 260px;
  height: 46px;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #FFFFFF;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
    margin-top: 30px;
  }
`;
export const MainBlockRight = styled.div`
  display: block;
  @media screen and (max-width: 767px) {
    position: absolute;
    left: 0px;
    right: 0px;
    z-index: 0;
  }
`;
export const MainBlockIcon = styled.img`
  display: block;
  @media (max-width: 991px) {
    height: 411px;
  }
  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
`;
export const ServicesGlobalContainer = styled.div`
  display: block;
  padding-top: 80px;
  @media (max-width: 991px) {
    padding-top: 70px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 38px;
  }
`;
export const ServicesItem = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: calc(50% - 10px);
  height: 470px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 20px;
  padding: 35px;
  position: relative;
  @media (max-width: 991px) {
    height: 354px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 250px;
  }
  &:before{
    content:' ';
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(900.jpg);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    z-index: 1;
  }
`;
export const ServicesItemTitle = styled.div`
  display: block;
  font-size: 48px;
  line-height: 56px;
  color: #FFFFFF;
  font-weight: 700;
  text-align: right;
  text-transform: uppercase;
  z-index: 5;
  @media (max-width: 991px) {
    font-size: 36px;
    line-height: 40px;
  }
`;
export const ServicesList = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    margin-top: 10px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 0px;
  }
  & ${ServicesItem}:nth-child(2n) {
    align-items: flex-start;
    justify-content: flex-start;
  }
  & ${ServicesItem}:nth-child(2n) ${ServicesItemTitle} {
    text-align: left;
  }
`;
export const PartnerShip = styled.div`
  display: block;
  margin-top: 156px;
  padding-top: 72px;
  background: linear-gradient(272.06deg, #40A74A 0%, #216628 100%);
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
  @media (max-width: 991px) {
    margin-top: 100px;
    padding-top: 35px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 80px;
    padding-top: 20px;
  }
`;
export const PartnerShipContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 50px;
  @media (max-width: 991px) {
    padding-top: 30px;
  }
  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
export const PartnerShipLeftTitle = styled.div`
  display: block;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #FFFFFF;
  text-align: center;
  font-weight: 700;
  @media (max-width: 991px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 18px;
  }
`;
export const PartnerShipRightTitle = styled.div`
  display: block;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: #FFFFFF;
  text-align: center;
  font-weight: 700;
  @media (max-width: 991px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 18px;
    @media screen and (max-width: 767px) {
      margin-top: 35px;
    }
  }
`;
export const BoxTitle = styled.div`
  display: block;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #222222;
  @media (max-width: 991px) {
    font-size: 18px;
    line-height: 30px;
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 22px;
  }
`;
export const BoxText = styled.div`
  display: block;
  font-size: 14px;
  line-height: 18px;
  margin-top: 6px;
  text-align: center;
  color: #222222;
  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 14px;
    margin-top: 0px;
  }
`;
export const Box = styled.div`
  display: block;
  margin-top: 50px;
  background: #FFB03A;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 150px;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  @media (max-width: 991px) {
    width: 250px;
    height: 120px;
  }
  @media screen and (max-width: 767px) {
    width: 220px;
    height: 80px;
    margin: 0 auto;
    margin-top: 20px;
  }
`;
export const PartnerShipLeft = styled.div`
  display: block;
  width: 50%;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  & ${Box}:nth-child(3){
    background: #FB9B2B;
    margin-left: 136px;
    @media screen and (max-width: 767px) {
      margin-left: auto;
    }
  }
  & ${Box}:nth-child(4){
    background: #FF8D23;
  }
`;
export const PartnerShipRight = styled.div`
  display: block;
  position: relative;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const PartnerShipRightContainer = styled.div`
  display: block;
  position: relative;
  margin-top: 55px;
  height: 615px;
  width: 458px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 991px) {
    width: 344px;
    height: 410px;
  }
  @media screen and (max-width: 767px) {
    margin: 0 auto;
    margin-top: 20px;
    width: 284px;
    height: 295px;
  }
`;
export const GreenTitle = styled.div`
  display: block;
  position: absolute;
  left: 255px;
  top: 300px;
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
  @media (max-width: 991px) {
    width: 113px;
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (max-width: 767px) {
    left: 155px;
    top: 174px;
    font-size: 14px;
    line-height: 24px;
  }
`;
export const OrangeTitle = styled.div`
  display: block;
  position: absolute;
  left: 114px;
  top: 220px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #222222;
  width: 170px;
  @media (max-width: 991px) {
    width: 117px;
    font-size: 18px;
    line-height: 22px;
  }
  @media screen and (max-width: 767px) {
    left: 72px;
    top: 130px;
    font-size: 14px;
    line-height: 24px;
  }
`;
export const TText = styled.div`
  display: block;
  position: absolute;
  left: 0px;
  bottom: 47px;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
  @media (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 16px;
    bottom: 37px;
  }
`;
export const CaseStudiesGlobalContainer = styled.div`
  display: block;
  padding-top: 97px;
  padding-bottom: 120px;
  @media screen and (max-width: 767px) {
    padding-top: 44px;
    padding-bottom: 24px;
  }
`;
export const CaseItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding-top: 30px;
  position: relative;
  transition: all .3s;
  height: calc(100% - 46px);

  ${({ src }) => (
    src
    ? css`background: 
      linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
      url(${src});`
    : css`background: linear-gradient(270.99deg, #3FA54A 3.6%, #216628 97.69%);`
  )}
  background-size: cover;

  @media screen and (max-width: 992px) {
    padding-top: 18px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 16px;
  }
`;

export const CaseItemTitle = styled.span`
  display: block;
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 22px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  flex-grow: 2;

  @media screen and (max-width: 992px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

export const CaseContent = styled.p`
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 30px;
  text-align: left;
  line-height: 30px;
  color: #FFFFFF;
  padding: 0 90px 0 41px;
  margin-bottom: 36px;

  @media screen and (max-width: 992px) {
    font-size: 24px;
    line-height: 26px;
    padding: 0 70px 0 18px;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 17px;
    padding: 0 54px 0 20px;
  }
`;

export const CaseStudiesList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  @media screen and (max-width: 767px) {
    margin-top: 24px;
  }
`;
export const ClientsGlobalContainer = styled.div`
  display: block;
  background: #F2F2F2;
  padding-top: 61px;
  padding-bottom: 146px;
  @media (max-width: 991px) {
    padding-top: 40px;
    padding-bottom: 70px;
  }
`;
export const ClientContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 95px;
`;
export const Client = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
`;

export const ClientsGallery = styled(Slider)`
  display: block;
  margin-top: 10px;
  height: 95px;
  @media (max-width: 991px) {
    margin-top: 22px;
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

export const ItemBlock = styled.div`
  width: calc(50% - 10px);
  height: 470px;
  margin-right: 20px;
  position: relative;
  perspective: 10000;   

  & > div {
    backface-visibility: hidden;
    transition: all 0.5s ease;
  }
 
  & > div:first-child {
    z-index: 3;
  }

  & > div:last-child {
    transform: rotateY(180deg);
  }

  &:hover {
    div:first-child {
      transform: rotateY(180deg);    
    }

    div:first-child + div {
      transform: rotateY(0deg);    
    }
  }

  &:nth-child(even) {
    margin-right: 0;
    margin-top: 40px;
    @media (max-width:991px){
      margin-top: 0px;
    }
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
      top: 0px;
      margin-top: 20px;
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
    margin-right: 0px;

    &:nth-child(even) + * + * {
      margin-top: 0 !important;
    }
  }
`;

export const ItemWrapper = styled.div`
  width: 100%;
  flex-grow: 2;
  padding: 16px 50px 10px 58px;
  background: linear-gradient(270.99deg, #3FA54A 3.6%, #216628 97.69%);
  transform: rotateY(180deg);    
  position: absolute;
  height: calc(100% - 46px);
  top: 0;
  left: 0;
  width: 100%;
  transition: all .3s;

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
export const CaseLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46px;
  background: linear-gradient(279.98deg, #FFB03A 3.6%, #FF9233 97.69%);
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #FFFFFF;
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  position: relative;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    opacity: 0;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    transition: all .3s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    &:after {
      opacity: .05;
    }
  }
`;