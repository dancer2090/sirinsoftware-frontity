import React from 'react';
import sprite from '../../../../img/sprite.svg';

const SvgSprite = (props) => {
    const { className, name } = props;
    return (
        <svg className={className} {...props}>
            <use href={`${sprite}#${name}`}></use>
        </svg>
    )
}

export default SvgSprite;