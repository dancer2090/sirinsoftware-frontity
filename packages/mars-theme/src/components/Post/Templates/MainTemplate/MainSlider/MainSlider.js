import React from 'react';
import {
  Container,
  Swiper,
} from './styles';

const MainSlider = ({ className, children }) => {
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
    <Container className={className}>
      <Swiper {...params}>
        { children }
      </Swiper>
    </Container>
  );
};

export default MainSlider;
