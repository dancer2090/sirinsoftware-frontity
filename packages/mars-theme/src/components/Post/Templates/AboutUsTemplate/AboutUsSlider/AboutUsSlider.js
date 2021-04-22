import React from 'react';
import {
  Container,
  Swiper,
} from './styles';

const AboutUsSlider = ({ className, children }) => {
  const params = {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    spaceBetween: 0,
  };

  return (
    <Container className={className}>
      <Swiper {...params}>
        { children }
      </Swiper>
    </Container>
  );
};

export default AboutUsSlider;
