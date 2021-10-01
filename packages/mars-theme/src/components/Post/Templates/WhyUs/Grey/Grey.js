import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  ImageContainer,
  Text,
  Image,
  List,
  Li,
} from './styles';

const Grey = ({ libraries, textWithImage = {} }) => {
  const { text = '', image = {}, list = [] } = textWithImage;
  const { url = '' } = image;
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return (
    <Wrapper>
      <Text>
        <Html2React html={text} />
        {list && (
          <List>
            {list.map(item => (
              <Li>{item.text}</Li>
            ))}
          </List>
        )}
      </Text>
      <ImageContainer>
        <Image src={url} />
      </ImageContainer>
    </Wrapper>
  );
};

export default connect(Grey);
