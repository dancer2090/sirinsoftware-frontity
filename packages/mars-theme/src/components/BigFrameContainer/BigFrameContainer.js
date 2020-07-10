import React from 'react';
import { connect } from 'frontity';
import {
  BigFrame,
  BigImageBlock,
  BigFrameImage,
  BigFrameContent,
} from './styles';

const BigFrameContainer = ({ title, image, libraries }) => {
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return (
    <BigFrame>
      <BigImageBlock>
        <BigFrameImage src={image} />
      </BigImageBlock>
      <BigFrameContent>
        <div>
          <Html2React html={title} />
        </div>
      </BigFrameContent>
    </BigFrame>
  );
};

export default connect(BigFrameContainer);
