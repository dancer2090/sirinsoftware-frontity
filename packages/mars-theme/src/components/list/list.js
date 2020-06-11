import React, { useRef, useState } from 'react';
import { connect, decode } from 'frontity';
import Item from './Item';
import Pagination from './pagination';
import AllCAtegories from './AllCategories';
import { Container, Header } from './styles';

const List = ({ state, actions }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const { totalPages } = state.source.get(state.router.link);

  const [loadMoreHidden, setLoadMoreHidden] = useState(false);

  let megaItems = data.items.slice(1);
  let currentData;
  if (state.customSettings.pageNumber > 2) {
    for (let i = 2; i < state.customSettings.pageNumber; i++) {
      currentData = state.source.get(`/blog/page/${i}`);
      if (currentData.isReady) {
        megaItems = megaItems.concat(currentData.items);
      }
    }
  }

  state.customSettings.customPostTotal = totalPages;
  const loadMore1 = () => {
    actions.source.fetch(`/blog/page/${state.customSettings.pageNumber}/`);
    state.customSettings.pageNumber += 1;
    if (state.customSettings.pageNumber - 1 === totalPages) setLoadMoreHidden(true);
  };
  const categories = [];
  state.customSettings.categories.map((cat, index) => {
    if(cat.parent === 1) categories.push(cat);
  })
  console.log(categories);


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
      <AllCAtegories items={categories}/>
      {/* Iterate over the items of the list. */}
      {megaItems.map(({ type, id }, index) => {
        const item = state.source[type][id];
        // Render one Item component for each one.
        return <Item key={item.id} item={item} index={index} />;
      })}
      <button hidden={loadMoreHidden} onClick={() => loadMore1()}>Load more</button>
      <Pagination />
    </Container>
  );
};

export default connect(List);
