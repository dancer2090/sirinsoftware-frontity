import React from 'react';
import { connect } from 'frontity';
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
  PostList,
} from './styles';
import SubscribeForm from './subscribe-form/subscribe-form';
import CommentsForm from './comments-form';
import Image from '../../img/image.jpg';

const Article = ({ state, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get a human readable date.
  const date = new Date(post.date);
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  let category_id = 1;
  if(post.categories && post.categories.length>0){
    post.categories.map((item, index)=>{
      category_id = item;
    });
  }
  const category = state.source['category'][category_id];

  const dataMore = state.source.get('/blog/');
  console.log(dataMore);

  return (
    <WrapperPage>
      <BigFrame image={Image}>
        <Container>
          <h1>
            <Html2React html={post.title.rendered} />
          </h1>
        </Container>
      </BigFrame>
      <Container>
        <Wrapper>
          <ArticleLeft>
            <ArticleLeftHeader>
              <BusinessButton size="large">{category.name}</BusinessButton>
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
              {dataMore.items.length>0 && dataMore.items.map((p_item,index)=>{
                const sub_post = state.source[p_item.type][p_item.id];
                const sp_title = sub_post.title.rendered;
                return (
                  <PostItem href={sub_post.link} key={sp_title}>
                    {sp_title}
                  </PostItem>
                )
              })}
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
  );
};
export default connect(Article);
