import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Container,
  Banner,
  ContentWrapper,
  Content,
  Crumbs,
} from './styles';
import {
  CaseContainer,
  CaseContent,
  CaseItem,
  CaseItemTitle,
  CaseLink,
  CaseSlider,
  CaseTitle,
} from '../ServicesTemplate/styles';
import Breadcrumbs from '../../../Breadcrumbs';

const ServiceItem = ({ state, libraries, scrollRef = null }) => {
  const { imageUrlCheck, urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];

  const replaces = [state.frontity.url, state.frontity.adminUrl];

  // case data
  const caseStudies = state.source.data['/case-studies/'];
  const slidesStudies = caseStudies && caseStudies.items
    ? caseStudies.items.map((item) => state.source[item.type][item.id])
    : [];

  const { acf = {} } = post;
  const { mBackground = {} } = acf;
  const { mImage = {} } = acf;
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const pіctureBg = mBackground && mBackground.sizes && mBackground.sizes.medium;
  const pіctureImg = mImage && mImage.sizes && mImage.sizes.medium;

  return (
    <Wrapper>
      <Banner
        url={imageUrlCheck(pіctureBg, urlsWithLocal)}
        button={acf.mButton}
        title={acf.mTitle}
        iconUrl={imageUrlCheck(pіctureImg, urlsWithLocal)}
        scrollRef={scrollRef}
      />

      <Container>
        <Breadcrumbs links={[
          { name: 'Services', link: '/services' },
          { name: <Html2React html={post.title.rendered} />, link: '#' },
        ]}
        />
      </Container>
      <Container>
        <ContentWrapper>
          <Content>
            <Html2React html={post.content.rendered} />
          </Content>
        </ContentWrapper>
      </Container>
      <Container>
        {slidesStudies && slidesStudies.length > 0 && (
          <CaseContainer>
            <CaseTitle data-text="case studies">
              <span>case studies</span>
            </CaseTitle>
            <CaseSlider>
              { slidesStudies.map((item, index) => {
                const { acf = {} } = item;
                const { post_featured_image = {} } = acf;
                return (
                  <CaseItem
                    key={index}
                    src={imageUrlCheck(post_featured_image, urlsWithLocal)}
                  >
                    <CaseItemTitle>
                      <Html2React html={acf.portfolio_business_area} />
                    </CaseItemTitle>
                    <CaseContent>
                      <Html2React html={item.title.rendered} />
                    </CaseContent>
                    <CaseLink link={urlCheck(item.link, replaces)}>Learn more</CaseLink>
                  </CaseItem>
                );
              })}
            </CaseSlider>
          </CaseContainer>
        )}
      </Container>
    </Wrapper>
  );
};

export default connect(ServiceItem);
