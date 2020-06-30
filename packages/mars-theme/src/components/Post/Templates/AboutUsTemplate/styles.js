import { styled, css } from 'frontity';
import Slider from './AboutUsSlider';

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

export const AwardsGalleryItem = styled.div`
  display: block;
`;

export const AwardsGlobalContainer = styled.div`
  display: block;
`;

export const AwardsContainer = styled.div`
  margin-bottom: 40px;
  margin-left: -6px;
  margin-right: -6px;
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
    width: 50%;
  }
`;
export const AwardsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  flex-wrap: wrap;
  height: 462px;
  width: 100%;
  padding: 6px;
  @media screen and (max-width: 991px) {
    height: 351px;
  }
  @media screen and (max-width: 767px) {
    height: 575px;
  }
  & ${AwardsImageContainer}:nth-child(2n) {
    background: #FFFFFF;
  }
  & ${AwardsImageContainer}:nth-child(1) {
    height: 150px;
    @media screen and (max-width: 991px) {
      height: 113px;
    }
    @media screen and (max-width: 767px) {
      height: 93px;
    }
  }
  & ${AwardsImageContainer}:nth-child(2) {
    height: 150px;
    @media screen and (max-width: 991px) {
      height: 113px;
    }
    @media screen and (max-width: 767px) {
      height: 93px;
    }
  }
  & ${AwardsImageContainer}:nth-child(3) {
    height: 150px;
    @media screen and (max-width: 991px) {
      height: 113px;
    }
    @media screen and (max-width: 767px) {
      height: 93px;
    }
  }
  & ${AwardsImageContainer}:nth-child(4) {
    height: 210px;
    @media screen and (max-width: 991px) {
      height: 159px;
    }
    @media screen and (max-width: 767px) {
      height: 132px;
    }
  }
  & ${AwardsImageContainer}:nth-child(5) {
    height: 240px;
    @media screen and (max-width: 991px) {
      height: 180px;
    }
    @media screen and (max-width: 767px) {
      height: 150px;
    }
  }
  & ${AwardsImageContainer}:nth-child(6) {
    height: 240px;
    background: #F2F2F2;
    @media screen and (max-width: 991px) {
      height: 180px;
    }
    @media screen and (max-width: 767px) {
      height: 150px;
    }
  }
  & ${AwardsImageContainer}:nth-child(7) {
    height: 210px;
    background: #FFFFFF;
    @media screen and (max-width: 991px) {
      height: 159px;
    }
    @media screen and (max-width: 767px) {
      height: 132px;
    }
  }
  & ${AwardsImageContainer}:nth-child(8) {
    height: 150px;
    @media screen and (max-width: 991px) {
      height: 113px;
    }
    @media screen and (max-width: 767px) {
      height: 93px;
    }
  }
  & ${AwardsImageContainer}:nth-child(9) {
    height: 150px;
    @media screen and (max-width: 991px) {
      height: 113px;
    }
    @media screen and (max-width: 767px) {
      height: 93px;
    }
  }
  & ${AwardsImageContainer}:nth-child(10) {
    height: 150px;
    @media screen and (max-width: 991px) {
      height: 113px;
    }
    @media screen and (max-width: 767px) {
      height: 93px;
    }
  }
`;
export const AwardsImage = styled.img`
  display: block;

  @media screen and (max-width: 991px) {
    max-width: 150px;
    max-height: 136px;
  }
  @media screen and (max-width: 767px) {
    max-width: 125px;
    max-height: 113px;
  }
`;

export const TestimonialsGlobalContainer = styled.div`
  display: block;

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
  flex-direction: column;
  background: #F2F2F2;
  padding-top: 33px;
  padding-bottom: 32px;
`;
export const TestimonialsLogo = styled.img`
  display: block;
  height: 47px;
  width: auto;
  @media screen and (max-width: 991px) {
    height: 36px;
  }
  @media screen and (max-width: 767px) {
    height: 19px;
  }
`;
export const TestimonialsPhoto = styled.img`
  display: block;
  height: 228px;
  margin-top: 37px;
  @media screen and (max-width: 991px) {
    height: 170px;
    margin-top: 26px;
  }
  @media screen and (max-width: 767px) {
    height: 118px;
    margin-top: 14px;
  }
