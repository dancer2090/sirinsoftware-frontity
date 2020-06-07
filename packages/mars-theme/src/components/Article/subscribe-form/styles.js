import { styled } from 'frontity';
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

const Input = styled(Field)`
    margin-bottom: 10px;
`;

export {
  Form,
  Title,
  SubmitButton,
  Description,
  Input,
};
