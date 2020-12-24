import { styled } from 'frontity';
import Image from "../../../../image";

export const Title = styled.div`
  display: block;
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
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
export const ContentImageWrapper = styled.div`
  width: 45%;
  position: relative;
  @media (max-width: 776px){
    width: 100%;
    height: 420px;
  }
`;
export const ContentImage = styled(Image)`
  display: block;
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
export const ContentWrapper = styled.div`
  display: block;
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 50px;
  padding-right: 50px;
  max-width: 486px;
  flex: 1;
  @media (max-width: 776px){
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
  }
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
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  margin-top: 38px;
  background: #216628;
  color: #fff;
  @media (max-width:776px){
    flex-direction: column;
  }
  & a{
    color: #F8710F;
    &:hover{
      text-decoration: none;
    }
  }
`;