`;
export const TestimonialsRight = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  flex-wrap: wrap;
  padding-top: 100px;
  padding-left: 87px;
  padding-right: 87px;
  padding-bottom: 41px;
  background: linear-gradient(271.48deg, #3FA54A 3.6%, #216628 97.69%);
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
  @media screen and (max-width: 991px) {
    padding-top: 100px;
    padding-left: 65px;
    padding-right: 65px;
    padding-bottom: 30px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 34px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 0px;
  }
`;
export const TestimonialsRightContainer = styled.div`
  display: block;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const TestimonialsSignature = styled.div`
  display: block;
  margin-top: 55px;
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  font-weight: 700;
  text-align: right;
  @media screen and (max-width: 991px) {
    margin-top: 50px;
    font-size: 16px;
    line-height: 22px;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 14px;
    margin-top: 40px;
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
export const TestimonialsContainer = styled.div`
  display: block;
  margin-top: 30px;
  & ${TestimonialsItem}:nth-child(2n){
    flex-direction: row-reverse;
    & ${TestimonialsRight}{
      background: linear-gradient(271.47deg, #FFB03A 3.6%, #FF9233 97.69%);
    }
  }

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const TestimonialsTextContent = styled.div`
  display: block;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: #fff;
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 19px;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 14px;
  }
`;
export const TestimonialsTextStart = styled.div`
  display: block;
  position: absolute;
  right: calc(100% + 10px);
  bottom: 100%;
  font-size: 96px;
  line-height: 131px;
  letter-spacing: 0.02em;
  color: #D9D9D9;
  opacity: 0.8;
  height: 50px;

  @media screen and (max-width: 767px) {
    font-size: 48px;
    line-height: 65px;
    left: -8px;
    right: auto;
    bottom: calc(100% - 18px);
  }
`;
export const TestimonialsTextEnd = styled.div`
  display: block;
  position: absolute;
  left: 100%;
  top: 100%;
  font-size: 96px;
  line-height: 131px;
  letter-spacing: 0.02em;
  color: #D9D9D9;
  opacity: 0.8;
  transform: rotate(-180deg);
  height: 50px;

  @media screen and (max-width: 767px) {
    font-size: 48px;
    line-height: 65px;
    right: 0px;
    left: auto;
    top: calc(100% - 18px);
  }
`;
export const TestimonialsText = styled.div`
  display: block;
  position: relative;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const GalleryGlobalContainer = styled.div`
  display: block;
  position: relative;
  margin-bottom: 90px;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const GalleryItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  align-items: stretch;
  flex-direction: column;
  position: relative;
  height: 1840px;
  @media screen and (max-width: 991px) {
    height: 1228px;
  }

  @media screen and (max-width: 767px) {
    height: 522px
  }
`;
export const GalleryImageContainer = styled.div`
  display: block;
  position: relative;
  width: calc(50% - 6px);
  margin-bottom: 10px;
  overflow: hidden;
  height: 600px;
  @media screen and (max-width: 991px) {
    width: calc(50% - 4px);
    height: 400px;
    margin-bottom: 7px;
  }
  @media screen and (max-width: 767px) {
    width: calc(50% - 2.5px);
    margin-bottom: 5px;
    height: 166px;
  }
  &:after{
    content:' ';
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: linear-gradient(0deg, rgba(6, 6, 6, 0.5), rgba(6, 6, 6, 0.5)), url(girls-smiling-park-sunset_1153-171.jpg);
  }
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const GalleryImage = styled.img`
  display: block;
  position: relative;
  width: 100%;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const GalleryContainer = styled.div`
  display: block;
  position: relative;
  margin-top: 40px;
  & ${GalleryImageContainer}:nth-child(2n){
    height: 300px;
    @media screen and (max-width: 991px) {
      height: 200px;
    }
    @media screen and (max-width: 767px) {
      height: 85px;
    }
  }
  & ${GalleryImageContainer}:nth-child(n+4){
    height: 300px;
    margin-left: 6px;
    @media screen and (max-width: 991px) {
      margin-left: 4px;
      height: 200px;
    }
    @media screen and (max-width: 767px) {
      margin-left: 2.5px;
      height: 85px;
    }
  }
  & ${GalleryImageContainer}:nth-child(2n+4){
    height: 600px;
    margin-left: 6px;
    @media screen and (max-width: 991px) {
      margin-left: 4px;
      height: 400px;
    }
    @media screen and (max-width: 767px) {
      margin-left: 2.5px;
      height: 166px;
    }
  }
  & ${GalleryImageContainer}:nth-child(4){
    height: 300px;
    margin-left: 0px;
    @media screen and (max-width: 991px) {
      margin-left: 0px;
      height: 200px;
    }
    @media screen and (max-width: 767px) {
      margin-left: 0px;
      height: 85px;
    }
  }

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;

export const AboutUsSlider = styled(Slider)``;