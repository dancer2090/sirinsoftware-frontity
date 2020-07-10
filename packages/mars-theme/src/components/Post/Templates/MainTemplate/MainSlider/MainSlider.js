import React from 'react';
import {
  Container,
  Swiper,
} from './styles';

const MainSlider = ({ children }) => {
  const params = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    spaceBetween: 0,
    breakpoints: {
      768: {
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Container>
      <Swiper {...params}>
        { children }
      </Swiper>
    </Container>
  );
};

export default MainSlider;
