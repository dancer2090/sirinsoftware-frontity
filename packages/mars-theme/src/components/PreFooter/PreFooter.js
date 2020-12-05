import React from 'react';
import { connect } from 'frontity';
import {
  Container,
  Wrapper,
  PreFooterTopText,
  PreFooterBottomText,
} from './styled';

const PreFooter = ({ data = {}, libraries }) => {
  const {
    bg = {},
    textTop = '',
    textBottom = ''
  } = data;
  const {
    url : bgUrl = ''
  } = bg;
  const Html2React = libraries.html2react.Component;

  return (
    <Wrapper bg={bgUrl}>
      <Container>
        <PreFooterTopText>
            <Html2React html={textTop} />
        </PreFooterTopText>
        <PreFooterBottomText>
            <Html2React html={textBottom} />
        </PreFooterBottomText>
      </Container>
    </Wrapper>
  );
};

export default connect(PreFooter);
