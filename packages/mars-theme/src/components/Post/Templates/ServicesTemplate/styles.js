import { styled } from 'frontity';
import ItemList from './ServicesItem';
import Slider from './CaseSlider';

export const Wrapper = styled.div`
  display: block;
  width: 100%;

  * {
    box-sizing: border-box;
  }
`;

export const BigFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 500px;
  margin-bottom: 100px;

  @media screen and (max-width: 1200px) {
    height: 400px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 991px) {
    height: 350px;
    margin-bottom: 75px;
  }

  @media screen and (max-width: 767px) {
    height: fit-content;
    margin-bottom: 31px;
  }
`;

export const BigFrameImage = styled.img`
  height: 100%;
  width: 50%;
  object-fit: cover;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 250px;
  }
`;

export const BigFrameContent = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(271.13deg, #FFB03A 3.6%, #FF9233 97.69%);
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
  padding: 10px 43px;
  display: flex;
  align-items: center;
  
  div {
    max-width: 420px;
    width: 100%;
    font-family: 'Open Sans';
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
  }

  @media screen and (max-width: 991px) {
    padding: 10px 20px;

    div {
      font-size: 14px;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 36px 10px;
    min-height: 250px;
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    max-width: 728px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;

export const ServicesList = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 100px;
`;

export const ServicesItem = styled(ItemList)`
  margin-bottom: 49px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (max-width: 991px) {
    margin-bottom: 41px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 36px;
  }
`;

export const CaseContainer = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 121px;
`;

export const CaseTitle = styled.h2`
  text-align: center;
  position: relative;
  font-family: 'Montserrat';
  font-weight: bold;
  font-size: 48px;
  line-height: 59px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #222222;
  margin-top: 0;
  margin-bottom: 70px;
  padding: 38px 0;

  span {
    position: relative;
    z-index: 2;
  }
  
  &:before {
    content: attr(data-text);
    position: absolute;
    left: 50%;
    top: 50%;
    white-space: nowrap;
    transform: translate(-50%, -50%);
    font-family: 'Montserrat';
    font-weight: 800;
    font-size: 110px;
    line-height: 134px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #F3F3F3;
    z-index: 1;
  }

  @media screen and (max-width: 991px) {
    font-size: 36px;
    line-height: 44px;
    padding: 30px 0;
    margin-bottom: 61px;

    &:before {
      font-size: 86px;
      line-height: 105px;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 29px;
    padding: 10px 0;
    margin-bottom: 24px;

    &:before {
      font-size: 40px;
      line-height: 49px;
    }
  }
`;

export const CaseSlider = styled(Slider)``;

export const CaseItem = styled.div`
  min-height: 470px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: 
    linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
    url(${props => props.src});
  background-size: cover;
  padding-top: 30px;

  &:nth-child(even) {
    margin-top: 43px;
  }

  @media screen and (max-width: 992px) {
    padding-top: 18px;
    min-height: 354px;

    &:nth-child(even) {
      margin-top: 40px;
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 16px;
    min-height: 300px;

    &:nth-child(even) {
      margin-top: 0;
    }
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

export const CaseLink = styled.a`
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