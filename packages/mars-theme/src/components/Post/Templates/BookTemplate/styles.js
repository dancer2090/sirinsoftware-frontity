import { styled } from 'frontity';

export const BookPage = styled.div`
  width: 100%;
`;

export const BookSpace = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Book = styled.div`
  width: 50%;
  padding-top: 50px;
  padding-right: 50px;

  @media (max-width: 600px) {
    padding-top: 15px;
    padding-right: 15px;
    padding: 15px;
  }

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const BookForm = styled.div`
  background-color: #a6c950;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 992px) {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`;

export const BookContent = styled.div`
  max-width: 560px;
  margin-left: auto;
  margin-right: 0;

  @media (max-width: 992px) {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  h2 {
    font-weight: 900;
    font-size: 23px;
    line-height: 37px;
    text-align: right;
    text-transform: uppercase;
    color: #a6c950;

    @media (max-width: 992px) {
      text-align: center;
    }
  }

  p {
    font-size: 23px;
    line-height: 37px;
    font-weight: 500;
    text-align: right;
    text-transform: uppercase;
    color: #a6c950;
    @media (max-width: 992px) {
      text-align: center;
      font-size: 18px;
    }
  }

  .image {
    position: relative;
    top: -50px;
    text-align: right;

    @media (max-width: 600px) {
      position: static;
    }

    img {
      @media (max-width: 600px) {
        max-width: 100%;
        top:0;
        position: static;
      }
    }
  }
`;

export const FormContent = styled.div`
  max-width: 450px;
  width: 100%;
  @media (max-width: 600px) {
    padding: 15px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 30px;
  margin: 0;
`;

export const Image = styled.div`
  padding-left: 32px;
  padding-right: 32px;
`;
export const Text = styled.div`
  max-width: 322px;
  padding-bottom: 10px;
  h3 {
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
  }

  p {
    font-weight: 300;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: #FFFFFF;

    strong {
      font-weight: 600;
    }
  }
`;

export const Form = styled.div`

`;

