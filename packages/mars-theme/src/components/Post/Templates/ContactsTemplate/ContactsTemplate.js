import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Container,
  Description,
  Crumbs,
} from './styles';
import Cards from './Cards';

const ContactsTemplate = ({ state, libraries }) => {
  // Get information about the current URL.
  const data = state.options;
  const dataContent = state.source.get(state.router.link);

  // Get the data of the post.
  const { acf = {} } = data;
  const post = state.source[dataContent.type][dataContent.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  const { offices_locations } = acf;
  return (
    <Container>
      <Crumbs links={[{ name: 'Contacts', link: '#' }]} />
      <Wrapper>
        <Description>
          <Html2React html={post.content.rendered} />
        </Description>
        <Cards offices_locations={offices_locations} />
      </Wrapper>
    </Container>
  );
};

export default connect(ContactsTemplate);
