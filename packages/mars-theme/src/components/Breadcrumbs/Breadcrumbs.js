import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Item,
} from './styles';

const Breadcrumbs = ({ links = [], className = '', libraries, state }) => {
  const { urlCheck } = libraries.func;
  const replaces = [state.frontity.url, state.frontity.adminUrl];
  return (
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
            <Item itemProp="item" link={item.link === '#' ? null : urlCheck(item.link, replaces)}>
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
  )};

export default connect(Breadcrumbs);
