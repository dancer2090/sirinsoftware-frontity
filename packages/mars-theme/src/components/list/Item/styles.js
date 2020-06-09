import { styled } from 'frontity';

const CL_TEXT = '#FFFFFF';
const CL_TEXT_HOVER1 = '#57a64a';
const CL_TEXT_HOVER2 = '#f9ab39';

const Text = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  color: ${CL_TEXT};
`;

export const Article = styled.article`
    flex: 1 1 46%;
    padding: ${(props) => (props.isOdd ? '5% 0 0px 10px' : '0px 10px 0px 0')};
    @media (max-width: 767px) {
      flex: 1 1 98%;
      padding: 10px 0;
      /* && button {
        background: ${(props) => (
    props.isOdd ? 'linear-gradient(279.98deg, #3FA54A 3.6%, #216628 97.69%)'
      : 'linear-gradient(279.98deg, #FFB03A 3.6%, #FF9233 97.69%)')
} */
    }
`;
export const ArtContainer = styled.div`
  position: relative;
`;

export const ImgContainer = styled.div`
  width:100%;
  max-height:470px;
  overflow: hidden;
  display:flex;
  justify-content:center;
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
  position:relative;
  ::after {
    position:absolute;
    content:'';
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,.5);
  }
  img {
    width:100%;
    height:100%;
  } 
  @media (max-width: 767px) {
    max-height:500px;
    img {
      margin-top: -15%;
    }
  }
  @media (max-width: 450px) {
    max-height:254px;
  }
`;

export const ArtCategory = styled(Text)`
    position: absolute;
    top:${({ isOdd }) => (isOdd ? '30px' : '26px')};
    left:${({ isOdd, n }) => {
    if (isOdd) return '30px';
    if (n % 2) return '29px';
    return '26px';
  }};
    font-size: 22px;
    line-height: 22px;
    text-transform: uppercase;
    @media (max-width: 1151px) {
      font-size: ${({ isClGreen }) => (isClGreen ? '20px' : '18px')};
    }
    @media (max-width: 767px) {
      font-size: 14px;
      top:${({ isOdd }) => (isOdd ? '16px' : '15px')};
      left:${({ isOdd }) => (isOdd ? '19px' : '22px')};
    }
`;
export const ArtDate = styled(Text)`
    position: absolute;
    top:${({ isOdd, n }) => {
    if (isOdd) return '27px';
    if (n % 2) return '26px';
    return '25px';
  }};
    right:${({ isOdd }) => (isOdd ? '30px' : '29px')};
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0.01em;
    @media (max-width: 767px) {
      font-size: 12px;
      top:10px;
      right: :${({ isOdd }) => (isOdd ? '19px' : '20px')};
    }    
`;
export const BtnRead = styled.button`
    width:100%;
    height:46px;
    border:none;
    background: ${(props) => (
    props.isClGreen
      ? 'linear-gradient(279.98deg, #3FA54A 3.6%, #216628 97.69%)'
      : 'linear-gradient(279.98deg, #FFB03A 3.6%, #FF9233 97.69%)'
  )};
    font-family: Montserrat;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    color: ${CL_TEXT};
    text-transform: uppercase;
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      background-color: rgba(0, 0, 0, 1);
      pointer-events: none;
      transition: all .3s ease-in-out;
    }
    &:hover {
      &:after {
        opacity: .1;
      }
    }
`;
export const Title = styled.h2`
    position: absolute;
    bottom: 33px;
    left:${({ isOdd }) => (isOdd ? '29px' : '31px')};
    right: ${({ isOdd, n }) => {
    if (isOdd) return '109px';
    if (n % 2) return '75px';
    return '94px';
  }};
    font-size: 30px;
    line-height: 30px;
    color: ${CL_TEXT};
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: ${(props) => (!props.isClGreen ? CL_TEXT_HOVER2 : CL_TEXT_HOVER1)};
    } 

    @media (max-width: 1151px) {
      font-size: 24px;
      line-height: 26px;
      left:20px;
      bottom: 42px;
    }
    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 20px;
      left:${({ isOdd }) => (isOdd ? '20px' : '16px')};
      bottom: 52px;
    }
`;
