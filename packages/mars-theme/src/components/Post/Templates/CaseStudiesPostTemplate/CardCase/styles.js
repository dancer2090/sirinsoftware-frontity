import { styled } from 'frontity';
import SvgSprite from '../../StandartTemplate/SvgSprite';

export const Card = styled.div`
  min-height: 380px;
  background: #216628;
  padding: 42px 40px 36px 40px;
  position: relative;
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 26px;
  font-weight: 800;
  font-size: 48px;
  line-height: 48px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #FFFFFF;
`;

export const Content = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const Item = styled.li`
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 26px;
  color: #FFFFFF;

  &:before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #FF8D23;
    margin-right: 10px;
  }
`;

export const Icon = styled(SvgSprite)`
  width: 120px;
  height: 120px;
  fill: white;
  position: absolute;
  top: 30px;
  right: 18px;
  opacity: 0.1;
`;