import React from 'react';
import { connect } from 'frontity';
import {
  Container,
  PageContent,
  Title,
} from './styles';

const FullPage = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const page = state.source[data.type][data.id];

  const Html2React = libraries.html2react.Component;

  return (
    <Container>
      <PageContent>
        <Title><Html2React html={page.title.rendered} /></Title>
        <Html2React html={page.content.rendered} />
      </PageContent>
    </Container>
  );
};

export default connect(FullPage);
