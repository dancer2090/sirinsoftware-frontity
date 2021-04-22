import React from 'react';
import sprite from '../../../../../img/sprite.svg';

const SvgSprite = (props) => {
  const { className, name } = props;
  return (
    <svg className={className}>
      <use href={`${sprite}#${name}`} />
    </svg>
  );
};

export default SvgSprite;
