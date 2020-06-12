import { styled, css } from 'frontity';
import Button from '../button';
import Field from '../input';

const Form = styled.form`
    width: 100%;
    padding: 27px 20px 30px 20px;
    background: linear-gradient(271deg, #3FA44A 3.6%, #216628 97.69%);
    box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: 991px) {
        padding: 25px 20px 30px 20px;
    }

    @media screen and (max-width: 767px) {
        padding: 25px 11px 27px 11px;
    }
    position: relative;
`;

const Title = styled.span`
    display: block;
    text-align: center;
    margin-bottom: 16px;
    font-size: 18px;
    line-height: 20px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
    padding: 0 13px;

    @media screen and (max-width: 991px) {
        padding: 0;
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 15px;   
    }
`;

const SubmitButton = styled(Button)`
    width: 100%;
    justify-content: center;

    @media screen and (max-width: 991px) {
        font-weight: 800;
        font-size: 14px;
        line-height: 22px;
    }
`;

const Description = styled.div`
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    text-align: center;
    margin-top: 7px;
    margin-bottom: 16px;
    padding: 0 5px;

    a {
      color: #FFB03A;
      margin-left: 3px;
    }

    @media screen and (max-width: 991px) {
        padding: 0;
    }
`;

export const InputGroup = styled.div`
  position: relative;
`;

export const ErrorText = styled.div`
    position: absolute;
    right: 8px;
    top: 10px;
    color: #fb0000;
    font-size: 14px;
`;

const Input = styled(Field)`
    margin-bottom: 10px;
    ${(props) => props.error && css`
        input {
          background-color: #ffebeb;
        }
    `}
`;

export const FText = styled.div`
  overflow: hidden;
  position: relative;
  max-height: 0px;
  text-align: center;
  color: #ffffff;
  transition: 0.2s ease all;
  font-size:0px;
  opacity: 0;

  ${(props) => props.afterload && css`
    font-size: 16px;
    opacity: 1;
    max-height: 100%;
  `}
`;

export {
  Form,
  Title,
  SubmitButton,
  Description,
  Input,
};
