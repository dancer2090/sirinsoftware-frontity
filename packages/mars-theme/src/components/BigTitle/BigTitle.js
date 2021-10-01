import React from 'react';
import { connect } from 'frontity';
import {
  BigTitleContainer,
  BigTitleBackground,
  BigTitleText,
} from './styles';

const BigTitle = ({
  title,
  bigTitleBackgroundColor,
  bigTitleTextColor,
  className,
  libraries,
  size = 'normal',
  bigTitle,
}) => {
  const Html2React = libraries.html2react.Component;
  const bigTitleText = bigTitle ? bigTitle : title;
  return (
    <BigTitleContainer className={className} size={size}>
      <BigTitleBackground bigTitleBackgroundColor={bigTitleBackgroundColor} size={size}>
        <Html2React html={bigTitleText} />
      </BigTitleBackground>
      <BigTitleText bigTitleTextColor={bigTitleTextColor} size={size}>
        <Html2React html={title} />
      </BigTitleText>
    </BigTitleContainer>
  );
};

export default connect(BigTitle);
