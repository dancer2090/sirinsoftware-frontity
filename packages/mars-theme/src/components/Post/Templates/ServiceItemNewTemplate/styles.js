import { styled } from 'frontity';
import MainFrameBlock from '../../../MainFrameBlock';
import Breadcrumbs from '../../../Breadcrumbs';
import Link from '../../../link';

export const Banner = styled(MainFrameBlock)`
  margin-bottom: 20px;
`;

export const BannerIndustry = styled(Banner)`
  margin-bottom: 20px;
  & h1{
    max-width: 776px;
    font-size: 36px;
    line-height: 36px;
    @media (max-width: 776px){
      font-size: 28px;
    }
  }
`;

export const Crumbs = styled(Breadcrumbs)``;

export const Wrapper = styled.div`
  padding: 0;
  width: 100%;
  margin-bottom: 80px;
`;

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 40px;

  @media screen and (max-width: 991px) {
    max-width: 728px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 0 10px;
  }

  * {
    box-sizing: border-box;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  flex: 1;
  @media (max-width: 720px){
    margin-bottom: 0px;
  }
`;
export const CasesContainer = styled.div`
  display: block;
  width: 300px;
  margin-left: 60px;
  padding-top: 100px;
  @media (max-width: 720px){
    padding-top: 40px;
    margin-left: 0px;
    width: 100%;
  }
`;
export const ServicesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 15px;
  @media (max-width: 720px){
    flex-direction: column;
    padding-top: 0px;
  }
`;

export const Content = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: #222222;

  p {
    margin-bottom: 15px;
    font-family: 'Open Sans', sans-serif;
  }

  h2 {
    font-weight: 800;
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #216628;
    margin-top: 29px;
    margin-bottom: 14px;
  }

  h3 {
    font-size: 20px;
    line-height: 32px;
  }

  h4 {
    font-size: 16px;
    line-height: 28px;
  }

  a {
    color: #3a6c2c;
    text-decoration: underline;
    transition: all .3s ease-in-out;

    &:hover {
      color: #25461c;
    }
  }
  
  img {
    margin: 0 auto;
    position: relative !important;
    height: auto !important;
    max-width: 100%;
  }
  
  p span {
    
  }
  
  li span {

  }

  @media screen and  (max-width: 767px) {
    line-height: 22px;
    font-size: 12px;

    h2 {
      margin-top: 19px;
      margin-bottom: 23px;
      font-size: 18px;
      line-height: 18px;
    }

    h3 {
      font-size: 14px;
      line-height: 18px;
    }

    h4 {
      font-size: 10px;
      line-height: 14px;
    }
  }
`;

export const GreenText = styled.div`
  display: block;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #216628;
  & a{
    color: #FF8D23;
    &:hover{
      color: #c75e11;
      text-decoration: none;
    }
  }
  & p{
    margin-bottom: 20px;
    &:last-child{
      margin-bottom: 0px;
    }
  }
`;
export const BlocksWrapper = styled.div`
  display: block;
`;
export const CasesWrapper = styled.div`
  display: block;
  margin-top: 18px;
  margin-bottom: 50px;
`;
export const CaseTitle = styled.div`
  display: block;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  color: #222222;
  margin-top: 16px;
  @media screen and  (max-width: 767px) {
    text-align: center;
    margin-top: 0px;
  }
`;
export const CaseContainer = styled.div`
  display: block;
`;
export const CaseContent = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  padding-left: 26px;
  padding-right: 26px;
  color: #FFFFFF;
  position: absolute;
  bottom: 53px;
`;
export const CaseItem = styled.div`
  display: block;
  height: 300px;
  position: relative;
  background: url(${({bg}) => bg}) 50% 50% / auto 100%;
  margin-top: 14px;
  &:before{
    content: ' ';
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }
`;
export const CaseItemTitle = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  text-align: center;
  color: #FFFFFF;
  padding-top: 16px;
  position: relative;
  z-index: 10;
`;
export const CaseLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(270.99deg, #FFB03A 3.6%, #FF9233 97.69%);
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
  position: absolute;
  height: 30px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 12px;
  line-height: 22px;
  color: #FFFFFF;
  &:after{
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
    opacity: .05;
  }
`;