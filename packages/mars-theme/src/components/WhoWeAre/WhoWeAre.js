import React from 'react';
import {
  WhoWeAreContainer,
  WhyWeAreTitle,
  WhoWeAreBlocks,
  WhoWeAreBlock,
  ImageBlock, 
  TextBlock
} from './styles';

const WhoWeAre = ({ items= {} }) => (
  <WhoWeAreContainer>
    <WhyWeAreTitle
      bigTitleBackgroundColor={'rgba(255,255,255,0.06)'}
      bigTitleTextColor={'#FFFFFF'}
      title={`Who we are`}
    />
    <WhoWeAreBlocks>
      {items && items.map((item, key) => {
        const {
          image = {},
          text = ''
        } = item;
        return (
          <WhoWeAreBlock key={`${key}_${text}`}>
            <ImageBlock src={image.url} />
            <TextBlock> {text} </TextBlock>
          </WhoWeAreBlock>
        )
      })}
    </WhoWeAreBlocks>
  </WhoWeAreContainer>
);

export default WhoWeAre;
