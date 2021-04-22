import React from 'react';
import { connect, Head } from 'frontity';
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
  Crumbs,
} from './styles';
import Link from '../../../link';
import SubscribeForm from './subscribe-form/subscribe-form';
import CommentsForm from './comments-form';
import Image from '../../../../img/image.jpg';
import Breadcrumbs from '../../../Breadcrumbs';
import logo from '../../../../img/logo.svg';
import imgSrc from '../../../list/Item/img-src';

const StandartTemplate = ({ state, libraries }) => {
  const { imageUrlCheck, urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  const replaces = [state.frontity.url, state.frontity.adminUrl];
  // Get a human readable date.
  const months = ['January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'];
  const date = new Date(post.date);
  const monthDay = (date.getDate() < 10) ? (`0${date.getDate()}`) : date.getDate();
  const month = date.getMonth() + 1;
  const mothValue = months[month - 1];

  const strDate = `${mothValue} ${monthDay}, ${date.getFullYear()}`;
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

  const item_image = post.acf && post.acf.blog_image && post.acf.blog_image.sizes && post.acf.blog_image.sizes.large;

  let bgImg = imgSrc;
  if (item_image) bgImg = imageUrlCheck(item_image, urlsWithLocal);

  const reg = new RegExp('"', 'g');
  const jsoncontent = post && post.content && post.content.rendered ? post.content.rendered.toString().replace(reg, "'") : '';
  return (
    <WrapperPage>
      <Head>
        <script type="application/ld+json">
          {`
              {
                "@context": "http://schema.org",
                "@type": "NewsArticle",
                "url": "${state.frontity.url}${state.router.link}",
                "publisher": {
                   "@type": "Organization",
                   "name": "Sirin Software",
                   "logo": "${logo}"
                },
                "headline": "${post.title.rendered}",
                "articleBody": "${jsoncontent}",
                "datePublished": "${post.date}",
                "dateModified": "${post.modified}"
             }
        `}
        </script>
      </Head>
      <BigFrame image={bgImg}>
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
              <Link link={urlCheck(category.link, replaces)}>
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
