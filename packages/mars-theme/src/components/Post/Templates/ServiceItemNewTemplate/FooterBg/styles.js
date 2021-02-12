import { styled, css } from 'frontity';

export const Title = styled.div`
  margin: 0 auto;
  max-width:   ${({titleWidth}) => (
    titleWidth
    ? css`${titleWidth}px;`
    : '391px;'
  )}
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #F9F9F9;
  @media (max-width: 776px){
    font-size: 18px;
    line-height: 36px;
  }
`;
export const ContentWrapper = styled.div`
  display: block;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.005em;
  margin: 0 auto;
  max-width: 670px;
  z-index: 10;
  position: relative;
`;
export const Card = styled.div`
  margin-top: 30px;
  color: #EFEFEF;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
  @media (max-width: 776px){
    margin-top: 15px;
    text-align: justify;
    text-align-last: center;
  }
  ${({cardWidth}) => (
    cardWidth
    ? css`max-width: ${cardWidth}px`
    : null
  )}
  & a{
    color: #FF8D23;
  }
  & p{
    margin: 0;
  }
`;
export const Content = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 776px){
    margin-top: 15px;
  }
  & ${Card}:nth-of-type(1){
    margin-top: 0px;
  }
  & ${Card}:nth-of-type(2n){
    align-self: flex-end;
  }
`;

export const Wrapper = styled.div`
  ${({bg}) => (
    bg
    ? css`
      background: url(${bg}) 50% 50% / 100% auto;
    `
    : null
  )}
  padding-top: 40px;
  padding-bottom: 40px;
  position: relative;
  &:after{
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.85);
    z-index: 1;
  }
  @media (max-width: 776px){
    margin-left: -10px;
    margin-right: -10px;
    padding-right: 10px;
    padding-left: 10px;
  }
`;
export const LastCard = styled.div`
  font-weight: 600;
  color: #F9F9F9;
  text-align: center;
  margin-top: 30px;
  font-family: 'Open Sans', sans-serif;
  & a{
    color: #FF8D23;
  }
  & p{
    margin: 0;
  }
`;