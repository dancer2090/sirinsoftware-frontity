import { styled } from 'frontity';
import TextField from '../input';
import ButtonTempalate from '../button';

const Container = styled.div`
    display: block;
    width: 100%;
`;

const Title = styled.span`
    display: block;
    margin-bottom: 19px;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #222222;
`;

const Form = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    background: linear-gradient(272.17deg, #FFB03A 3.6%, #FF9233 97.69%);
    padding: 30px 20px;

    @media screen and (max-width: 767px) {
        padding: 30px 11px;
    }
`;

const Input = styled(TextField)`
    width: calc(50% - 10px);
    padding: 7px 19px;
    font-size: 14px;
    line-height: 22px;
    
    @media screen and (max-width: 767px) {
        width: 100%;
        margin-bottom: 10px;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 100px;
    padding: 14px 18px;
    resize: none;
    border: none;
    outline: none;
    margin-top: 20px;
    margin-bottom: 21px;
    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.2);
    font-size: 14px;
    line-height: 22px;
    font-family: 'Open Sans';

    @media screen and (max-width: 767px) {
        margin-top: 0;
    }
`;

const Button = styled(ButtonTempalate)`
    min-width: 300px;
    margin-left: auto;

    @media screen and (max-width: 576px) {
        min-width: initial;
        width: 100%;
    }
`;

export {
  Container,
  Title,
  Form,
  Input,
  TextArea,
  Button,
};
