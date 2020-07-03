import { styled } from 'frontity';

export const Container = styled.a`
  background: #FFFFFF;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  min-height: 140px;
  padding: 14px 10px 14px 17px;
  display: flex;
  flex-direction: column;
  transition: all .3s;

  &:hover {
    background: #F2F2F2;
    cursor: pointer;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
  }

  @media screen and (max-width: 991px) {
    min-height: 150px;
    padding: 14px 7px 10px 18px;
  }

  @media screen and (max-width: 767px) {
    min-height: 80px;
    padding: 12px 10px 10px 10px;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  text-transform: uppercase;
  color: #F8710F;
  margin-bottom: 10px;

  @media screen and (max-width: 991px) {
    padding-right: 16px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 4px;
  }
`;

export const Description = styled.div`
  flex-grow: 2;
  font-size: 14px;
  line-height: 18px;
  text-transform: uppercase;
  color: #000000;
  display: flex;
  align-items: center;

  @media screen and (max-width: 991px) {
    font-size: 12px;
    line-height: 16px;
  }
`;