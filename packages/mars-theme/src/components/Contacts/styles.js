import { styled } from 'frontity';
import SvgSprite from '../Article/SvgSprite';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');

  padding: 97px 0 100px 0;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  font-family: 'Montserrat';

  * {
    box-sizing: border-box;
  }

  @media screen and (max-width: 991px) {
    max-width: 100%;
    padding: 69px 20px 90px 20px;
  }

  @media screen and (max-width: 767px) {
    padding: 29px 10px 80px 10px;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  line-height: 18px;
  text-transform: uppercase;
  color: #F8710F;
  margin-bottom: 27px;
  text-align: center;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 18px;
    margin-bottom: 25px;
  }
`;

export const Description = styled.div`
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #222222;
  margin-bottom: 46px;

  @media screen and (max-width: 991px) {
    margin-bottom: 75px;
    padding: 0 40px;

    br {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 27px;
    padding: 0;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    margin: 0 -10px;
  }
`;

export const Card = styled.div`
  background: #F2F2F2;
  min-height: 330px;
  width: calc(50% - 20px);
  padding: 28px 27px 27px 27px;
  position: relative;

  &:after {
    content: "";
    height: 220px;
    width: 98px;
    background-image: url(${props => props.src});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    right: 24px;
    bottom: 20px;
    opacity: .1;
  }

  @media screen and (max-width: 991px) {
    width: 100%;
    margin-bottom: 30px;
    padding: 28px 28px 28px 38px;
    min-height: 250px;

    &:last-child {
      margin-bottom: 0;
    }

    &:after {
      height: 200px;
      width: 88px;
      right: 20px;
      bottom: 25px;
    }
  }

  @media screen and (max-width: 767px) {
    min-height: 287px;
    padding: 24px 10px 24px 10px;
    margin-bottom: 20px;

    &:after {
      height: 220px;
      width: 98px;
      right: 10px;
      bottom: 20px;
    }
  }
`;

export const CardTitle = styled.h2`
  font-weight: 800;
  font-size: 36px;
  line-height: 48px;
  letter-spacing: 0.02em;
  text-align: center;
  text-transform: uppercase;
  color: #216628;
  margin-top: 0;
  margin-bottom: 39px;

  @media screen and (max-width: 991px) {
    text-align: left;
    font-size: 30px;
    line-height: 48px;
    margin-bottom: 26px;
  }

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 48px;
    margin-bottom: 14px;
  }
`;

export const CardList = styled.div`
  @media (min-width: 767px) and (max-width: 991px) {
    display: flex;
  }
`;

export const CartAddress = styled.div`
   @media (min-width: 767px) and (max-width: 991px) {
    max-width: 270px;
    width: 100%;
    margin-right: 70px;
  }
`;

export const CardInfo = styled.div``;

export const CardItem = styled.div`
  display: flex;
  margin-bottom: 15px;

  span, a {
    font-family: 'Open Sans';
    font-size: 18px;
    line-height: 24px;
    color: #222222;
  }

  a {
    transition: all .3s;
    &:hover {
      color: #444;
    }
  }
`;

export const Icon = styled(SvgSprite)`
  width: 30px;
  height: 22px;
  fill: #F8710F;
  margin-right: 19px;
`;