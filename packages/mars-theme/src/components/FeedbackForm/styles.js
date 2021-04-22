import { styled } from 'frontity';

export const Block = styled.div`
  * {
    box-sizing: border-box;
  }
`;

export const FormBlock = styled.div`
  position:relative;
  max-width: 100%;
  padding-bottom: 20px;
  margin: 0 auto;
  background: linear-gradient(272.07deg, #3FA44A 3.6%, #216628 97.69%);
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 785px) {
    max-width: 100%;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 40px;
    height: fit-content;
  }
`;

export const QuestionBlock = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  
  @media (max-width: 1100px) {
    max-width: 770px;
  }
`;

export const QuestionShadow = styled.div`
  height: 22px;
  padding-top: 77px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 56px;
  line-height: 22px;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  opacity: 0.1;

  @media (max-width: 1100px) {
    padding-top: 50px;
  }
  
  @media (max-width: 785px) {
    font-size: 39px;
    line-height: 40px;
    height: fit-content;
    padding-top: 20px;
  }
`;


export const Question = styled.h2`
  height: 22px;
  margin: 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 22px;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
  
  @media (max-width: 785px) {
    position: absolute;
    left: 24.22%;
    right: 23.37%;
    top: 5.43%;
    bottom: 88.03%;
    font-style: normal;
    font-weight: 800;
    font-size: 24px;
    line-height: 22px;
    width: 182px;
    text-align: center;
    align-items: center;
    height: fit-content;
    font-size: 24px;
    line-height: 22px;
  }
`;

export const FormText = styled.div`
  margin-top: 35px;
  font-family: Open Sans !important;
  height: 22px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  align-items: center;
  text-align: center;
  color: #FFFFFF;

  b {
    font-weight: 600;
  }

  @media screen and (max-width: 785px) {
    height: fit-content;
    margin: 0 auto;
    margin-top: 7px;
    line-height: 18px;
    max-width: 235px;
  }
`;

export const InputBlock = styled.div`
  max-width:1920px;
  width: 1000px;
  margin: 0 auto;

  @media (max-width: 1100px) {
    max-width: 770px;
    width: 100%;
  }

  @media screen and (max-width: 785px) {
    max-width: 100%
  }
`;
