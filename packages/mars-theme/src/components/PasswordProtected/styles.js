import { styled } from 'frontity';
import Button from '../Button';

export const InputGroup = styled.div`
  width: 331px;
  position: relative;
  margin: 0 auto;
  margin-top: 20px;

  @media (max-width: 1100px) {
    width: 249px;
    padding-left:4px;
  }

  @media screen and (max-width: 785px) {
    width: 100%;
    padding: 0;
  }
`;

export const FormControl = styled.input`
  height:46px;
  width:300px;
  margin: 13px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  padding-left: 19px;
  background: rgb(240, 240, 240);
  box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.2);
  border-style:none;
  transition: all .3s;

  @media (max-width: 1100px) {
    width: 230px;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  @media screen and (max-width: 785px) {
    margin: 0;
    margin-bottom: 10px;
    width: 100%;
  }
`;

export const ErrorText = styled.p`
  margin: 0;
  color: #fb0000;
  position: absolute;
  font-size: 13px;
  bottom: 15px;
  right: 20px;
  transition: opacity .5s ease-in-out;
`;

export const PasswordForm = styled.form`
  padding-top:21px;
  text-align:center;
`;

export const PasswordProtectedGlobal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 400px;
  text-align:center;
  padding-left: 10px;
  padding-right: 10px;
`;
export const Label = styled.div`
  text-align: center;
  font-size: 21px;
  font-weight: 700;
`;
export const BtnSend = styled.div`
  margin-top: 15px;
  width:100%;
  text-align: center;

  button{
    width: 300px;
    height: 46px; 
    border: none;
    margin-left: 0px;
    background: linear-gradient(274.43deg, #FFB03A 3.6%, #FF9233 97.69%);
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    color: #FFFFFF;
    transition: all .3s;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0;
      transition: all .3s;
    }

    &:active, &:focus {
      outline: none;
    }
  }

  button, label{
    cursor: pointer;
  }

  button:hover{
    &:after {
      opacity: .09;
    }
  }

  @media (max-width: 1100px) {
    .button {
      width: 250px;
    }
  }

  @media screen and (max-width: 785px) {
    margin: 0;
    width: 100%;
    padding: 0;
   
    button {
      margin: 0;
      margin-top: 16px;
    }
  }
`;