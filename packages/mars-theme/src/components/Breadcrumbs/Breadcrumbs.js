import React from 'react';
import {
  Container,
  Item,
  Li,
  Name,
} from './styles';

const Breadcrumbs = ({ links = [], className }) => (
  <Container
    itemscope
    className={className}
    itemtype="https://schema.org/BreadcrumbList"
  >
    <Li
      itemprop="itemListElement"
      itemscope
      itemtype="https://schema.org/ListItem"
    >
      <Item itemprop="item" link="/">
        <Name itemprop="name">
          Main
        </Name>
      </Item>
      <meta itemProp="position" content="1" />
    </Li>
    {
        links.map((item, index) => (
          <Li
            key={index}
            itemprop="itemListElement"
            itemscope
            itemtype="https://schema.org/ListItem"
          >
            <Item itemprop="item" link={item.link === '#' ? null : item.link}>
              <Name itemprop="name">
                {item.name}
              </Name>
            </Item>
            <meta itemProp="position" content={index + 2} />
          </Li>
        ))
      }
  </Container>
);

export default Breadcrumbs;
