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
import CollapseList from '../FaqTemplate/CollapseList';
import { filterQuestions } from '../../../../utils/filterQuestions';

const Other = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const faqArray = filterQuestions(state, data.id);

  return (
    <Wrapper>
      <Container>
        <Breadcrumbs links={[
          { name: <Html2React html={post.title.rendered} />, link: '#' }
        ]} />
      </Container>
      <Container>
        <PostTitle>
          <Html2React html={post.title.rendered} />
        </PostTitle>
        <Content>
          {
            post.content.rendered.length === 0
            ? <NotContent>No content</NotContent>
            : <Html2React html={post.content.rendered} />
          }
        </Content>
      </Container>
      <Container>
        <CollapseList elements={faqArray} libraries={libraries} />
      </Container>
    </Wrapper>
  )
}
  
export default connect(Other);