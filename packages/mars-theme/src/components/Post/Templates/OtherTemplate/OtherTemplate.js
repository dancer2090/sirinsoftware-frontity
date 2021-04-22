import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Container,
  PostTitle,
  Content,
  NotContent,
} from './styles';
import Breadcrumbs from '../../../Breadcrumbs';

const Other = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const {
    title = { rendered : '' },
    content = { rendered : '' }
  } = post;

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return (
    <Wrapper>
      <Container>
        <Breadcrumbs links={[
          { name: <Html2React html={title} />, link: '#' },
        ]}
        />
      </Container>
      <Container>
        <PostTitle>
          <Html2React html={title} />
        </PostTitle>
        <Content>
          {
            content.length === 0
              ? <NotContent>No content</NotContent>
              : <Html2React html={content} />
          }
        </Content>
      </Container>
    </Wrapper>
  );
};

export default connect(Other);
