import { styled } from 'frontity';
import Slider from './AboutUsSlider';
import Breadcrumbs from '../../../Breadcrumbs';
import factsBg from '../../../../img/facts-bg.svg';
import valuesBg from '../../../../img/values.png';

export const Crumbs = styled(Breadcrumbs)`
  @media screen and (max-width: 767px) {
    max-width: calc(100% - 20px);
    margin-left: auto;
    margin-right: auto;
  }
`;

export const GlobalContainer = styled.div`
  display: block;
  width: 100%;
  padding-bottom: 30px;
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
export const AwardsImage = styled.img`
  display: block;

  @media screen and (max-width: 991px) {
    max-width: 150px;
    max-height: 136px;
  }
  @media screen and (max-width: 767px) {
    max-width: 75px;
    max-height: 75px;
  }
`;
export const AwardsItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
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
  & ${AwardsImageContainer}:nth-of-type(2n) {
    background: #FFFFFF;
  }
  & ${AwardsImageContainer}:nth-of-type(1) {
    height: 150px;
    @media screen and (max-width: 991px) {
      height: 113px;
    }
    @media screen and (max-width: 767px) {
      height: 93px;
      z-index: 10;
    }
  }
  & ${AwardsImageContainer}:nth-of-type(2) {
    height: 150px;
    @media screen and (max-width: 991px) {
      height: 113px;
    }
    @media screen and (max-width: 767px) {
      height: 93px;
      z-index: 9;
    }
  }
  & ${AwardsImageContainer}:nth-of-type(3) {
    height: 150px;
    @media screen and (max-width: 991px) {
      height: 113px;
    }
    @media screen and (max-width: 767px) {
      height: 93px;
      z-index: 8;
    }
  }
  & ${AwardsImageContainer}:nth-of-type(4) {
    height: 210px;
    @media screen and (max-width: 991px) {
      height: 159px;
    }
    @media screen and (max-width: 767px) {
      height: 132px;
      z-index: 7;
    }
    & ${AwardsImage}{
      @media screen and (max-width: 767px) {
        max-width: 90px;
        max-height: 90px;
      }
    }
  }
  & ${AwardsImageContainer}:nth-of-type(5) {
    height: 240px;
    @media screen and (max-width: 991px) {
      height: 180px;
    }
    @media screen and (max-width: 767px) {
      height: 150px;
      z-index: 6;
    }
    & ${AwardsImage}{
      @media screen and (max-width: 767px) {
        max-width: 90px;
        max-height: 90px;
      }
    }
  }
  & ${AwardsImageContainer}:nth-of-type(6) {
    height: 240px;
    background: #F2F2F2;
    @media screen and (max-width: 991px) {
      height: 180px;
    }
    @media screen and (max-width: 767px) {
      height: 150px;
      z-index: 5;
    }
    & ${AwardsImage}{
      @media screen and (max-width: 767px) {
        max-width: 90px;
        max-height: 90px;
      }
    }
  }
  & ${AwardsImageContainer}:nth-of-type(7) {
    height: 210px;
    background: #FFFFFF;
    @media screen and (max-width: 991px) {
      height: 159px;
    }
    @media screen and (max-width: 767px) {
      height: 132px;
      z-index: 4;
    }
    & ${AwardsImage}{
      @media screen and (max-width: 767px) {
        max-width: 100px;
        max-height: 100px;
      }
    }
  }
  & ${AwardsImageContainer}:nth-of-type(8) {
    height: 150px;
    @media screen and (max-width: 991px) {
      height: 113px;
    }
    @media screen and (max-width: 767px) {
      height: 93px;
      z-index: 3;
    }
  }
  & ${AwardsImageContainer}:nth-of-type(9) {
    height: 150px;
    @media screen and (max-width: 991px) {
      height: 113px;
    }
    @media screen and (max-width: 767px) {
      height: 93px;
      z-index: 2;
    }
  }
  & ${AwardsImageContainer}:nth-of-type(10) {
    height: 150px;
    @media screen and (max-width: 991px) {
      height: 113px;
    }
    @media screen and (max-width: 767px) {
      height: 93px;
      z-index: 1;
    }
  }
`;
export const OurTeam = styled.div`
  margin-top: 130px;
  & ${Container}{
    padding-bottom: 0px;
  }
  @media screen and (max-width: 767px) {
    margin-top: 40px;
  }
`;
export const OurTeamContainer = styled.div`
  max-width: 677px;
  margin: 0 auto;
  margin-top: 30px;
`;
export const OurTeamText = styled.div`
  margin-top: 50px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #216628;
  text-align: center;
  max-width: 430px;
  a{
    color: #FF8D23;
  }
  &:first-of-type{
    margin-top: 0px;
  }
  &:nth-of-type(2n){
    margin-right: 0px;
    margin-left: auto;
  }
  &:first-of-type:last-of-type{
    margin: 0 auto;
  }
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const AwardsText = styled.div`
  max-width: 500px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #216628;
  margin: 0 auto;
  margin-top: 10px;
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const AwardsSubText = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const TestimonialsGlobalContainer = styled.div`
  display: block;
  margin-top: 90px;
  & ${AwardsSubText} {
    max-width: 527px;
    margin: 0 auto;
    margin-top: 50px;
  }
  & ${Container}{
    @media screen and (max-width: 767px) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
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
  @media screen and (max-width: 767px) {
    padding-left: 10px;
    padding-right: 10px;
  }
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
    width: 100%;
    height: auto;
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
  & a{
    vertical-align: middle;
    display: inline-block;
    margin-left: 10px;
  }
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
  & ${TestimonialsItem}:nth-of-type(2n){
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
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-repeat: no-repeat;
  
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    background: linear-gradient(0deg, rgba(6, 6, 6, 0.5), rgba(6, 6, 6, 0.5)), url(girls-smiling-park-sunset_1153-171.jpg);
    transition: all .3s;
  }
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    &:after {
      opacity: 0;
    }
  }
  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const GalleryImage = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

  @media screen and (max-width: 767px) {
    margin-right: 0px;
  }
`;
export const GalleryContainer = styled.div`
  display: block;
  position: relative;
  margin-top: 40px;
  & ${GalleryImageContainer}:nth-of-type(2n){
    height: 300px;
    @media screen and (max-width: 991px) {
      height: 200px;
    }
    @media screen and (max-width: 767px) {
      height: 85px;
    }
  }
  & ${GalleryImageContainer}:nth-of-type(n+4){
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
  & ${GalleryImageContainer}:nth-of-type(2n+4){
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
  & ${GalleryImageContainer}:nth-of-type(4){
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
export const Facts = styled.div`
  margin-top: 60px;
  background: url(${factsBg}) no-repeat 100% 30px;
  ${Container}{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 30px;
    max-width: 620px;
  }
