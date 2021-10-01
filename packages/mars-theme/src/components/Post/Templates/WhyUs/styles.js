import { styled, css } from 'frontity';
import whyBg from '../../../../img/why-bg.svg';

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    max-width: 728px;
  }

  @media screen and (max-width: 767px){
    max-width: 100%;
    padding: 0 10px;
  }
`;

export const MainTitle = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 48px;
  line-height: 48px;
  text-transform: uppercase;
  color: #FFFFFF;
  position: relative;
  ${({ bg }) => bg ? css`background: url(${bg}) no-repeat 50% 50% / 100% auto` : ''}
  &:before{
    content: ' ';
    position: absolute;
    left: 0px;
    top: 0px;
    bottom: 0px;
    right: 0px;
    background: rgba(0,0,0,0.75);
    z-index: 1;
  }
  @media(max-width: 1000px){
    ${({ bg }) => bg ? css`background: url(${bg}) no-repeat 50% 50% / auto 100%` : ''}
  }
  @media screen and (max-width: 769px){
    font-size: 32px;
    line-height: 32px;
  }
  @media screen and (max-width: 320px) {
    font-size: 21px;
    line-height: 24px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
export const BigContainer = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;
export const MainTitleContainer = styled.div`
  max-width: 745px;
  z-index: 2;
  text-align: center;
`;
export const MainText = styled.div`
  background: url(${whyBg}) no-repeat 0px 0px / auto 100%;
  padding-top: 130px;
  padding-bottom: 40px;
  padding-left: 200px;
  @media screen and (max-width: 769px){
    padding-left: 0px;
    padding-top: 80px;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
export const MainTextContainer = styled.div`
  max-width: 460px;
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media screen and (max-width: 769px){
    margin: 0 auto;
  }
  & a{
    color: #F8710F;
    font-weight: 600;
  }
`;

export const TeamImage = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right;
`;
export const Team = styled.div`
  margin-top: 55px;
  max-width: 1090px;
`;
export const TeamContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  @media(max-width: 1000px){
    flex-direction: column;
  }
`;
export const TeamImageContainer = styled.div`
  max-width: 570px;
  width: 100%;
  @media(max-width: 500px){
    max-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
export const TeamTextContainer = styled.div`
  padding-top: 18px;
  padding-bottom: 30px;
  padding-left: 30px;
  padding-right: 30px;
  @media(max-width: 500px){
    padding-left: 10px;
    padding-right: 10px;
  }
`;
export const TeamTitle = styled.div`
  max-width: 370px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #216628;
`;
export const TeamSubTitle = styled.div`
  max-width: 370px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #216628;
  margin-top: 12px;
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
export const TeamText = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #222222;
  margin-top: 63px;
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media(max-width: 500px){
    margin-top: 30px;
  }
`;

export const Advantages = styled.div`
  margin-top: 108px;
  @media(max-width: 500px){
    margin-top: 40px;
  }
`;
export const AdvantagesText = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #216628;
  max-width: 430px;
  margin: 0 auto;
  margin-left: 0px;
  margin-top: 30px;
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
  & a{
    color: #FF8D23;
  }
`;
export const AdvantagesTextContainer = styled.div`
  margin: 0 auto;
  max-width: 705px;
  @media(max-width: 500px){
    text-align: center;
  }
  & ${AdvantagesText}:nth-child(2n) {
    margin: 0 auto;
    margin-right: 0px;
    margin-top: 50px;
    @media(max-width: 500px){
      margin-top: 30px;
    }
  }
`;
export const AdvantagesItems = styled.div``;
export const AdvantagesItem = styled.div`
  margin-top: 110px;
  text-align: center;
  @media(max-width: 500px){
    margin-top: 60px;
  }
`;
export const AdvantagesIcon = styled.img`
  display: inline-block;
`;
export const AdvantagesTitle = styled.div`
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #216628;
  margin-top: 20px;
  @media screen and (max-width: 991px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const AdvantagesSubTitle = styled.div`
  max-width: 550px;
  margin: 0 auto;
  margin-top: 30px;
`;
export const AdvantagesTextFinal = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  font-size: 16px;
  line-height: 24px;
  max-width: 490px;
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
  & a{
    color: #FF8D23;
  }
`;

export const BlockWIPhoto = styled.img`
  display: block;
  max-width: 485px;
  @media screen and (max-width: 769px){
    max-width: 100%;
  }
`;
export const BlockWIText = styled.div`
  display: block;
  padding-left: 24px;
  padding-top: 70px;
  @media(max-width: 1000px){
    max-width: 485px;
    padding-top: 0px;
    padding-left: 0px;
    text-align: justify;
  }
`;
export const BlockWI = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: -30px;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  @media(max-width: 1000px){
    margin:0px;
    margin-top: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const FooterBlock = styled.div`
  ${({ bg }) => bg ? css`background: url(${bg}) no-repeat 50% 50% / 100% auto` : ''}
  padding-top: 70px;
  padding-bottom: 50px;
  position: relative;
  margin-top: 100px;
  margin-bottom: 60px;
  &:before{
    content: ' ';
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(image.png);
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 0;
  }
  @media(max-width: 1000px){
    ${({ bg }) => bg ? css`background: url(${bg}) no-repeat 50% 50% / auto 100%` : ''}
  }
`;
export const FooterBlockText = styled.div`
  margin: 0 auto;
  max-width: 430px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #FFFFFF;
  position: relative;
  z-index: 2;
  @media screen and (max-width: 991px) {
    font-size: 14px;
    line-height: 20px;
  }
  @media(max-width: 500px){
    padding-left: 10px;
    padding-right: 10px;
  }
  & a{
    color: #F8710F;
  }
`;
