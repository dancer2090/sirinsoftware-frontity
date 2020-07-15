import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Container,
  Banner,
  ContentWrapper,
  Content,
} from './styles';
import Breadcrumbs from '../../../Breadcrumbs';
import {
  CaseContainer,
  CaseContent,
  CaseItem,
  CaseItemTitle,
  CaseLink,
  CaseSlider,
  CaseTitle,
} from '../ServicesTemplate/styles';

const ServiceItem = ({ state, libraries, scrollRef = null }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];

  // case data
  const caseStudies = state.source.data['/case-studies/'];
  const slidesStudies = caseStudies && caseStudies.items
    ? caseStudies.items.map((item) => state.source[item.type][item.id])
    : [];

  const { acf = {} } = post;
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return (
    <Wrapper>
      <Banner
        url={acf.mBackground.link}
        button={acf.mButton}
        title={acf.mTitle}
        iconUrl={acf.mImage.link}
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
                    src={post_featured_image}
                  >
                    <CaseItemTitle>
                      <Html2React html={acf.portfolio_business_area} />
                    </CaseItemTitle>
                    <CaseContent>
                      <Html2React html={item.title.rendered} />
                    </CaseContent>
                    <CaseLink link={item.link}>Learn more</CaseLink>
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
