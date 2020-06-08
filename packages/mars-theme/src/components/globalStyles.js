import { css, styled } from 'frontity';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap');
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
  button {
    font-weight: 800;
    font-family: Montserrat, sans-serif;
  }
  input, textarea {
    font-weight: 400;
    font-family: Montserrat, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
`;

export const Space = styled.div`
  height: 76px;
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
`;
