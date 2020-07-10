import { styled } from 'frontity';
import SvgSprite from '../../StandartTemplate/SvgSprite';

export const Card = styled.div`
  background: #F2F2F2;
  padding: 43px 70px 40px 38px;
  position: relative;

  @media screen and (max-width: 991px) {
    padding: 35px 29px 7px 41px;
  }

  @media screen and (max-width: 767px) {
    padding: 37px 8px 35px 20px;
  }
`;

export const Title = styled.span`
  display: block;
  font-weight: 800;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #216628;
  margin-bottom: 53px;

  @media screen and (max-width: 991px) {
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 24px;
  }
`;

export const Description = styled.div`
  font-family: Open Sans;
  font-size: 14px;
  line-height: 24px;
  color: #222222;

  @media screen and (max-width: 991px) {
    line-height: 22px;
  }

  @media screen and (max-width: 767px) {
    font-size: 12px;
    line-height: 17px;
  }
`;

export const Icon = styled(SvgSprite)`
  width: 120px;
  height: 120px;
  opacity: .1;
  position: absolute;
  right: 20px;
  top: 31px;

  @media screen and (max-width: 991px) {
    width: 90px;
    height: 75px;
    right: 32px;
    top: 31px;
  }

  @media screen and (max-width: 767px) {
    width: 70px;
    height: 70px;
    right: 20px;
    top: 26px;
  }
`;
