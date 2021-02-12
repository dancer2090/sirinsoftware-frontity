import React, { useEffect } from 'react';
import { connect } from 'frontity';
import BigFrameContainer from '../../../BigFrameContainer';
import Breadcrumbs from '../../../Breadcrumbs';
import Button from '../../../Button';
import Link from '../../../link';
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
  LinkBox,
} from './styles';

const ServicesTemplate = ({ state, actions, libraries }) => {
  const { imageUrlCheck, urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  // case data
  const caseStudies = state.source.data['/case-studies/'];
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const slidesStudies = caseStudies && caseStudies.items ? caseStudies.items.map((item) => state.source[item.type][item.id]) : [];

  const { acf = {}, title = {} } = post;
  const { rendered : mainTitle = "" } = title;
  const {
    main_image = { url : "" },
    main_text = "",
    services = null
  } = acf;
  const replaces = [state.frontity.url, state.frontity.adminUrl];

  const bigFrameTitle = main_text;
  const bigFrameImage = imageUrlCheck(main_image.url, urlsWithLocal);

  useEffect(() => {
    actions.source.fetch('/case-studies/');
  }, []);

  return (
    <Wrapper>
      <BigFrameContainer title={bigFrameTitle} image={bigFrameImage} />
      <Container>
        <Breadcrumbs links={[{ name: mainTitle, link: '#' }]} />
        <ServicesList>
          { services.map((item, index) => (
            <ServicesItem
              src={imageUrlCheck(item.image.url, urlsWithLocal)}
              key={`${index}_${item.name}`}
              reverse={index % 2 !== 0}
              color={index % 2 !== 0 ? 'yellow' : ''}
            >
              
                {item.link && item.link.url 
                  ? (
                  <h2>
                    <Link link={urlCheck(item.link.url, replaces)}>
                      {item.name}
                    </Link>
                  </h2>
                  ) : (
                  <h2>{item.name}</h2>
                  )
                }
              
              <p>{item.text}</p>
            {/*
              {item.link && item.link.url && (
                <LinkBox>
                  <Link link={item.link.url}>
                    <Button uppercase>{(item.link && item.link.title) ? item.link.title : 'Reacd more'}</Button>
                  </Link>
                </LinkBox>
              )}
            */}
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
                const { acf: acfItem = {} } = item;
                const { post_featured_image = {} } = acfItem;
                const checkPostFeaturedImage = imageUrlCheck(post_featured_image, urlsWithLocal);
                return (
                  <CaseItem
                    key={index}
                    src={checkPostFeaturedImage}
                  >
                    <CaseItemTitle>
                      <Html2React html={acfItem.portfolio_business_area} />
                    </CaseItemTitle>
                    <CaseContent link={urlCheck(item.link, replaces)}>
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

export default connect(ServicesTemplate);
