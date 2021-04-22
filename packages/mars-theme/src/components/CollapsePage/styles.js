import { styled } from 'frontity';

export const Container = styled.div`
  max-width: 960px;
  width: 100%;
  margin: 40px auto 20px auto;
  padding-bottom: 30px;

  @media screen and (max-width: 991px) {
    max-width: 728px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    padding: 0 15px 20px 15px;
  }

  * {
    box-sizing: border-box;
  }
`;
