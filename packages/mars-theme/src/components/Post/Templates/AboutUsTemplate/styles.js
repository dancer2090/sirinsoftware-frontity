import { styled, css } from 'frontity';
import CaseItem from '../ServicesTemplate/CaseItem';

export const GlobalContainer = styled.div`
  display: block;
  width: 100%;
`;

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

export const AwardsGlobalContainer = styled.div`
  display: block;
`;

export const AwardsContainer = styled.div`
  display: flex;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin-right: -10px;
  }
`;
export const AwardsImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F2F2F2;
  width: 25%;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin-right: -10px;
  }
`;
export const AwardsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  flex-wrap: wrap;
  height: 450px;
  width: 100%;
  & ${AwardsImageContainer}:nth-child(2n) {
    background: #FFFFFF;
  }
  & ${AwardsImageContainer}:nth-child(1) {
    height: 150px;
  }
  & ${AwardsImageContainer}:nth-child(2) {
    height: 150px;
  }
  & ${AwardsImageContainer}:nth-child(3) {
    height: 150px;
  }
  & ${AwardsImageContainer}:nth-child(4) {
    height: 210px;
  }
  & ${AwardsImageContainer}:nth-child(5) {
    height: 240px;
  }
  & ${AwardsImageContainer}:nth-child(6) {
    height: 240px;
    background: #F2F2F2;
  }
  & ${AwardsImageContainer}:nth-child(7) {
    height: 210px;
    background: #FFFFFF;
  }
  & ${AwardsImageContainer}:nth-child(8) {
    height: 150px;
  }
  & ${AwardsImageContainer}:nth-child(9) {
    height: 150px;
  }
  & ${AwardsImageContainer}:nth-child(10) {
    height: 150px;
  }


  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
    margin-right: -10px;
  }
`;
export const AwardsImage = styled.img`
  display: block;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;

export const TestimonialsGlobalContainer = styled.div`
  display: block;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const TestimonialsItem = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: stretch;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const TestimonialsLeft = styled.div`
  display: flex;
  width: 38%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #F2F2F2;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const TestimonialsLogo = styled.img`
  display: block;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const TestimonialsPhoto = styled.img`
  display: block;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const TestimonialsRight = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const TestimonialsRightContainer = styled.div`
  display: block;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const TestimonialsText = styled.div`
  display: block;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const TestimonialsSignature = styled.div`
  display: block;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const TestimonialsContainer = styled.div`
  display: block;
  margin-top: 30px;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
