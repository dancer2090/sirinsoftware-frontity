import { styled } from 'frontity';
export const Wrapper = styled.div`
  display: block;
  margin-top: 15px;
  padding-top: 85px;
  padding-bottom: 85px;
  padding-left: 15px;
  padding-right: 15px;
  ${ ({bg}) => (
    bg
    ? `background: url(${bg}) 50% 50% / auto 100%;`
    : null
  ) }
  position: relative;
  &:before{
    content: ' ';
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.75) 93.21%, rgba(64, 64, 64, 0.75) 99.7%);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }
`;
export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  z-index: 1;
  position: relative;
`;
export const PreFooterTopText = styled.div`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  @media (max-width: 550px){
    text-align: center;
  }
  & p{
    max-width: 418px;
    margin: 0px;
    & a{
      color: #F8710F;
    }
  }
`;
export const PreFooterBottomText = styled.div`
  display: flex;
  flex-direction: row-reverse;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  @media (max-width: 550px){
    margin-top: 15px;
    text-align: center;
  }
  & p{
    max-width: 418px;
    margin: 0px;
    & a{
      color: #F8710F;
    }
  }
`;