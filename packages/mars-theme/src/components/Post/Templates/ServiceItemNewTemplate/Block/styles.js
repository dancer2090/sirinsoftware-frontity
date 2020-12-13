import { styled } from 'frontity';
import Image from "../../../../image";

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-right: 12px;
  position: relative;
  @media (max-width: 720px){
    flex-direction: column-reverse;
    padding-right: 0px;
  }
`;
export const Title = styled.div`
  display: block;
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-left: ${({marginLeft}) => marginLeft}px;
  margin-right: ${({marginRight}) => marginRight}px;
  color: #FFFFFF;
  @media (max-width: 720px){
    margin-left: 0px;
    margin-right: 0px;
    font-size: 21px;
    line-height: 1.4;
    margin-top: 20px;
    text-align: center;
  }
`;
export const Icon = styled(Image)`
  display: block;
  max-width: 100%;
  margin-left: ${({marginLeft}) => marginLeft}px;
  margin-right: ${({marginRight}) => marginRight}px;
  @media (max-width: 720px){
    margin-left: 0px;
    margin-right: 0px;
  }
`;
export const ContentImage = styled(Image)`
  display: block;
  max-width: 100%;
  height: auto;
`;
export const Content = styled.div`
  display: block;
  font-size: 14px;
  line-height: 24px;
  & p{
    margin-top: 16px;
  }
  & ul{
    margin-top: 16px;
    padding-left: 0px;
    list-style: none;
    & li{
      position: relative;
      padding-left: 18px;
      &:before{
        content: '';
        position: absolute;
        top: 9px;
        left: 0px;
        display: block;
        width: 8px;
        height: 8px;
        background: #FF8D23;
        border-radius: 99px;
      }
    }
  }
  & span{
    display: block;
    padding-left: 18px;
    padding-right: 18px;
  }
`;

export const Wrapper = styled.div`
  display: block;
  margin-top: 38px;
  ${({blockType}) => (
    `
      padding-left: ${blockType.paddingLeft};
      padding-top: ${blockType.paddingTop};
      padding-bottom: ${blockType.paddingBottom};
      background: ${blockType.background};
      color: ${blockType.textColor};
      & ${Title}{
        color: ${blockType.titleColor}
      }
      & ${Content}{
        padding-right: ${blockType.paddingRight};
      }
      @media (max-width: 720px){
        padding: 20px;
        padding-left: ${blockType.mobilePaddingLeft};
        padding-right: ${blockType.mobilePaddingLeft};
        & ${Content}{
          padding-right: 0px;
          text-align: justify;
        }
      }
      `
  )};
  &:nth-child(2n){
    & ${Header}{
      flex-direction: row-reverse;
    }
  }
  @media (max-width: 720px){
    &:nth-child(2n){
      & ${Header}{
        flex-direction: column-reverse;
      }
    }
  }
`;