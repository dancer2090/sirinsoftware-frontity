import React, { useState } from 'react';
import { connect } from 'frontity';
import Link from '../../link';
import {
  AllCategoriesContainer,
  AllCategoriesHeader,
  AllCategoriesContent,
  AllCategoriesItem,
} from './styles';


const categories = [
  { id: 0, title: 'ALL Categories' },
  { id: 1, title: 'BUSNESS' },
  { id: 2, title: 'EVENTS' },
  { id: 3, title: 'NEWS' },
  { id: 4, title: 'SERVICES' },
  { id: 5, title: 'TECHNOLOGY' },
];

const AllCategories = ({items, state}) => {
  const data = state.source.get(state.router.link);
  const nullActiveItem = (data.isCategory ? data.id : 0);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(nullActiveItem);
  const handleItem = (id) => {
    setActiveItem(id);
    setIsOpen(false);
    // go to the new url here;
  };
  const category = items.find((c) => c.id === activeItem) || {};

  return (
    <AllCategoriesContainer>
      <AllCategoriesHeader
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        {category.name ? category.name : "All categories"}
      </AllCategoriesHeader>
      <AllCategoriesContent isOpen={isOpen}>
        <Link link="/blog">
          <AllCategoriesItem onClick={() => handleItem(0)}>
              All Categories
          </AllCategoriesItem>
        </Link>
        {items.map(({ id, link, name }) => (
          <Link link={link.replace(state.frontity.adminUrl, state.frontity.url)} key={id}>
            <AllCategoriesItem onClick={() => handleItem(id)}>
              {name}
            </AllCategoriesItem>
          </Link>
        ))}
      </AllCategoriesContent>
    </AllCategoriesContainer>
  );
};
export default connect(AllCategories);
