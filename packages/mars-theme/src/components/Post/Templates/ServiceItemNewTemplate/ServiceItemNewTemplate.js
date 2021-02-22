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
  CaseLink,
  BannerIndustry
} from './styles';
import Block from './Block';
import GreenBlock from './GreenBlock';
import FooterBg from './FooterBg';
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
    slug = '',
    parent = 0
  } = post;
  
  const {
    mBackground = {},
    mImage = {},
    greenText = '',
    blocks = {},
    greenBlock = {},
    casesTitle = 'CASE STUDIES',
    fBg = {}
  } = acf;

  
  const addGreenBlockProps = {
    widthGreenBlockImage : '100%',
    widthGreenBlockText : '486px',
    spanWidth : null
  };

  switch(slug){
    case 'mobile-application-development-services':
      addGreenBlockProps.widthText ='100%';
      break;
    case 'embedded-software-development-services':
      addGreenBlockProps.bannerType = 'full';
      break;
    case 'web-development-services':
      addGreenBlockProps.widthText ='100%';
      addGreenBlockProps.widthImage = '398px';
      break;
    case 'iot-development':
      addGreenBlockProps.widthText = '545px';
      addGreenBlockProps.spanWidth = '321px';
      break;
    case 'firmware_development':
      addGreenBlockProps.widthText = '582px';
      addGreenBlockProps.spanWidth = '378px'
      break;
  }

  const bannerType = 
    (
      slug === 'mobile-application-development-services' 
      || slug === 'embedded-software-development-services' 
      || slug === 'web-development-services'
      || slug === 'consumer-electronics-solutions'
    ) 
    ? 'full' 
    : 'short';

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const pіctureBg = mBackground && mBackground.sizes && mBackground.sizes.medium;
  const pіctureImg = mImage && mImage.sizes && mImage.sizes.medium;

  const onWidth = (width) => {
    if (width < 760) setCheckMobile(true);
    else setCheckMobile(false);
  }
  const breadcrumbParent = {
    slug : (parent === 4259 ? 'Industries' : 'Services'),
    url : (parent === 4259 ? '/industries' : '/services')
  }

  return (
    <ReactResizeDetector handleWidth onResize={onWidth}>
      <Wrapper>
        {parent === 4259 
        ? 
          <BannerIndustry
            url={imageUrlCheck(pіctureBg, urlsWithLocal)}
            button={acf.mButton}
            title={acf.mTitle}
            iconUrl={imageUrlCheck(pіctureImg, urlsWithLocal)}
            scrollRef={scrollRef}
            type={bannerType}
            marginTop='57'
          />
        :
          <Banner
            url={imageUrlCheck(pіctureBg, urlsWithLocal)}
            button={acf.mButton}
            title={acf.mTitle}
            iconUrl={imageUrlCheck(pіctureImg, urlsWithLocal)}
            scrollRef={scrollRef}
            type={bannerType}
            marginTop='57'
          />
        }

        <Container>
          <Breadcrumbs links={[
            { name: breadcrumbParent.slug, link: breadcrumbParent.url },
            { name: <Html2React html={post.title.rendered} />, link: '#' },
          ]}
          />
          <ServicesContainer>
            <ContentWrapper>
              <GreenText>
                <Html2React html={greenText} />
              </GreenText>
              <BlocksWrapper>
                {blocks && blocks.length > 0 && blocks.map((block, key) => {
                  const blockAddProps = {
                    textAlignPush : 
                      (slug === 'web-development-services' && key === 1) 
                        ? 'left' 
                        : null,
                    titleAlign : 
                      (slug === 'cloud_solutions' && key === blocks.length - 1) 
                      ? 'flex-end' 
                      : 'space-between',
                    lastCloudSpan : 
                      (slug === 'cloud_solutions' && key === 1) 
                      ? '400' 
                      : null
                  };
                  return <Block {...blockAddProps} key={`${block.title}_${key}`} {...block} />
                })}
              </BlocksWrapper>
            </ContentWrapper>
            {checkMobile && parent !== 4259  && <GreenBlock greenBlock={greenBlock}/>}
            {checkMobile && parent === 4259 && (
              <FooterBg
                {...fBg}
              />
            )}
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
          {!checkMobile && parent !== 4259 && (
            <GreenBlock
              greenBlock={greenBlock}
              {...addGreenBlockProps}
            />
          )}
        </Container>
        {!checkMobile && parent === 4259 && (
            <FooterBg
              {...fBg}
            />
        )}
      </Wrapper>
    </ReactResizeDetector>
  );
};

export default connect(ServiceItemNewTemplate);
