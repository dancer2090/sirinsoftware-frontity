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
`;

export const Icon = styled(SvgSprite)`
  width: 120px;
  height: 108px;
  opacity: 0.1;
`;