export const FormGroup = styled.div`
  .error-text {
    display: none;
    pointer-events: none;
    bottom: -5px;
    text-align: right;
  }

  &.error {
    .error-text {
      display: block;
    }
  }

  label {
    position: absolute;
    top: 25px;
    padding-left: 30px;
    font-size: 18px;
    pointer-events: none;
    width: 100%;
    transition: all 0.3s ease-in-out;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  &.focused {
    label {
      font-size: 12px;
      top: 5px;
      left: auto;
      right: 5px;
      color: #59711d;
      text-align: right;
    }

    input {

    }
  }

  &.fill {
    label {
      font-size: 12px;
      top: 5px;
      left: auto;
      right: 5px;
      color: #59711d;
      text-align: right;
    }
  }

  margin-top: 16px;
  position: relative;

  &:first-child {
    margin-top: 0;
  }

  input {

    outline: 0;
    width: 100%;

    &.form-control {
      width: 100%;
    }

    &[type="text"] {
      font-family: "Montserrat";
      background: rgba(242, 242, 242, 0.9);
      border: 1px solid #C9C4C0;
      box-sizing: border-box;
      padding: 23px 31px;
      font-weight: 300;
      line-height: 18px;
      font-size: 18px;
      color: #77716D;
      border-left: 3px solid #a6c950;
      transition: 0.5s ease-in-out;

      @media (max-width: 768px) {
        font-size: 15px;
        line-height: 15px;
        padding: 23px 20px;

      }

      &:focus {
        background: white !important;
      }
    }
    &::placeholder {
      color: #77716D;
      transition: 0.5s ease-in-out;
    }
  }

  textarea {
    outline: 0;
  }

  .textarea-field-box {
    background: rgba(242, 242, 242, 0.9);
    border: 1px solid #C9C4C0;
    box-sizing: border-box;
    padding: 20px 11px 55px 31px;
    font-weight: 300 !important;
    line-height: 18px;
    letter-spacing: 0;
    font-size: 18px;
    color: #77716D;
    border-left: 3px solid #a6c950;
    position: relative;

    transition: 0.5s ease-in-out;

    &:focus {
      background: white;
    }
    &:active {
      background: white;
    }

    &.active {
      background: white;
    }
    @media (max-width: 768px) {
      padding: 20px 11px 55px 20px;
    }

    .textarea-scrollbar {
      height: 165px;
    }

    textarea {
      background: transparent;
      border: none;
      outline: 0;
      padding: 0;

      @media (max-width: 768px) {
        font-size: 15px;
        line-height: normal;
      }
    }

    .textarea-field {
      position: relative;

      @media (max-width: 992px) {
        margin-bottom: 40px;
      }

      .error-text {
        right: 20px;
      }
    }

    .textarea-footer {
      height: 41px;
      padding-left: 12px;
      padding-right: 12px;
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      border-top:1px solid #a6c950;
      overflow: hidden;
      .check {
        table {
          td {
            vertical-align: middle;
            span {
              font-weight: 300;
              line-height: 20px;
              font-size: 14px;
              color: #444444;
            }

            svg {
              top: 5px;
            }
          }
        }
      }

      .nda {
        cursor: pointer;
      }

      @media (max-width: 768px) {
        height: auto;
        padding-bottom: 10px;
      }
    }
  }

  .file {
    position: absolute;
    right: 18px;
    bottom: 4px;

    @media (max-width: 768px) {
      position: static;
      padding-left: 10px;
    }

    .included_filename {
      position: absolute;
      right: 150px;
      top: 7px;
      font-size: 10px;
      white-space: nowrap;

      @media (max-width: 768px) {
        top: initial;
        right: initial;
        left: 160px;
        bottom: 10px;
      }
    }

    .label-box {

      width: 135px;
      position: relative;
      background: #F2F2F2;
      cursor: pointer;
      border: 2px solid;
      border-top-color: #F2F2F2;
      border-left-color: #F2F2F2;
      border-bottom-color: #C9C4C0;
      border-right-color: #C9C4C0;
      padding: 2px 0 3px 13px;

      .label-box-title {
        position: relative;
        top: -2px;
        font-weight: 600;
        line-height: 15px;
        font-size: 13px;
        color: #a6c950;
        display: inline-block;
      }

      .label-box-icon {
        display: inline-block;

        svg {
          position: relative;
          top:3px;
        }
      }

      &:hover {
        background: #C9C4C0;
        transition: 0.3s ease-in-out;
        border-top-color: #C9C4C0;
        border-left-color: #C9C4C0;
        color: #59711d;

        .label-box-title {
          color: #59711d;
          transition: 0.3s ease-in-out;
        }

        .label-box-icon {
          svg {
            path {
              fill: #59711d !important;
              transition: 0.3s ease-in-out;
            }
          }
        }
      }


    }
  }

  textarea {
    &.form-control {
      width: 100%;
    }

    font-family: "Montserrat";
    background: rgba(242, 242, 242, 0.9);
    border: 1px solid #C9C4C0;
    box-sizing: border-box;
    padding: 23px 31px;
    font-weight: 300 !important;
    line-height: 18px;
    letter-spacing: 0;
    font-size: 18px;
    color: #77716D;
    border-left: 3px solid #a6c950;
    transition: 0.5s ease-in-out;

    &::placeholder {
      color: #77716D;
      transition: 0.5s ease-in-out;
    }
  }

  .error-text {
    opacity: 0;
    margin-top: 5px;
    color: #fb0000;
    position: absolute;
    font-size: 12px;
    bottom: 5px;
    right: 5px;
    transition: opacity 0.5s ease-in-out;

    @media (max-width: 550px) {
      font-size: 12px;
    }
  }

  &.error {
    input {
      &[type="text"] {
        border-left: 3px solid #fb0000;
      }
      &::placeholder {
        color: #fb0000;
      }
    }
    .textarea-field-box {
      border-left: 3px solid #fb0000;
      textarea {
        &::placeholder {
          color: #fb0000;
        }
      }
    }
    .error-text {
      opacity: 1;
    }
  }

  .accept-block {
    margin-top: 0;
    position: relative;
    background: rgba(242, 242, 242, 0.9);
    padding: 0 13px 0 13px;
    top: 5px;
    border-left: 3px solid #a6c950;
    height: 70px;
    display: flex;
    align-items: center;

    svg {
      top: 5px;
    }

    label {
      cursor: pointer;
      color: #77716D;
      font-family: "Montserrat";
      position: relative;
      z-index: 10;
      padding: 0;
      top: 0;
      display: flex;
      align-items: center;
      pointer-events: initial;

      span {
        @media (max-width: 768px) {
          font-size: 15px;
        }
      }

      a {
        color: #a6c950;

        &:hover {
          color: #59711d;
        }
      }
    }
  }
`;
