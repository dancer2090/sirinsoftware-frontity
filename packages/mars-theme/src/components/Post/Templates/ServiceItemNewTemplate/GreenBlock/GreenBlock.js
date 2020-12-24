import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Title,
  ContentImage,
  Content,
  ContentWrapper,
  ContentImageWrapper
} from './styles';

const GreenBlock = ({
  state,
  libraries,
  greenBlock
}) => {
  const { imageUrlCheck, urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;

  const replaces = [state.frontity.url, state.frontity.adminUrl];

  const {
    image = {},
    text = '',
    title = ''
  } = greenBlock;
  const {
    url : imageUrl = '',
    sizes : imageSizes = {}
  } = image;
  const {
    medium = ''
  } = imageSizes;

  console.log(greenBlock)

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  return (
    <>
    <Wrapper>
      <ContentWrapper>
        {title && <Title>{title}</Title>}
        <Content>
          <Html2React html={text} />
        </Content>
      </ContentWrapper>
      {image && imageUrl && (
        <ContentImageWrapper>
          <ContentImage width={image.width} height={image.height} src={imageUrlCheck(imageUrl, urlsWithLocal)}/>
        </ContentImageWrapper>
       )}
    </Wrapper>
    </>
  );
};

export default connect(GreenBlock);
