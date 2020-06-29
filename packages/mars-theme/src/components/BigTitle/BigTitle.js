import React from 'react';
import { connect } from 'frontity';
import {
  BigTitleContainer,
  BigTitleBackground,
  BigTitleText,
} from './styles';
const BigTitle = ({title, libraries, bigTitleBackgroundColor, bigTitleTextColor}) => {
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return (
    <BigTitleContainer>
      <BigTitleBackground bigTitleBackgroundColor={bigTitleBackgroundColor}>
        {title}
      </BigTitleBackground>
      <BigTitleText bigTitleTextColor={bigTitleTextColor}>
        {title}
      </BigTitleText>
    </BigTitleContainer>
  )
}

export default connect(BigTitle);