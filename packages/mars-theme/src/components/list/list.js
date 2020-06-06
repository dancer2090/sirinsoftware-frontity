import React from 'react';
import { connect, decode } from 'frontity';
import Item from './Item';
import Pagination from './pagination';
import AllCAtegories from './allCategories';
import { Container, Header } from './styles';

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}
          :
          {' '}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author:
          {' '}
          <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}
      <AllCAtegories />
      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }, index) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        return <Item key={item.id} item={item} index={index} />;
      })}
      <Pagination />
    </Container>
  );
};

export default connect(List);
