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
import Link from '../../../link';
import SubscribeForm from './subscribe-form/subscribe-form';
import CommentsForm from './comments-form';
import Image from '../../../../img/image.jpg';
import Breadcrumbs from '../../../Breadcrumbs';

const StandartTemplate = ({ state, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get a human readable date.
  const date = new Date(post.date);
  const monthDay = (date.getDate() < 10) ? (`0${date.getDate()}`) : date.getDate();
  const month = date.getMonth() + 1;
  const mothValue = month < 10 ? `0${month}` : month;

  const strDate = `${monthDay}.${mothValue}.${date.getFullYear()}`;
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  let category_id = 1;
  if (post.categories && post.categories.length > 0) {
    post.categories.map((item, index) => {
      category_id = item;
    });
  }
  const category = state.source.category[category_id];

  const dataMore = state.source.get('/blog/');

  console.log(post)
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
        <Breadcrumbs links={[
          { name: 'Blog', link: '/blog' },
          { name: category.name, link: `/blog/${category.name.toLocaleLowerCase()}` },
          { name: <Html2React html={post.title.rendered} />, link: '#' }]}
        />
        <Wrapper>
          <ArticleLeft>
            <ArticleLeftHeader>
              <Link link={category.link}>
                <BusinessButton size="large">{category.name}</BusinessButton>
              </Link>
              <DateBlock>{ strDate }</DateBlock>
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
              {dataMore.items.length > 0 && dataMore.items.map((p_item, index) => {
                const sub_post = state.source[p_item.type][p_item.id];
                const sp_title = sub_post.title.rendered;
                const link = (sub_post ? sub_post.link : '');
                return (
                  <PostItem href={link} key={sp_title}>
                    {sp_title}
                  </PostItem>
                );
              })}
            </PostList>
            <SubscribeForm />
          </Posts>
        </Wrapper>
      </Container>
    </WrapperPage>
  );
};
export default connect(StandartTemplate);
