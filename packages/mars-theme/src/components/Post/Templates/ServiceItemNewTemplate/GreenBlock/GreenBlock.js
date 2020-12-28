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
  greenBlock,
  widthText='100%',
  widthImage='100%',
}) => {
  const { imageUrlCheck, urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;

  const replaces = [state.frontity.url, state.frontity.adminUrl];

  const {
    image = {},
    text = '',
    title = '',
    paddingLeft = '50',
    paddingRight = '50',
  } = greenBlock;
  const {
    url : imageUrl = '',
    sizes : imageSizes = {}
  } = image;
  const {
    medium = ''
  } = imageSizes;

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  return (
    <>
    <Wrapper>
      <ContentWrapper widthText={widthText} paddingLeft={paddingLeft} paddingRight={paddingRight}>
        {title && <Title>{title}</Title>}
        <Content>
          <Html2React html={text} />
        </Content>
      </ContentWrapper>
      {image && imageUrl && (
        <ContentImageWrapper widthImage={widthImage}>
          <ContentImage width={image.width} height={image.height} src={imageUrlCheck(imageUrl, urlsWithLocal)}/>
        </ContentImageWrapper>
       )}
    </Wrapper>
    </>
  );
};

export default connect(GreenBlock);
