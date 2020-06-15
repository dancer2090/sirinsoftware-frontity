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
import ServiceFrameImage from '../../../../img/service.jpg';
import ItemImg from '../../../../img/item-service.jpg';
import ItemImgTwo from '../../../../img/service-two.jpg';
import caseImg from '../../../../img/case-one.jpg';
import caseImgTwo from '../../../../img/case-two.jpg';

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

  console.log(slidesStudies)
  return (
    <Wrapper>
      <BigFrame>
        <BigImageBlock>
          <BigFrameImage src={post.acf.main_image.url} />
        </BigImageBlock>
        <BigFrameContent>
          <div>
            <Html2React html={post.acf.main_text} />
          </div>
        </BigFrameContent>
      </BigFrame>
      <Container>
        <ServicesList>
          { post.acf.services.map((item, index) => {
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
                return (
                  <CaseItem 
                    key={index}
                    src={item.acf.post_featured_image}>
                    <CaseItemTitle>Other Case Studies</CaseItemTitle>
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