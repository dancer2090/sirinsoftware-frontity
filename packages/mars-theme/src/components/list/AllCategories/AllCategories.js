import React, { useState } from 'react';
import { connect } from 'frontity';
import Link from '../../link';
import {
  AllCategoriesContainer,
  AllCategoriesHeader,
  AllCategoriesContent,
  AllCategoriesItem,
} from './styles';

const AllCategories = ({ items, state, onChange }) => {
  const data = state.source.get(state.router.link);
  const nullActiveItem = (data.isCategory ? data.id : 0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(nullActiveItem);
  const handleItem = (id, name) => {
    setActiveItem(id);
    onChange(name);
    setIsOpen(false);
    // go to the new url here;
  };
  const category = items.find((c) => c.id === activeItem) || {};

  if (category.name !== 'All categories') {
    onChange(category.name);
  } else {
    onChange('All categories');
  }

  return (
    <AllCategoriesContainer>
      <AllCategoriesHeader
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        {category.name ? category.name : 'All categories'}
      </AllCategoriesHeader>
      <AllCategoriesContent isOpen={isOpen}>
        <Link link="/blog">
          <AllCategoriesItem onClick={() => handleItem(0, 'All categories')}>
            All Categories
          </AllCategoriesItem>
        </Link>
        {items.map(({ id, link, name }) => (
          <Link link={link.replace(state.frontity.adminUrl, state.frontity.url)} key={id}>
            <AllCategoriesItem onClick={() => handleItem(id, name)}>
              {name}
            </AllCategoriesItem>
          </Link>
        ))}
      </AllCategoriesContent>
    </AllCategoriesContainer>
  );
};
export default connect(AllCategories);