`;
export const FactIcon = styled.img`
  display: block;
`;
export const FactText = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const Fact = styled.div`
  &:nth-child(1){
    width: 258px;
    height: 208px;
    background: linear-gradient(100.65deg, #216628 -44.21%, #3FA54A 93.56%);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    & img{
      margin-bottom: 10px;
    }
    & ${FactText} {
      max-width: 166px;
      margin: 0 auto;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
  &:nth-child(2){
    width: 315px;
    height: 120px;
    background: #F2F2F2;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 22px;
    & ${FactText} {
      max-width: 135px;
      color: #F8710F;
      margin-left: 15px;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
  &:nth-child(3){
    width: 275px;
    height: 134px;
    margin-left: 15px;
    background: #F2F2F2;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: row-reverse;
    margin-top: 51px;
    & ${FactText} {
      color: #216628;
      margin-right: 10px;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      margin-left: 0px;
      margin-top: 20px;
    }
  }
  &:nth-child(4){
    width: 216px;
    height: 205px;
    background: linear-gradient(96.16deg, #F8710F 3.43%, #FFB03A 97.65%);
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    color: #fff;
    margin-right: 50px;
    & ${FactText} {
      max-width: 130px;
      margin-top: 19px;
    }
    @media screen and (max-width: 500px) {
      width: 100%;
      margin-left: 0px;
      margin-right: 0px;
      margin-top: 20px;
    }
  }
`;

export const ValueTitle = styled.div`
  margin-top: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const ValueIcon = styled.img`
  display: block;
`;
export const Value = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #F2F2F2;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  color: #216628;
  padding: 25px;
  width: 100%;
  &:nth-child(2n) {
    background: linear-gradient(120.98deg, #F8710F 2.63%, #FFB03A 96.67%);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
    color: #fff;
  }
  &:nth-child(1) {
    max-width: 307px;
    position: relative;
    z-index: 4;
  }
  &:nth-child(2) {
    max-width: 318px;
    margin-top: 15px;
    margin-left: -5px;
    position: relative;
    z-index: 5;
    @media(max-width: 1000px){
      margin-left: 0px;
      margin-top: 20px;
      max-width: 320px;
    }
  }
  &:nth-child(3) {
    max-width: 232px;
    margin-left: -12px;
    position: relative;
    z-index: 6;
    @media(max-width: 1000px){
      margin-left: 0px;
      margin-top: 20px;
      max-width: 320px;
    }
  }
  &:nth-child(4) {
    max-width: 311px;
    margin-top: 15px;
    margin-left: 15px;
    position: relative;
    z-index: 2;
    @media(max-width: 1000px){
      margin-left: 0px;
      margin-top: 20px;
      max-width: 320px;
    }
  }
  &:nth-child(5) {
    max-width: 297px;
    margin-top: 34px;
    margin-left: -20px;
    position: relative;
    z-index: 1;
    @media(max-width: 1000px){
      margin-left: 0px;
      margin-top: 20px;
      max-width: 320px;
    }
  }
  &:nth-child(6) {
    max-width: 318px;
    margin-top: -14px;
    margin-left: -30px;
    position: relative;
    z-index: 3;
    @media(max-width: 1000px){
      margin-top: 20px;
      margin-left: 0px;
      max-width: 320px;
    }
    ${ValueTitle} {
      max-width: 255px;
      margin: 0 auto;
      margin-top: 10px;
    }
  }
`;
export const Values = styled.div`
  background: url(${valuesBg}) no-repeat 100% 0px;
  margin-top: 20px;
  ${Container}{
    max-width: 908px;
    flex-wrap: wrap;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    @media(max-width: 1000px){
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
`;
export const Wrapper = styled.div`
  padding: 57px 0 17px 0;
  
  @media screen and (max-width: 991px) {
    max-width: 100%;
    padding: 69px 20px 17px 20px;
  }

  @media screen and (max-width: 767px) {
    padding: 29px 10px 17px 10px;
  }
  
  .row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 60px;
    
    @media screen and (max-width: 767px) {
      margin: 0 -10px;
    }
  }
`;
export const ContactsContainer = styled.div`

`;
export const ChoseText = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
  & a{
    color: #FF8D23;
  }
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const BeforeFormHeader = styled.div`
  margin-top: 78px;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;
  text-transform: uppercase;
  color: #216628;
  @media screen and (max-width: 991px) {
    font-size: 21px;
    line-height: 28px;
  }
`;
export const BeforeFormText = styled.div`
  max-width: 475px;
  margin: 0 auto;
  margin-top: 28px;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const AboutUsSlider = styled(Slider)``;
