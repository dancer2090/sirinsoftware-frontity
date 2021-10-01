import { styled } from 'frontity';
import Link from '../../../../link';
import BigTitle from '../../../../BigTitle';

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
    padding-left: 10px;
    padding-right: 10px;
  }

  * {
    box-sizing: border-box;
  }
`;
export const ServicesTitle = styled(BigTitle)`
  @media screen and (max-width: 767px) {
    height: 59px;

    div {
      font-size: 48px;
      line-height: 59px;
    }

    h2 {
      font-size: 24px;
      line-height: 29px;
    }
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
  width: 100%;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 0px;
  padding: 35px;
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  z-index: 3;
  transition: all 0.5s ease;
  backface-visibility: hidden;
  @media (max-width: 991px) {
    height: 354px;
    padding: 20px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 250px;
  }
  &:before{
    content:' ';
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
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
  @media (max-width: 767px) {
    font-size: 24px;
    line-height: 24px;
  }
`;
export const ServicesList = styled.div`
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
  & ${ServicesItem}:nth-of-type(2n) {
    align-items: flex-start;
    justify-content: flex-start;
  }
  & ${ServicesItem}:nth-of-type(2n) ${ServicesItemTitle} {
    text-align: left;
  }
`;

export const ServicesBack = styled.div`
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all 0.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(270.99deg, #3FA54A 3.6%, #216628 97.69%);
  padding-top: 30px;
  padding-left: 40px;
  padding-right: 40px;
  color: #ffffff;
`;
export const ServicesWrapper = styled.div`
  width: calc(50% - 10px);
  max-width: 100%;
  height: 470px;
  position: relative;
  margin-top: 20px;
  @media (max-width: 991px) {
    height: 354px;
    padding: 20px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 250px;
  }
  &:hover{
    & ${ServicesBack}{
      transform: rotateY(0deg);
      @media screen and (max-width: 767px) {
        transform: rotateY(180deg);
      }
    }
    & ${ServicesItem}{
      transform: rotateY(180deg);
      @media screen and (max-width: 767px) {
        transform: rotateY(0deg);
      }
    }
  }
`;
export const ServicesBackTitle = styled(Link)`
  font-weight: 700;
  font-size: 48px;
  line-height: 56px;
  text-align: right;
  text-transform: uppercase;
  color: #FFFFFF;
  transition: all 0.3s ease-in-out;
  &:hover{
    color: #FFB03A;
  }
`;
export const ServicesBackText = styled.div`
  margin-top: 20px;
  font-size: 16px;
  line-height: 24px;
`;
export const ServicesLink = styled(Link)`
  background: linear-gradient(270.99deg, #FFB03A 3.6%, #FF9233 97.69%);
  height: 46px;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
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
  &:hover:after{
    opacity: 0.05;
  }
`;
