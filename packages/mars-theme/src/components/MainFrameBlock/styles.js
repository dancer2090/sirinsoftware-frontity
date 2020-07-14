import { styled } from 'frontity';
import Button from '../Button';

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 0px;

  @media screen and (max-width: 991px) {
    max-width: 728px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
  }

  * {
    box-sizing: border-box;
  }
`;

export const MainBlock = styled.div`
  display: block;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 72px;
  padding-bottom: 116px;
  position: relative;
  overflow: hidden;
  @media (max-width: 991px) {
    padding-top: 65px;
    padding-bottom: 65px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 0px;
    padding-bottom: 187px;
  }
  &:before{
    content: ' ';
    position: absolute;
    left: 0px;
    right: 0px;
    bottom: 0px;
    top: 0px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(22957.jpg);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
    z-index: 1;
  }
`;
export const MainBlockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  z-index: 5;
`;
export const MainBlockLeft = styled.div`
  display: block;
  padding-top: 109px;
  @media (max-width: 991px) {
    padding-top: 70px;
  }
  @media screen and (max-width: 767px) {
    padding-top: 147px;
    width: 100%;
    z-index: 5;
  }
`;
export const MainBlockTitle = styled.h1`
  display: block;
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  text-transform: uppercase;
  color: #FFFFFF;
  width: 550px;
  @media (max-width: 991px) {
    font-size: 48px;
    line-height: 48px;
    width: 430px;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
  }
`;
export const MainBlockButton = styled(Button)`
  display: block;
  margin-top: 31px;
  padding-left: 35px;
  padding-right: 35px;
  background: linear-gradient(275.56deg, #3FA54A 3.6%, #216628 97.69%);
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
  width: 260px;
  height: 46px;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #FFFFFF;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
    margin-top: 30px;
  }
`;
export const MainBlockRight = styled.div`
  display: block;
  @media screen and (max-width: 767px) {
    position: absolute;
    left: 0px;
    right: 0px;
    z-index: 0;
  }
`;
export const MainBlockIcon = styled.img`
  display: block;
  @media (max-width: 991px) {
    height: 411px;
  }
  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
`;
