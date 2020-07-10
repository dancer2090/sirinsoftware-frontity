import React, { useEffect } from 'react';
import { connect } from 'frontity';
import BigFrameContainer from '../../../BigFrameContainer';
import {
  Wrapper,
  Container,
  ServicesList,
  ServicesItem,
  CaseContainer,
  CaseTitle,
  CaseSlider,
  CaseItem,
  CaseLink,
  CaseItemTitle,
  CaseContent,
} from './styles';

const ServicesTemplate = ({ state, actions, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  // case data
  const caseStudies = state.source.data['/case-studies/'];
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const slidesStudies = caseStudies && caseStudies.items ? caseStudies.items.map((item) => state.source[item.type][item.id]) : [];

  const { acf = {} } = post;
  const {
    main_image = { url : "" },
    main_text = "",
  } = acf;

  const bigFrameTitle = main_text;
  const bigFrameImage = main_image.url;

  useEffect(() => {
    actions.source.fetch('/case-studies/');
  }, []);

  return (
    <Wrapper>
      <BigFrameContainer title={bigFrameTitle} image={bigFrameImage} />
      <Container>
        <ServicesList>
          { acf.services.map((item, index) => (
            <ServicesItem
              src={item.image.url}
              key={index}
              reverse={index % 2 !== 0}
              color={index % 2 !== 0 ? 'yellow' : ''}
            >
              <h2>{item.name}</h2>
              <p>{item.text}</p>
            </ServicesItem>
          ))}
        </ServicesList>
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

export default connect(ServicesTemplate);
