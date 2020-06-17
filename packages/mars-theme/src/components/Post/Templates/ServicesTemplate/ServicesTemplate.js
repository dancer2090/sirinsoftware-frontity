import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Container,
  BigFrame,
  BigImageBlock,
  BigFrameImage,
  BigFrameContent,
  ServicesList,
  ServicesItem,
  CaseContainer,
  CaseTitle,
  CaseSlider,
  CaseItem,
  CaseLink,
  CaseItemTitle,
  CaseContent
} from './styles';

const ServicesTemplate = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  // case data
  const caseStudies = state.source.data['/case-studies/'];
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const slidesStudies = caseStudies.items.map(item => {
    return state.source[item.type][item.id];
  });

  const { acf = {} } = post;

  return (
    <Wrapper>
      <BigFrame>
        <BigImageBlock>
          <BigFrameImage src={acf.main_image.url} />
        </BigImageBlock>
        <BigFrameContent>
          <div>
            <Html2React html={acf.main_text} />
          </div>
        </BigFrameContent>
      </BigFrame>
      <Container>
        <ServicesList>
          { acf.services.map((item, index) => {
            return (
              <ServicesItem 
                src={item.image.url}
                key={index}
                reverse={index % 2 !== 0 ? true : false}
                color={index % 2 !== 0 ? 'yellow' : ''}>
                <h2>{item.name}</h2>
                <p>{item.text}</p>
              </ServicesItem>
            )
          })}
        </ServicesList>
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
                    src={post_featured_image}>
                    <CaseItemTitle>
                    <Html2React html={acf.portfolio_business_area} />
                    </CaseItemTitle>
                    <CaseContent>
                      <Html2React html={item.title.rendered} />
                    </CaseContent>
                    <CaseLink href={item.link}>Learn more</CaseLink>
                  </CaseItem>
                )
              })
            }
          </CaseSlider>
        </CaseContainer>
      </Container>
    </Wrapper>
  )
}

export default connect(ServicesTemplate);