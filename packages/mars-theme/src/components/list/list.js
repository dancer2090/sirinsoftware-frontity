import React, { useRef, useState } from 'react';
import { connect, decode } from 'frontity';
import Item from './Item';
import AllCAtegories from './AllCategories';
import { Container, Header, PaginationContainer, Text } from './styles';

const List = ({ state, actions }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const { totalPages } = state.source.get(state.router.link);

  const [loadMoreHidden, setLoadMoreHidden] = useState(false);

  let megaItems = data.items;
  let currentData;
  if (state.customSettings.pageNumber > 2) {
    for (let i = 2; i < state.customSettings.pageNumber; i++) {
      currentData = state.source.get(`${state.router.link}page/${i}`);
      if (currentData.isReady) {
        megaItems = megaItems.concat(currentData.items);
      }
    }
  }

  state.customSettings.customPostTotal = totalPages;
  const loadMore1 = () => {
    console.log(`${state.router.link}page/${state.customSettings.pageNumber}/`);
    actions.source.fetch(`${state.router.link}page/${state.customSettings.pageNumber}/`);
    state.customSettings.pageNumber += 1;
    if (state.customSettings.pageNumber - 1 === totalPages) setLoadMoreHidden(true);
    console.log(state);
  };
  const categories = [];
  state.customSettings.categories.map((cat, index) => {
    if(cat.parent === 1) categories.push(cat);
  })


  return (
    <Container>

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
      <PaginationContainer>
        <Text hidden={loadMoreHidden} onClick={() => loadMore1()}>Load more</Text>
      </PaginationContainer>
    </Container>
  );
};

export default connect(List);
