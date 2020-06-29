import { styled } from 'frontity';

export const BigFrame = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 500px;
  margin-bottom: 100px;

  @media screen and (max-width: 1200px) {
    height: 400px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 991px) {
    height: 350px;
    margin-bottom: 75px;
  }

  @media screen and (max-width: 767px) {
    height: fit-content;
    margin-bottom: 31px;
  }
`;

export const BigImageBlock = styled.div`
  height: 100%;
  width: 50%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 250px;
  }
`;


export const BigFrameImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BigFrameContent = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(271.13deg, #FFB03A 3.6%, #FF9233 97.69%);
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.15);
  padding: 10px 43px;
  display: flex;
  align-items: center;
  
  div {
    max-width: 420px;
    width: 100%;
    font-family: 'Open Sans';
    font-size: 18px;
    line-height: 28px;
    color: #FFFFFF;
  }

  @media screen and (max-width: 991px) {
    padding: 10px 20px;

    div {
      font-size: 14px;
      line-height: 20px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 36px 10px;
    min-height: 250px;
  }
`;