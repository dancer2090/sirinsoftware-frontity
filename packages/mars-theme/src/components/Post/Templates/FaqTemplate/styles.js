import { styled, css } from 'frontity';
import Breadcrumbs from '../../../Breadcrumbs';

export const Crumbs = styled(Breadcrumbs)`
  @media screen and (max-width: 767px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const Container = styled.div`
  padding: 41px 0 115px 0;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 991px) {
    max-width: 740px;
    padding: 35px 0 100px 0;
  }

  @media screen and (max-width: 767px) {
    padding: 28px 0 28px;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
  }
`;

export const CollapseContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin-right: 60px;

  @media screen and (max-width: 991px) {
    max-width: 450px;
    margin-right: 30px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;

export const CollapseBlock = styled.div`
  margin-bottom: 79px;
`;

export const CollapseTitle = styled.h2`
  font-weight: 800;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  ${({ color }) => (
    color === 'yellow'
      ? 'color: #F8710F;'
      : 'color: #216628;'
  )}
  margin-top: 0;
  margin-bottom: 26px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 28px;
    padding: 0 10px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  max-width: 300px;
  margin-bottom: 79px;
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 991px) {
    max-width: 260px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 0 10px;
    margin-bottom: 37px;
  }
`;

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  position: relative;

  ${({ fixeds, top }) => (
    fixeds
      ? css`position: fixed; top: ${top}px;`
      : null
  )}

  ${({ bottom }) => (
    bottom
      ? 'position: relative; top: 0;'
      : null
  )}

  @media screen and (max-width: 991px) {
    max-width: 260px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    ${({ fixeds }) => (
    fixeds
      ? css`position: relative; top: 0;`
      : null
  )}
  }
`;

export const TableTitle = styled.h2`
  margin-top: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 22px;

  @media screen and (max-width: 767px) {
    text-align: center;
    margin-bottom: 22px;
  }
`;

export const TableList = styled.div`
  display: block;
`;

export const TableItem = styled.div`
  min-height: 30px;
  padding: 9px 19px 7px 19px;
  background: #FFFFFF;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  color: #222222;
  transition: all .3s;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
    background-color: #f3f3f3;
  }

  ${({ active }) => (
    active
      ? css`background: linear-gradient(277.36deg, #3FA54A 3.6%, #216628 97.69%);
      color: white`
      : css``
  )}

  @media screen and (max-width: 991px) {
    min-height: 40px;
  }
`;
