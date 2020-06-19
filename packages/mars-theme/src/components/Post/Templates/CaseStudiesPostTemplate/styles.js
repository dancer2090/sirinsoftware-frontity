import { styled } from 'frontity';
import SvgSprite from '../StandartTemplate/SvgSprite';
import PostItem from './Post';
import CardCase from './CardCase';
import CaseTitle from './CaseTitle';
import CaseBussines from './BusinesCard';

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
`;

export const FrameContent = styled.div`
  padding-top: 48px;
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`;

export const BackLink = styled.a`
  margin-bottom: 92px;
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
`;

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  width: 100%;
`;

export const ClientBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
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
`;

export const ClientTitle = styled.span`
  display: block;
  text-align: center;
  line-height: 36px;
  text-transform: uppercase;
  color: #222222;
  margin-bottom: 14px;
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
`;

export const ClientFrame = styled.img`
  height: 100px;
  width: auto;
  object-fit: contain;
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
`;

export const PostsContent = styled.div`
  width: 300px;
  text-align: left;
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
`;

export const Post = styled(PostItem)`
  text-align: left;
`;

export const CardSet = styled(CardCase)`
  margin-bottom: 66px;
  text-align: left;
`;

export const Title = styled(CaseTitle)`
  margin-bottom: 40px;
  text-align: left;
`;

export const Text = styled.div`
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 24px;
  color: #222222;
  margin-bottom: 49px;
  text-align: left;
`;

export const BusinesCard = styled(CaseBussines)`
  margin-bottom: 80px;
  text-align: left;
`;