import React from 'react';
import {
  WhoWeAreContainer,
  Title,
  WhoWeAreBlocks,
  WhoWeAreBlock,
  ImageBlock,
  TextBlock
} from './styles';

const WhoWeAre = ({ items= {} }) => (
  <WhoWeAreContainer>
    <Title title={`Who we are`} />
    <WhoWeAreBlocks>
      {items && items.map((item, key) => {
        const {
          icon = {},
          text = ''
        } = item;
        return (
          <WhoWeAreBlock key={`${key}_${text.slice(1,4)}`}>
            <ImageBlock src={icon.url} />
            <TextBlock> {text} </TextBlock>
          </WhoWeAreBlock>
        )
      })}
    </WhoWeAreBlocks>
  </WhoWeAreContainer>
);

export default WhoWeAre;
