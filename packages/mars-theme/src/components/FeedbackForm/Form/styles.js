import { styled } from 'frontity';
import check from '../../../img/check_mark.svg';

export const FormTemplate = styled.form`
  padding-top:21px;
  text-align:center;
  @media screen and (max-width: 785px) {
    padding-top: 15px;
  }
`;

export const InputTextBlock = styled.div`
  width:100%;
  padding-left:4px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 785px) {
    flex-wrap: wrap;
    padding: 0;
  }
`;

export const InputGroup = styled.div`
  width: 331px;
  position: relative;

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
    background-color: white;
  }

  @media screen and (max-width: 785px) {
    margin: 0;
    margin-bottom: 10px;
    width: 100%;
    font-size: 12px;
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


export const Textarea = styled.textarea`
  margin-top: 10px;
  padding: 19px;
  width: 961px;
  height: 120px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 22px;
  border-style: none;
  z-index: 1;
  resize: none;
  background: rgb(240, 240, 240);
  box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.2);
  transition: all .3s;

  @media (max-width: 1100px) {
    width: 728px;
  }

  @media screen and (max-width: 785px) {
    width: 100%;
    font-size: 12px;
  }

  &:focus {
    outline: none;
    box-shadow: none;
    background-color: white;
  }
`;

export const Clip = styled.div`
  margin-top: -55px;

  .hide {
    position: relative;
    overflow:hidden;
    z-index: 5;
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
  }

  @media (max-width: 1100px) {
    margin-top: -55px;
  }
`;

export const PictureIcon = styled.label`
  display: flex;
  max-width: 961px;
  margin: 0 auto;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;

  span {
    margin-right: 10px;
    font-size: 14px;
  }

  @media (max-width: 1100px) {
    max-width: 728px;
  }
`;

export const Send = styled.div`
  margin:25px 15px 15px 15px;
  color: #FFFFFF;
  padding-bottom: 10px;
  align-items: center;
  text-align: left;
  width: 80%;

  @media (max-width: 1100px) {
      .send {
          margin:30px 15px 15px 16px;
      }
  }

  input{
    height:24px;
    width:24px;
    margin: 5px;
    box-shadow: iwnset 2px 2px 8px rgba(0, 0, 0, 0.2);  
  }
  .box {
    height: 33px;
  }

  span {
    color: #F8710F;
  }

  input[type="checkbox"]{
      display:none;
  }

  label {
      padding-left:20px;
      font-family: Open Sans !important;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      display: flex;
      max-width: calc(100% - 300px);

      &.error {
        &::before {
          background: #ffa4a4bf;
          box-shadow: none;
        }
      }
      @media screen and (max-width: 767px) {
        max-width: 100%;
      }
      & a span{
        color: #FFB03A;
      }
  }
  label::before{
      content:'';
      text-align: center;
      display:inline-block;
      width:24px;
      min-width: 24px;
      height:24px;
      background: #FFFFFF;
      box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.2);
      margin-left:-15px;
      margin-right: 25px;
      margin-bottom: -7px;
      cursor: pointer;
      transition: all .3s;
  }

  input[type="checkbox"]:checked + label::before{
    background-image: url(${check});
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center;
  }

  @media screen and (max-width: 785px) {
    margin: 0;
    width: 100%;
    margin-top: 28px;

    label {
      display: flex;
      &:before {
        min-width: 24px;
        margin-right: 19px;
      }
    }
  }
`;

export const BtnSend = styled.div`
  margin-top: -75px;
  width:98%;
  text-align: right;

  @media (max-width: 1100px) {
    padding-right: 5px;
  }
  
  @media screen and (max-width: 767px) {
    text-align: center;
  }

  button{
    width: 300px;
    height: 46px; 
    border: none;
    margin-left: 54px;
    background: linear-gradient(274.43deg, #FFB03A 3.6%, #FF9233 97.69%);
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    color: #FFFFFF;
    transition: all .3s;
    position: relative;
    letter-spacing: 0.08em;
    @media screen and (max-width: 767px) {
      font-size: 16px;
    }

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
    
    @media screen and (max-width: 767px) {
      max-width: 450px;
      width: 100%;
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

export const RecaptchaText = styled.div`
  color: #FFFFFF;
  margin: 20px;
  margin-top: 15px;
  font-size: 14px;
  & a{
    color: #FFFFFF;
    font-weight: 700;
  }
`;
