import React, { useState } from 'react';
import { connect, decode } from 'frontity';
import Loader from 'react-spinners/ClipLoader';
import Item from '../../../list/Item';
import AllCAtegories from '../../../list/AllCategories';
import {
  Container,
  Header,
  PaginationContainer,
  Text,
} from '../../../list/styles';
import Breadcrumbs from '../../../Breadcrumbs';
import { Wrapper, ContainerWrapper } from './styles';

const BlogListTemplate = ({ state, actions }) => {
  const [categoryName, setCategoryName] = useState('All categories');
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
        if ((i + 1) === state.customSettings.pageNumber) state.customSettings.blogLoadMore = false;
      }
    }
  }

  state.customSettings.customPostTotal = totalPages;
  const loadMore1 = () => {
    state.customSettings.blogLoadMore = true;
    actions.source.fetch(`${state.router.link}page/${state.customSettings.pageNumber}/`);
    state.customSettings.pageNumber += 1;
    if (state.customSettings.pageNumber - 1 === totalPages) setLoadMoreHidden(true);
  };

  const categories = [];
  if (state.customSettings.categories.length > 0) {
    state.customSettings.categories.map((cat, index) => {
      if (cat.parent === 1) categories.push(cat);
    });
  }

  return (
    <Wrapper>
      <ContainerWrapper>
        <Breadcrumbs links={
          categoryName === 'All categories' || categoryName === undefined
            ? [{ name: 'Blog', link: '#' }]
            : [{ name: 'Blog', link: '/blog' }, { name: categoryName, link: '#' }]
        }
        />
      </ContainerWrapper>
      <Container>
        {/* If the list is for a specific author, we render a title. */}
        {data.isAuthor && (
          <Header>
            Author:
            {' '}
            <b>{decode(state.source.author[data.id].name)}</b>
          </Header>
        )}
        <AllCAtegories items={categories} onChange={(value) => setCategoryName(value)} />
        {/* Iterate over the items of the list. */}
        {megaItems.map(({ type, id }, index) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return <Item key={item.id} item={item} index={index} />;
        })}
        <PaginationContainer when={state.customSettings.blogLoadMore}>
          <Loader
            color="#F8710F"
            radius={0}
            margin="3px"
            width={4}
            height={24}
          />
          <Text hidden={loadMoreHidden} onClick={() => loadMore1()}>Load more</Text>
        </PaginationContainer>
      </Container>
    </Wrapper>
  );
};

export default connect(BlogListTemplate);
