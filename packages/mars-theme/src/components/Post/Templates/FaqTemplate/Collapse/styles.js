// import { styled } from 'frontity';
import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 10px;
`;

export const Item = styled.div.attrs((props) => ({
  itemType: props.propType,
  itemProp: props.prop,
  itemScope: props.scope,
}))`
  width: 100%;
`;

export const ItemHeader = styled.div`
  background: #F2F2F2;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 26px 16px 21px;

  @media screen and (max-width: 767px) {
    padding: 13px 10px 4px 11px;
    min-height: 46px;
  }
`;

export const ItemTitle = styled.div.attrs((props) => ({
  itemProp: props.prop,
}))`
  font-size: 18px;
  line-height: 36px;
  color: #222222;
  margin-right: 10px;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 16px;
  }
`;

export const ItemIcon = styled.div`
  width: 20px;
  min-width: 20px;
  height: 20px;
  cursor: pointer;
  position: relative;

  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 2px;
    ${({ color }) => (
    color === 'green'
      ? 'background: #216628;'
      : 'background: #F8710F;'
  )}
    position: absolute;
    left: 50%;
    top: 50%;
  }

  &:after {
    transform: translate(-50%, -50%) rotate(90deg);
    transition: all .3s;

    ${({ active }) => (
    active
      ? 'transform: translate(-50%, -50%) rotate(0deg);'
      : null
  )}
  }

  &:before {
    transform: translate(-50%, -50%) rotate(0);
  }
`;

export const ItemBody = styled.div`
  overflow: hidden;
  transition: all .3s ease-in-out;
`;

export const ItemContent = styled.div.attrs((props) => ({
  itemType: props.propType,
  itemProp: props.prop,
  itemScope: props.scope,
}))`
  padding: 33px 16px 14px 20px;
  font-family: 'Open Sans';
  font-size: 14px;
  line-height: 22px;
  color: #222222;

  @media screen and (max-width: 991px) {
    padding: 35px 0 43px 0;
  } 

  @media screen and (max-width: 767px) {
    padding: 35px 10px;
  }
`;

export const ItemText = styled.div.attrs((props) => ({
  itemProp: props.prop,
}))``;
