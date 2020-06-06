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
    return (
      <AllCategoriesContainer>
        <AllCategoriesHeader
          onClick={() => {
            this.setState((state) => ({ isOpen: !state.isOpen }));
          }}
          isOpen={this.state.isOpen}
        >
          ALL CATEGORIES
        </AllCategoriesHeader>
        <AllCategoriesContent isOpen={this.state.isOpen}>
          {this.state.categories.map(({ id, title }) => (
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
