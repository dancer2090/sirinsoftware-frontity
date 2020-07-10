import React from 'react';
import {
  Container,
  Swiper,
} from './styles';

const CaseSlider = ({ className, children }) => {
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
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
    },
  };

  return (
    <Container>
      <Swiper className={className} {...params}>
        { children }
      </Swiper>
    </Container>
  );
};

export default CaseSlider;
