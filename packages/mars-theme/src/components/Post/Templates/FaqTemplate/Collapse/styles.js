import { styled } from 'frontity';

export const Container = styled.div`

`;

export const Item = styled.div`
  width: 100%;
`;

export const ItemHeader = styled.div`
  background: #F2F2F2;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 26px 16px 21px;
`;

export const ItemTitle = styled.div`
  font-size: 18px;
  line-height: 36px;
  color: #222222;
  margin-right: 10px;
`;

export const ItemIcon = styled.div`
  width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;

  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 2px;
    background: #F8710F;
    position: absolute;
    left: 50%;
    top: 50%;
  }

  &:after {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  &:before {
    transform: translate(-50%, -50%) rotate(0);
  }
`;

export const ItemBody = styled.div`
  padding: 33px 16px 14px 20px;
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 22px;
  color: #222222;
`;