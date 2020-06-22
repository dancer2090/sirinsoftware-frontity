import { styled } from 'frontity';
import SvgSprite from '../../StandartTemplate/SvgSprite';

export const Title = styled.h2`
  margin: 0;
  font-weight: 800;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #216628;
  position: relative;
  display: flex;
  align-items: center;

  span {
    position: relative;
    left: -30px;
  }

  @media screen and (max-width: 991px) {
    font-weight: 800;
    font-size: 36px;
    line-height: 36px;

    span {
      left: -15px;
    }
  }

  @media screen and (max-width: 767px) {
    padding: 0 10px;
    font-size: 24px;
    line-height: 24px;

    span {
      left: -38px;
    }
  }
`;

export const Icon = styled(SvgSprite)`
  width: 120px;
  height: 108px;
  opacity: 0.1;

  @media screen and (max-width: 991px) {
    width: 100px;
    height: 90px;
  }

  @media screen and (max-width: 767px) {
    width: 70px;
    height: 63px;
  }
`;