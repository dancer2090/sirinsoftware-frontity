import { css, styled } from 'frontity';

export const BigTitleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${({ size }) => (
    size === 'small'
      ? css`
        height: auto;
      ` : size === '70' ? css`
        height: 85px;
      ` : css`
        height: 176px;
      `
  )}
  text-align: center;
  overflow: hidden;

  @media screen and (max-width: 991px) {
    height: 117px;
  }

  @media screen and (max-width: 767px) {
    height: 80px;
    padding: 0 10px;
  }
`;

export const BigTitleBackground = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  font-weight: 800;
  ${({ size }) => (
    size === 'small'
      ? css`
        font-size: 100px;
        line-height: 0.93;
      ` : size === '70' ? css`
        font-size: 70px;
        line-height: 87px;
      ` : css`
        font-size: 144px;
        line-height: 176px;
      `
  )}
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${(props) => (props.bigTitleBackgroundColor ? props.bigTitleBackgroundColor : '#F3F3F3')};
  z-index: 0;
  overflow: hidden;
  pointer-events: none;

  @media screen and (max-width: 991px) {
    height: 117px;
    line-height: 117px;
    font-size: 96px;
  }

  @media screen and (max-width: 767px) {
    font-size: 48px;
    line-height: 80px;
    height: 80px;
  }
`;


export const BigTitleText = styled.h2`
  font-weight: 700;
  ${({ size }) => (
    size === 'small'
      ? css`
        font-size: 48px;
        line-height: 90px;
      ` : size === '70' ? css`
        font-size: 40px;
        line-height: 49px;
      ` : css`
        font-size: 48px;
        line-height: 59px;
      `
  )}
  margin: 0;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => (props.bigTitleTextColor ? props.bigTitleTextColor : '#222222')};
  position: relative;
  z-index: 1;

  @media screen and (max-width: 991px) {
    font-size: 36px;
    line-height: 44px;
  }

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 29px;
    
  }
`;
