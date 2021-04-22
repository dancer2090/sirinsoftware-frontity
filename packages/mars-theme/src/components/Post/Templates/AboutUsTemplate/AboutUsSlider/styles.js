import { styled } from 'frontity';
import Slider from 'react-id-swiper';
import Style from 'swiper/css/swiper.css';

export const Container = styled.div`
  ${Style}

  .swiper-pagination {
    display: block;
    position: relative;
    left: initial !important;
    bottom: initial !important;
    margin-top: 30px;

    .swiper-pagination-bullet {
      width: 10px;
      height: 10px;
      border-radius: 0;
      margin: 0 5px !important;
      opacity: 1;
      background: #C4C4C4;
      outline: none;
      &:active {
        outline: none;
      }

      &-active {
        background: #216628;
      }
    }
  }

  @media screen and (max-width: 991px) {
    .swiper-pagination {
      margin-top: 41px;
      .swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        margin: 0 15px !important;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .swiper-pagination {
      margin-top: 41px;
      .swiper-pagination-bullet {
        width: 14px;
        height: 14px;
        margin: 0 13px !important;
      }
    }
  }
`;

export const Swiper = styled(Slider)``;
