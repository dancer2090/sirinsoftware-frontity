import { css, styled } from 'frontity';

export const globalStyles = css`

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Belleza', sans-serif;
  }
  button {
    font-weight: 800;
    font-family: Bellezaans-serif;
  }
  input, textarea {
    font-weight: 400;
    font-family: Belleza, sans-serif;
  }
  a {
    text-decoration: none;
    &:visited {
      text-decoration: none;
    }
  }


  ::-webkit-scrollbar {
    width: 7px;
  }
  
  ::-webkit-scrollbar-track {
    background: #ddd;
  }
  
  ::-webkit-scrollbar-thumb {
    /* background: #666;  */
    background: rgba(0, 0, 0, 0.1);
  }
  .grecaptcha-badge { visibility: hidden; }

  .greentext-center {
    max-width: 485px;
    text-align: center;
    margin: 0 auto;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

export const Space = styled.div`
  height: ${props => props.transparent ? '0px' : '76px'};
`;


export const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1f38c5;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffffff;
  position: relative;
  min-height: 400px;
`;
