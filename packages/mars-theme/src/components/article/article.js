import React from 'react';
import { connect } from "frontity";
import {
  Container,
  Wrapper,
  ArticleLeft,
  Posts,
  PostTitle,
  PostItem,
  ArticleLeftHeader,
  DateBlock,
  ArticleContent,
  SocialList,
  BigFrame,
  WrapperPage,
  BusinessButton,
  PostList
} from './styles';
import SubscribeForm from './subscribe-form/subscribe-form';
import CommentsForm from './comments-form';
import Image from '../../../img/image.jpg';

const Article = ({ state, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get a human readable date.
  const date = new Date(post.date);
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return (
    <WrapperPage>
      <BigFrame image={Image}>
        <Container>
          <h1>NB-IoT – a Novel IoT Standard</h1>
        </Container>
      </BigFrame>
      <Container>
        <Wrapper>
          <ArticleLeft>
            <ArticleLeftHeader>
              <BusinessButton size="large">Business</BusinessButton>
              <DateBlock>{ date.toDateString() }</DateBlock>
            </ArticleLeftHeader>
            <ArticleContent>
              <Html2React html={post.content.rendered} />
            </ArticleContent>
            <SocialList />
            <CommentsForm />
          </ArticleLeft>
          <Posts>
            <PostTitle>
              Related posts
            </PostTitle>
            <PostList>
              <PostItem>
                Main reasons to invest in IoT
              </PostItem>
              <PostItem>
                ARM SoC for server
                {' '}
                <br />
                {' '}
                applications
              </PostItem>
            </PostList>
            <SubscribeForm />
          </Posts>
        </Wrapper>
      </Container>
    </WrapperPage>
  )
}
export default connect(Article);
