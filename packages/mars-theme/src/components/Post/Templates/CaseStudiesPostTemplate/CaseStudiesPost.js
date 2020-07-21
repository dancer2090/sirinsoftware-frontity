import React, { useEffect } from 'react';
import { connect } from 'frontity';

import {
  ContainerFrame,
  Wrapper,
  FrameContent,
  FrameTitle,
  Container,
  ClientBlock,
  ClientItem,
  ClientTitle,
  ClientDescription,
  ContentWrapper,
  Content,
  PostsContent,
  PostTitle,
  Post,
  CardSet,
  Title,
  Text,
  BusinesCard,
  CaseStudiesSlider,
  ContainerSlider,
  CaseItem,
  CaseLink,
  CaseItemTitle,
  CaseContent,
} from './styles';
import Breadcrumbs from '../../../Breadcrumbs';

const CaseStudiesPost = ({ actions, state, libraries }) => {
  const data = state.source.get(state.router.link);
  const caseStudies = state.source.data['/case-studies/'];
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const slidesStudies = caseStudies.items.map((item) => state.source[item.type][item.id]);

  const post = state.source[data.type][data.id];
  const { acf = {} } = post;
  const {
    post_featured_image = '',
    archive_featured_image = {},
    portfolio_client_title = '',
    portfolio_business_area = '',
    portfolio_geography = '',
    embedded_linux_technology_list = [],
    portfolio_client_background = '',
    portfolio_business_challenge = '',
    portfolio_solution = '',
    portfolio_value_delivered = '',
  } = acf;

  let category_id = 0; // значение по умолчанию
  if (post['portfolio-cat'] && post['portfolio-cat'].length > 0) {
    post['portfolio-cat'].map((item, index) => {
      category_id = item; // перебираем массив с таксономиями поста
    });
  }

  const category = state.source['portfolio-cat'][category_id]; // берем таксономию
  const category_slug = (category && category !== {} ? category.slug : '');

  useEffect(() => {
    actions.source.fetch(`/case-studies-cat/${category_slug}/`);
  }, []);

  const { items = slidesStudies } = state.source.get(`/case-studies-cat/${category_slug}/`);

  const postsRight = items.map((item) => state.source[item.type][item.id]);

  return (
    <Wrapper>
      <ContainerFrame src={post_featured_image}>
        <FrameContent>
          <FrameTitle>
            <Html2React html={post.title.rendered} />
          </FrameTitle>
        </FrameContent>
      </ContainerFrame>

      <Container>
        <Breadcrumbs links={[
          { name: 'Case Studies', link: '/case-studies' },
          { name: <Html2React html={post.title.rendered} />, link: '#' }]}
        />
        <ClientBlock>
          <ClientItem>
            <ClientTitle>
              Client
            </ClientTitle>
            <ClientDescription>
              <Html2React html={portfolio_client_title} />
            </ClientDescription>
          </ClientItem>
          <ClientItem>
            <ClientTitle>
              Business area
            </ClientTitle>
            <ClientDescription>
              <Html2React html={portfolio_business_area} />
            </ClientDescription>
          </ClientItem>
          <ClientItem>
            <ClientTitle>
              GEOGRAPHY
            </ClientTitle>
            <ClientDescription>
              <Html2React html={portfolio_geography} />
            </ClientDescription>
          </ClientItem>
        </ClientBlock>

        <ContentWrapper>
          <Content>
            <CardSet
              title="Technology set"
              nameSvg="set-one"
              list={embedded_linux_technology_list}
            />

            {
              portfolio_client_background
                && (
                <Title nameSvg="portfolio">
                  Clients
                  {' '}
                  <br />
                  background
                </Title>
                )
            }

            <Text>
              <Html2React html={portfolio_client_background} />
            </Text>

            <BusinesCard>
              <Html2React html={portfolio_business_challenge} />
            </BusinesCard>

            <Title nameSvg="solution">
              Solution
            </Title>

            <Text>
              <Html2React html={portfolio_solution} />
            </Text>

            <CardSet
              title="Value delivered"
              nameSvg="set-two"
            >
              <Html2React html={portfolio_value_delivered} />
            </CardSet>
          </Content>

          <PostsContent>
            <PostTitle>
              Linux, embedded and IOT
            </PostTitle>
            {
              postsRight.map((item, index) => {
                const {
                  acf = {},
                  link = '',
                  title = { rendered: '' },
                } = item;
                const { category_for_green_line = '' } = acf;
                return (
                  <Post
                    title={category_for_green_line}
                    href={link}
                    key={index}
                    index={postsRight.length - index}
                  >
                    <Html2React html={title.rendered} />
                  </Post>
                );
              })
            }
          </PostsContent>
        </ContentWrapper>

        <ContainerSlider>
          <CaseStudiesSlider>
            { slidesStudies.map((item, index) => {
              const {
                acf = {},
                title = { rendered: '' },
                link = '',
              } = item;
              const { post_featured_image = {} } = acf;
              return (
                <CaseItem
                  key={index}
                  src={post_featured_image}
                >
                  <CaseItemTitle>
                    <Html2React html={portfolio_business_area} />
                  </CaseItemTitle>
                  <CaseContent link={link}>
                    <Html2React html={title.rendered} />
                  </CaseContent>
                  <CaseLink link={link}>Learn more</CaseLink>
                </CaseItem>
              );
            })}
          </CaseStudiesSlider>
        </ContainerSlider>
      </Container>
    </Wrapper>
  );
};

export default connect(CaseStudiesPost);
