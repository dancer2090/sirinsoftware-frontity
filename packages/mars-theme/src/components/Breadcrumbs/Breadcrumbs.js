import React from 'react';
import {
  Wrapper,
  Item,
} from './styles';

const Breadcrumbs = ({ links = [], className = '' }) => (
  <Wrapper>
    <ol
      itemScope
      className={`container ${className}`}
      itemType="https://schema.org/BreadcrumbList"
    >
      <li
        className="link-item"
        itemProp="itemListElement"
        itemScope
        itemType="https://schema.org/ListItem"
      >
        <Item itemProp="item" link="/">
          <span itemProp="name">
            Main
          </span>
        </Item>
        <meta itemProp="position" content="1" />
      </li>
      {
        links.map((item, index) => (
          <li
            className="link-item"
            key={index}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <Item itemProp="item" link={item.link === '#' ? null : item.link}>
              <span itemProp="name">
                {item.name}
              </span>
            </Item>
            <meta itemProp="position" content={index + 2} />
          </li>
        ))
      }
    </ol>
  </Wrapper>
);

export default Breadcrumbs;
