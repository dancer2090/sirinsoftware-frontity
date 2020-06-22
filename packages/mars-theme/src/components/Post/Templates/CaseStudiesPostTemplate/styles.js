import { styled } from 'frontity';
import SvgSprite from '../StandartTemplate/SvgSprite';
import PostItem from './Post';
import CardCase from './CardCase';
import CaseTitle from './CaseTitle';
import CaseBussines from './BusinesCard';
import Slider from '../ServicesTemplate/CaseSlider';
import Case from '../ServicesTemplate/ServicesItem';

export const Wrapper = styled.div`
  width: 100%;
`;

export const ContainerFrame = styled.div`
  height: 400px;
  background: 
    linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
    url(${({src}) => src})
  ;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  border-radius: 0px;
  margin-bottom: 100px;

  @media screen and (max-width: 991px) {
    height: 350px;
  }

  @media screen and (max-width: 767px) {
    height: 250px;
    margin-bottom: 40px;
  }
`;

export const FrameContent = styled.div`
  padding-top: 48px;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    max-width: 726px;
    padding-top: 0;
    justify-content: center;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;

export const BackLink = styled.a`
  margin-bottom: 92px;

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const BackIcon = styled(SvgSprite)`
  fill: white;
  width: 8px;
  height: 8px;
`;

export const FrameTitle = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  text-transform: uppercase;
  color: #FFFFFF;
  max-width: 780px;
  margin: 0;

  @media screen and (max-width: 991px) {
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    text-transform: uppercase;
    color: #FFFFFF;
    max-width: 630px;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 24px;
    text-align: center;
  }
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  width: 100%;

  @media screen and (max-width: 991px) {
    max-width: 726px;
  }
`;

export const ClientBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;

  @media screen and (max-width: 991px) {
    margin-bottom: 81px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
    padding: 0 10px;
  }
`;

export const ClientItem = styled.div`
  width: calc(100% / 3);
  min-height: 200px;
  background: #F2F2F2;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 43px;
  transition: all .3s;

  &:hover {
    background: #FFFFFF;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 991px) {
    min-height: 151px;
    padding: 10px 38px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    flex-direction: row;
    min-height: 60px;
    padding: 10px 20px 10px 20px;
    box-shadow: none;

    &:nth-child(2) {
      background-color: white;
    }
  }
`;

export const ClientTitle = styled.span`
  display: block;
  text-align: center;
  font-size: 18px;
  line-height: 36px;
  text-transform: uppercase;
  color: #222222;
  margin-bottom: 14px;

  @media screen and (max-width: 991px) {
    margin-bottom: 4px;
  }

  @media screen and (max-width: 767px) {
    width: 50%;
    text-align: left;
    font-size: 14px;
    line-height: 18px;
    padding-right: 25px;
    margin: 0;
  }
`;

export const ClientDescription = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 26px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #F8710F;
  flex-grow: 2;
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 991px) {
    font-size: 22px;
    line-height: 24px;
  }

  @media screen and (max-width: 767px) {
    width: 50%;
    font-size: 14px;
    line-height: 14px;
    text-align: left;
  }
`;

export const ClientFrame = styled.img`
  height: 100px;
  width: auto;
  object-fit: contain;

  @media screen and (max-width: 991px) {
    height: 80px;
  }

  @media screen and (max-width: 767px) {
    height: 40px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 111px;
`;

export const Content = styled.div`
  flex-grow: 2;
  max-width: 600px;
  margin-right: 60px;
  text-align: center;

  img {
    margin-bottom: 51px;
  }

  @media screen and (max-width: 991px) {
    max-width: 500px;
    margin-right: 26px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    margin-right: 0;
    margin-bottom: 38px;

    img {
      margin-bottom: 40px;
    }
  }
`;

export const PostsContent = styled.div`
  width: 300px;
  text-align: left;

  @media screen and (max-width: 991px) {
    width: 200px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0 10px;
    margin-bottom: 81px;
  }
`;

export const PostTitle = styled.span`
  display: block;
  text-align: center;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 18px;
  text-align: left;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    max-width: 200px;
    margin: 0 auto 37px auto;
  }
`;

export const Post = styled(PostItem)`
  text-align: left;
`;

export const CardSet = styled(CardCase)`
  margin-bottom: 66px;
  text-align: left;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
  }
`;

export const Title = styled(CaseTitle)`
  margin-bottom: 40px;
  text-align: left;

  @media screen and (max-width: 991px) {
    margin-bottom: 21px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 17px;
  }
`;

export const Text = styled.div`
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 24px;
  color: #222222;
  margin-bottom: 49px;
  text-align: left;

  @media screen and (max-width: 767px) {
    padding: 0 6px 0 20px;
    font-size: 12px;
    line-height: 17px;
    margin-bottom: 34px;
  }
`;

export const BusinesCard = styled(CaseBussines)`
  margin-bottom: 80px;
  text-align: left;
`;

export const CaseStudiesSlider = styled(Slider)`
  margin-bottom: 100px;
`;

export const CaseItem = styled(Case)`

`;