import React from 'react';
import {
  AllCategoriesContainer,
  AllCategoriesHeader,
  AllCategoriesContent,
  AllCategoriesItem,
} from './styles';

class AllCategories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [{ id: 0, title: 'BUSNESS' },
        { id: 1, title: 'EVENTS' },
        { id: 2, title: 'NEWS' },
        { id: 3, title: 'SERVICES' },
        { id: 4, title: 'TECHNOLOGY' }],
      isOpen: false,
    };
  }

  render() {
    const { categories, isOpen } = this.state;
    return (
      <AllCategoriesContainer>
        <AllCategoriesHeader
          oonClick={() => {
            this.setState(({ state }) => ({ isOpen: !state.isOpen }));
          }}
          isOpen={isOpen}
        >
          ALL CATEGORIES
        </AllCategoriesHeader>
        <AllCategoriesContent isOpen={isOpen}>
          {categories.map(({ id, title }) => (
            <AllCategoriesItem key={id}>
              {title}
            </AllCategoriesItem>
          ))}
        </AllCategoriesContent>
      </AllCategoriesContainer>
    );
  }
}
export default AllCategories;
