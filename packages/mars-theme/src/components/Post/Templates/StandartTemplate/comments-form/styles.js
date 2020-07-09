import { styled, css } from 'frontity';
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

const SingleComment = styled.div`
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0,0,0,.04);
  box-shadow: 0 1px 4px rgba(0,0,0,.04);
  border: 1px solid rgba(0,0,0,.09);
  -webkit-border-radius: 3px;
  border-radius: 3px;
  margin: 10px 0;
  padding: 10px;
`;

const Author = styled.p`
  font-size: 0.8em;
  display: inline;
`;

const Fecha = styled.p`
  font-size: 0.8em;
  display: inline;
`;

const SingleCommentContent = styled.div`
  font-size: 0.9em;
  p {
    margin: 7px 0;
  }
`;
const CommentsContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
`;
const CommentsSubmitText = styled.div`
  overflow: hidden;
  position: relative;
  max-height: 0px;
  text-align: center;
  color: #ff9e36;
  transition: 0.2s ease all;
  font-size:0px;
  opacity: 0;
  text-align: center;
  font-weight: 700;
  margin-top: 20px;

  ${(props) => props.afterload && css`
    font-size: 19px;
    opacity: 1;
    overflow: visible;
    max-height: 100%;
  `}
`;

export const RecaptchaText = styled.div`
  color: #222222;
  margin-top: 15px;
  font-size: 14px;
  & a{
    color: #222222;
    font-weight: 700;
  }
`;

export {
  Container,
  Title,
  Form,
  Input,
  TextArea,
  Button,
  SingleComment,
  Author,
  Fecha,
  SingleCommentContent,
  CommentsContainer,
  CommentsSubmitText,
};
