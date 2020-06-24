import { styled, css } from 'frontity';

export const Container = styled.div`
  padding: 41px 0 115px 0;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const CollapseContainer = styled.div`
  max-width: 600px;
  width: 100%;
  margin-right: 60px;
`;

export const CollapseBlock = styled.div`

`;

export const CollapseTitle = styled.h2`
  font-weight: 800;
  font-size: 36px;
  line-height: 36px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #216628;
  margin-top: 0;
  margin-bottom: 26px;
`;

export const TableContainer = styled.div`
  width: 100%;
  max-width: 300px;
`;

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  position: relative;
  top: 0;
  transition: all .3s;

  ${({fixeds, top}) => (
    fixeds
    ? css`position: fixed; top: ${top}px;`
    : null
  )}
`;

export const TableTitle = styled.h2`
  margin-top: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  text-transform: uppercase;
  color: #000000;
  margin-bottom: 22px;
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

  ${({active}) => (
    active
    ? css`background: linear-gradient(277.36deg, #3FA54A 3.6%, #216628 97.69%);
      color: white`
    : css``
  )}
`;