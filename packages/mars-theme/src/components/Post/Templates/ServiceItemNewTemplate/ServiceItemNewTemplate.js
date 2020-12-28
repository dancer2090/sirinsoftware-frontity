import React, { useState } from 'react';
import { connect } from 'frontity';
import ReactResizeDetector from 'react-resize-detector';
import {
  Wrapper,
  Container,
  Banner,
  ContentWrapper,
  Content,
  Crumbs,
  GreenText,
  BlocksWrapper,
  CasesWrapper,
  CaseTitle,
  CaseContainer,
  ServicesContainer,
  CasesContainer,
  CaseContent,
  CaseItem,
  CaseItemTitle,
  CaseLink
} from './styles';
import Block from './Block';
import GreenBlock from './GreenBlock';
import Breadcrumbs from '../../../Breadcrumbs';

const ServiceItemNewTemplate = ({ state, libraries, scrollRef = null }) => {
  const [checkMobile, setCheckMobile] = useState(false);
  const { imageUrlCheck, urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  const replaces = [state.frontity.url, state.frontity.adminUrl];

  // case data
  const caseStudies = state.source.data['/case-studies/'];
  let slidesStudies = [];
  if(post && post.cases){
    slidesStudies = post.cases.map((item,k)=>{
      const resCase = {
        acf : {...item.acf},
        link : item.link,
        ...item.post
      }
      return resCase;
    });
  }
  
  caseStudies && caseStudies.items
    ? caseStudies.items.map((item) => state.source[item.type][item.id])
    : [];

  const { 
    acf = {},
    slug = ''
  } = post;
  
  const {
    mBackground = {},
    mImage = {},
    greenText = '',
    blocks = {},
    greenBlock = {},
    casesTitle = 'CASE STUDIES'
  } = acf;

  const bannerType = (slug === 'mobile-application-development-services' || slug === 'embedded-software-development-services' || slug === 'web-development-services') ? 'full' : 'short';
  let widthGreenBlockImage = (slug === 'mobile-application-development-services') ? '359px' : '100%';
  widthGreenBlockImage = (slug === 'web-development-services') ? '398px' : widthGreenBlockImage;
  let widthGreenBlockText = (slug === 'mobile-application-development-services' || slug === 'web-development-services') ? '100%' : '486px';
  
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const pіctureBg = mBackground && mBackground.sizes && mBackground.sizes.medium;
  const pіctureImg = mImage && mImage.sizes && mImage.sizes.medium;

  const onWidth = (width) => {
    if(width < 760) setCheckMobile(true);
    else  setCheckMobile(false);
  }
  return (
    <ReactResizeDetector handleWidth onResize={onWidth}>
      <Wrapper>
        <Banner
          url={imageUrlCheck(pіctureBg, urlsWithLocal)}
          button={acf.mButton}
          title={acf.mTitle}
          iconUrl={imageUrlCheck(pіctureImg, urlsWithLocal)}
          scrollRef={scrollRef}
          type={bannerType}
          marginTop='57'
        />

        <Container>
          <Breadcrumbs links={[
            { name: 'Services', link: '/services' },
            { name: <Html2React html={post.title.rendered} />, link: '#' },
          ]}
          />
          <ServicesContainer>
            <ContentWrapper>
              <GreenText>
                <Html2React html={greenText} />
              </GreenText>
              <BlocksWrapper>
                {blocks && blocks.map((block, key) => {
                  const textAlignPush = (slug === 'web-development-services' && key === 1) ? 'left' : null;
                  return <Block textAlignPush={textAlignPush} key={`${block.title}_${key}`} {...block} />
                })}
              </BlocksWrapper>
            </ContentWrapper>
            {checkMobile && <GreenBlock greenBlock={greenBlock}/>}
            <CasesContainer>
              {slidesStudies && slidesStudies.length > 0 && (
                <CaseContainer>
                  <CaseTitle>
                    <span>{casesTitle}</span>
                  </CaseTitle>
                  <CasesWrapper>
                    { slidesStudies.map((item, index) => {
                      const { acf = {} } = item;
                      const { post_featured_image = {} } = acf;
                      return (
                        <CaseItem
                          key={index}
                          bg={imageUrlCheck(post_featured_image, urlsWithLocal)}
                        >
                          <CaseItemTitle>
                            <Html2React html={acf.portfolio_business_area} />
                          </CaseItemTitle>
                          <CaseContent>
                            <Html2React html={item.post_title} />
                          </CaseContent>
                          <CaseLink link={urlCheck(item.link, replaces)}>Learn more</CaseLink>
                        </CaseItem>
                      );
                    })}
                  </CasesWrapper>
                </CaseContainer>
              )}
            </CasesContainer>
          </ServicesContainer>
          {!checkMobile && (
            <GreenBlock
              widthImage={widthGreenBlockImage}
              widthText={widthGreenBlockText}
              greenBlock={greenBlock}
            />
          )}
        </Container>
      </Wrapper>
    </ReactResizeDetector>
  );
};

export default connect(ServiceItemNewTemplate);
