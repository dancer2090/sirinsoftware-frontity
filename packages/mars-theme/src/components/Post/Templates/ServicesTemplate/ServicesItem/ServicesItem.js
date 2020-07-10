import React from 'react';
import {
  Item,
  Content,
  Frame,
} from './styles';

const ServicesItem = ({
  className, reverse = false, children, color, src,
}) => (
  <Item
    className={className}
    reverse={reverse}
  >
    <Content color={color}>
      { children }
    </Content>
    <Frame src={src} />
  </Item>
);

export default ServicesItem;
