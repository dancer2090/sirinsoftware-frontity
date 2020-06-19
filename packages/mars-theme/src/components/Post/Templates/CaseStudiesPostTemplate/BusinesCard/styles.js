import { styled } from 'frontity';
import SvgSprite from '../../StandartTemplate/SvgSprite';

export const Card = styled.div`
  background: #F2F2F2;
  min-height: 430px;
  padding: 43px 70px 40px 38px;
  position: relative;
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
`;

export const Description = styled.div`
  font-family: Open Sans;
  font-size: 14px;
  line-height: 24px;
  color: #222222;
`;

export const Icon = styled(SvgSprite)`
  width: 120px;
  height: 120px;
  opacity: .1;
  position: absolute;
  right: 20px;
  top: 31px;
`;