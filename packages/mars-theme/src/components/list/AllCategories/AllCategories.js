import React, { useState } from 'react';
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

const AllCategories = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const handleItem = (id) => {
    setActiveItem(id);
    setIsOpen(false);
    // go to the new url here;
  };
  const category = categories.find(c => c.id === activeItem) || {};
  return (
    <AllCategoriesContainer>
      <AllCategoriesHeader
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        {category.title}
      </AllCategoriesHeader>
      <AllCategoriesContent isOpen={isOpen}>
        {categories.map(({ id, title }) => (
          <AllCategoriesItem key={id} onClick={() => handleItem(id)}>
            {title}
          </AllCategoriesItem>
        ))}
      </AllCategoriesContent>
    </AllCategoriesContainer>
  );
}
export default AllCategories;
