import { styled } from 'frontity';

export const Wrapper = styled.div`
  background: #fff;
  width: 100%;

  .container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 205px;

    @media screen and (max-width: 1450px) {
      padding-left: 30px;
      padding-right: 30px;
      margin-left: auto;
      margin-right: auto;
      max-width: 1090px;
    }
  }
`;

export const Banner = styled.div`
  background-image: url(${({ url }) => url});
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 200px;
  padding-top: 1px;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    background-color: #a6c950;
  }

  .container {
    position: relative;
    z-index: 1;
    pointer-events: none;
    width: 100%;
  }

  h1 {
    line-height: 80px;
    font-size: 55px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    width: 100%;
    color: white !important;
    margin: 0;
    padding-top: 65px;
    padding-bottom: 65px;
    z-index: 1;
    pointer-events: none;
​
    @media screen and (max-width: 992px) {
      font-size: 48px;
      line-height: 60px;
    }
​
    @media screen (max-width: 550px) {
      font-size: 28px;
      line-height: 36px;
    }
  }
`;

export const FilterContainer = styled.div`
  ul {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
    padding-bottom: 35px;
    list-style: none;
    padding-left: 0;

    li {
      cursor: pointer;
      padding: 10px 14px;

      a {
        font-weight: normal;
        font-size: 14px;
        line-height: 22px;
        display: flex;
        align-items: center;
        color: #000000;
        background: #F0F0F0;
        border-radius: 6px;
        text-transform: none;
        padding: 13px 18px;

        &.selected {
          background: #D1D1D1;
        }
      }
    }
  }
`;