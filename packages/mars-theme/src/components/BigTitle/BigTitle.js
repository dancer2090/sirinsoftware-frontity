import React from 'react';
import { connect } from 'frontity';
import {
  BigTitleContainer,
  BigTitleBackground,
  BigTitleText,
} from './styles';

const BigTitle = ({
  title, bigTitleBackgroundColor, bigTitleTextColor,
}) => (
  <BigTitleContainer>
    <BigTitleBackground bigTitleBackgroundColor={bigTitleBackgroundColor}>
      {title}
    </BigTitleBackground>
    <BigTitleText bigTitleTextColor={bigTitleTextColor}>
      {title}
    </BigTitleText>
  </BigTitleContainer>
);

export default connect(BigTitle);
