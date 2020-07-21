import { styled } from 'frontity';

export const BigTitleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 176px;
  text-align: center;
  overflow: hidden;

  @media screen and (max-width: 991px) {
    height: 117px;
  }

  @media screen and (max-width: 767px) {
    height: 59px;
  }
`;

export const BigTitleBackground = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  font-weight: 800;
  font-size: 144px;
  line-height: 176px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: ${(props) => (props.bigTitleBackgroundColor ? props.bigTitleBackgroundColor : "#F3F3F3")};
  z-index: 0;
  overflow: hidden;

  @media screen and (max-width: 991px) {
    height: 117px;
    line-height: 117px;
    font-size: 96px;
  }

  @media screen and (max-width: 767px) {
    font-size: 48px;
    line-height: 59px;
  }
`;


export const BigTitleText = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 59px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => (props.bigTitleTextColor ? props.bigTitleTextColor : "#222222")};
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
