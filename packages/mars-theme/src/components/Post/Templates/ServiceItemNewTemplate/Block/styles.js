import { styled, css } from 'frontity';
import Image from '../../../../image';

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ reverse }) => reverse ? css`row-reverse` : css`row`}
  ${({ marginTop }) => (
    marginTop ? css`margin-top: ${marginTop}px` : null
  )}
  ${({ marginBottom }) => (
    marginBottom ? css`margin-bottom: ${marginBottom}px` : null
  )}
  ${({ paddingTop }) => (
    paddingTop ? css`padding-top: ${paddingTop}px` : null
  )}
  ${({ paddingBottom }) => (
    paddingBottom ? css`padding-bottom: ${paddingBottom}px` : null
  )}
  padding-right: 12px;
  position: relative;
  ${({ titleAlign }) => (
    titleAlign ? css`justify-content: ${titleAlign}` : null
  )}
  @media (max-width: 720px){
    flex-direction: column-reverse;
    padding-right: 0px;
  }
`;
export const Title = styled.div`
  font-family: Belleza;
  display: block;
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
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
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-right: ${({ marginRight }) => marginRight}px;
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
  & a{
    color: #FF8D23;
    &:hover{
      color: #c75e11;
      text-decoration: none;
    }
  }
  & p{
    margin-top: 16px;
  }
  & p:first-of-type{
    margin-top: 0px;
  }
  & ul{
    margin-top: 16px;
    padding-left: 0px;
    list-style: none;
    & li{
      position: relative;
      padding-left: 18px;
      margin-top: 16px;
      &:first-of-type{
        margin-top: 0;
      }
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
    &.list-with-names li{
      margin-top: 40px;
    }
  }
  & ol {
    counter-reset: monsteratt-counter;
    posiion: relative;
    list-style: none;
    padding-left: 0px;
    & li{
      counter-increment: monsteratt-counter;
      position: relative;
      padding-left: 35px;
      margin-top: 16px;
      &:before{
        content: counter(monsteratt-counter);
        font-size: 32px;
        line-height: 24px;
        color: #FF8D23;
        font-family: Belleza;
        position: absolute;
        left: 0px;
        top: 0px;
      }
    }
    &.list-with-names li{
      margin-top: 40px;
    }
  }
  & img{
    width: 100%;
    height: auto;
    &.wp-full-image {
      margin-left: -35px;
      width: auto;
      margin-top: 15px;
      @media (max-width: 776px){
        margin-left: -45px;
      }
    }
  }
  & span{
    display: block;
    padding-left: 18px;
    padding-right: 18px;
    ${({ lastCloudSpan }) => (
    lastCloudSpan ? css`
        width: ${lastCloudSpan}px;
        max-width: 100%;
        margin: 0 auto;
      ` : null
  )}
    &.text-block{
      padding: 0;
    }
    &.li-inner-text-block-padding{
      margin-top: 24px;
      margin-bottom: 0px;
      padding-left: 0px;
      padding-bottom: 0px;
    }
    &.greentext-sub-title {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0;
    }
    &.greentext-green-center {
      max-width: 390px;
      margin: 0 auto;
      color: #216628;
      font-weight: 600;
      text-align: center;
    }
  }
  & .text-block-name{
    text-transform: uppercase;
    display: block;
  }
  & ul.greentext-ul-spacing{
    & strong{
      display: block;
    }
    & span{
      padding: 0px;
    }
  }
`;

export const Wrapper = styled.div`
  display: block;
  margin-top: 38px;
  font-family: Open Sans;
  ${({ blockType }) => (
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
  &:nth-of-type(2n){
    & ${Header}{
      flex-direction: ${({ reverse }) => reverse ? css`row` : css`row-reverse`}
    }
  }
  ${({ textAlignPush }) => (
    textAlignPush === 'left'
      ? css`
        &:nth-of-type(2){
          & ${Header}{
            justify-content: flex-end;
          }
        }
      `
      : null
  )}
  @media (max-width: 720px){
    &:nth-of-type(2n){
      & ${Header}{
        flex-direction: column-reverse;
      }
    }
  }
`;
export const WrapCard = styled.div`
  width: 274px;
  background: #FFFFFF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 22px;
  padding-right: 22px;
  font-size: 14px;
  line-height: 24px;
  position: absolute;
  @media (max-width: 720px){
    position: relative;
    left: 0px;
    top: 0px;
    margin: 0 auto;
    margin-top: 20px;
  }
`;
export const TitleCard = styled.div`
  width: 150px;
  margin: 0 auto;
  font-weight: 600;
  text-align: center;
  color: #F8710F;
  font-family: Belleza;
`;
export const TextCard = styled.div`
  color: #222222;
  margin-top: 12px;
  text-indent: 4px;
`;
export const CardsWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 540px;
  margin-left: -30px;
  padding-right: 30px;
  @media (max-width: 720px){
    position: relative;
    height: auto;
    margin-left: 0px;
    padding-right: 0px;
  }
  & ${WrapCard}:nth-of-type(1){
    top: 55px;
    left: 0px;
    z-index: 2;
    @media (max-width: 720px){
      top: 0px;
      left: 0px;
    }
  }
  & ${WrapCard}:nth-of-type(2){
    top: 0px;
    right: 0px;
    z-index: 1;
    background: #F2F2F2;
    @media (max-width: 720px){
      top: 0px;
      left: 0px;
      background: #ffffff;
    }
  }
  & ${WrapCard}:nth-of-type(3){
    bottom: 0px;
    right: 56px;
    z-index: 3;
    background: #F2F2F2;
    @media (max-width: 720px){
      top: 0px;
      left: 0px;
      background: #ffffff;
    }
    & ${TitleCard}{
      width: 162px;
    }
  }
`;

export const InnerCardText = styled.div`
  color: ${(props) => props.textColor};
  margin-top: 13px;
`;
export const InnerCardTitle = styled.div`
  color: ${(props) => props.titleColor};
  font-weight: 600;
  text-align: center;
`;
export const InnerCard = styled.div`
  width: 308px;
  margin-top: 36px;
  background: ${(props) => props.bgColor};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  line-height: 24px;
  padding-left: 20px;
  padding-right: 20px;
  padding: 30px;
  @media (max-width: 776px){
    margin-top: 15px;
    width: 100%;
  }
`;
export const InnerCardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    align-items: flex-start;
    & ${InnerCard}:nth-of-type(1), & ${InnerCard}:nth-of-type(2n+1){
      width: 322px;
      margin-left: -35px;
      padding-left: 40px;
      padding-right: 40px;
      @media (max-width: 776px){
        margin-left: 0px;
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
      }
    }
    & ${InnerCard}:nth-of-type(1){
      margin-top: 0px;
    }
    & ${InnerCard}:nth-of-type(2){
      margin-top: 53px;
      @media (max-width: 776px){
        margin-top: 15px;
      }
    }
    & ${InnerCard}:nth-of-type(3){
      margin-top: -22px;
      z-index: 10;
      @media (max-width: 776px){
        margin-top: 15px;
      }
    }
`;
