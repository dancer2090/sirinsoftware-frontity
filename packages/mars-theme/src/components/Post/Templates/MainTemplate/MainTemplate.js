/* eslint-disable react/no-array-index-key */
/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { connect } from 'frontity';
import BigTitle from '../../../BigTitle';
import Link from '../../../link';
import {
  GlobalContainer,
  Container,
  ServicesGlobalContainer,
  ServicesList,
  ServicesItem,
  ServicesItemTitle,
  PartnerShip,
  PartnerShipLeft,
  PartnerShipLeftTitle,
  BoxTitle,
  BoxText,
  Box,
  PartnerShipContainer,
  PartnerShipRightContainer,
  PartnerShipRight,
  PartnerShipRightTitle,
  GreenTitle,
  OrangeTitle,
  TText,
  CaseStudiesGlobalContainer,
  CaseStudiesList,
  ClientsGlobalContainer,
  ClientsGallery,
  ClientContainer,
  Client,
  ItemBlock,
  ItemWrapper,
  ItemTitle,
  ItemLabel,
  ItemDescription,
  CaseItemTitle,
  CaseContent,
  CaseItemWrapper,
  CaseLink,
  ServicesTitle,
  CaseTitle,
  ClientTitle,
  WhiteBlock,
  WhiteBlockTextTop,
  WhiteBlockTextBottom,
  WhyUs,
  WhyUsTitle,
  WhyUsBlocks,
  WhyUsBlock,
  WhyUsIcon,
  WhyUsText,
  PreFooter,
  PreFooterTopText,
  PreFooterBottomText,
  CaseStudiesText,
  WhyUsBottomText
} from './styles';
import MainFrameBlock from '../../../MainFrameBlock';
import WhoWeAre from '../../../WhoWeAre';
import Triangle from '../../../../img/main_triangle.svg';
import WhiteBlockBG from '../../../../img/whiteBlockBg.svg';

const MainTemplate = ({
  state, libraries, actions, scrollRef = null,
}) => {
  const { imageUrlCheck, urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];

  const replaces = [state.frontity.url, state.frontity.adminUrl];

  const { acf = {} } = post;
  const {
    main_title = '',
    main_bg = { url: '' },
    main_icon = { url: '' },
    main_button = '',
    services = {},
    left_text = '',
    right_text = '',
    boxes = {},
    t_after = '',
    t_green = '',
    t_orange = '',
    clients = {},
    whiteBlock = {},
    whoWeAre = {},
    whyUs = {},
    whyUsText = '',
    caseStudiesText = '',
    footerBg = {},
    footerTextTop = {},
    footerTextBottom = {},
    whyUsBottomText = ''
  } = acf;

  const {
    topText : whiteTopText = '',
    bottomText : whiteBottomText = ''
  } = whiteBlock;

  useEffect(() => {
    actions.source.fetch('/case-studies/');
  }, []);

  const Html2React = libraries.html2react.Component;
  const case_studies_null = state.source.get('/case-studies/');
  const case_studies = case_studies_null.items ? case_studies_null.items.slice(0, 4) : [];

  return (
    <GlobalContainer>

      <MainFrameBlock
        url={main_bg.url}
        title={main_title}
        button={main_button}
        iconUrl={main_icon.url}
        scrollRef={scrollRef}
      />
      <WhiteBlock url={WhiteBlockBG}>
        <Container>
          <WhiteBlockTextTop>{whiteTopText}</WhiteBlockTextTop>
          <WhiteBlockTextBottom>{whiteBottomText}</WhiteBlockTextBottom>
        </Container>
      </WhiteBlock>
      <WhoWeAre items={whoWeAre} />
      <ServicesGlobalContainer>
        <ServicesTitle title="Services" />
        <Container>
          <ServicesList>
            {services && services.map((service, k) => {
              const {
                bg = { url: '' },
                link = ''
              } = service;
              const serviceBackground = imageUrlCheck(bg.url, urlsWithLocal);
              return (
                <ServicesItem bg={serviceBackground} link={link} key={service.url+k}>
                  <ServicesItemTitle>{service.title}</ServicesItemTitle>
                </ServicesItem>
              );
            })}
          </ServicesList>
        </Container>
      </ServicesGlobalContainer>
      <WhyUs>
        <Container>
          <WhyUsTitle title="Why Us" />
          <WhyUsBlocks>
            {whyUs && whyUs.map((item, k) => {
              const {
                icon = {},
                text = ''
              } = item;
              return (
                <WhyUsBlock key={`${k}_${text.slice(0,4)}`}>
                  <WhyUsIcon src={icon.url} />
                  <WhyUsText> {text} </WhyUsText>
                </WhyUsBlock>
              )
            })}
            <WhyUsBottomText>
              {whyUsBottomText}
            </WhyUsBottomText>
          </WhyUsBlocks>
        </Container>
      </WhyUs>
      <CaseStudiesGlobalContainer>
        <CaseTitle title="case studies" />
        <CaseStudiesText>{caseStudiesText}</CaseStudiesText>
        <Container>
          <CaseStudiesList>
            {case_studies && case_studies.map((item, index) => {
              const p_item = state.source[item.type][item.id];
              const { acf: acfItem = {} } = p_item;
              const {
                post_featured_image = {},
                category_for_green_line = '',
                short_description = '',
              } = acfItem;
              return (
                <ItemBlock key={index}>
                  <CaseItemWrapper
                    bg={imageUrlCheck(post_featured_image, urlsWithLocal)}
                    link={urlCheck(p_item.link, replaces)}
                  >
                    <CaseItemTitle>
                      {category_for_green_line}
                    </CaseItemTitle>
                    <CaseContent>
                      {p_item.title.rendered}
                    </CaseContent>
                  </CaseItemWrapper>

                  <ItemWrapper>
                    <ItemLabel>
                      {category_for_green_line}
                    </ItemLabel>
                    <Link link={urlCheck(p_item.link, replaces)}>
                      <ItemTitle>
                        {p_item.title.rendered}
                      </ItemTitle>
                    </Link>
                    <ItemDescription>
                      {short_description}
                    </ItemDescription>
                  </ItemWrapper>
                  <CaseLink link={urlCheck(p_item.link, replaces)}>Learn more</CaseLink>
                </ItemBlock>
              );
            })}
          </CaseStudiesList>
        </Container>
      </CaseStudiesGlobalContainer>

      <ClientsGlobalContainer>
        <ClientTitle title="Clients" bigTitleBackgroundColor="rgba(63, 165, 74, 0.1)" />
        <Container>
          <ClientsGallery>
            {clients && clients.map((client, key) => {
              const { image = { url: '' } } = client;
              return (
                <ClientContainer link={urlCheck(client.url, replaces)} key={client.url + key}>
                  <Client alt="sirin software client" src={imageUrlCheck(image.url, urlsWithLocal)} />
                </ClientContainer>
              );
            })}
          </ClientsGallery>
        </Container>
      </ClientsGlobalContainer>

      <PreFooter bg={footerBg}>
        <PreFooterTopText>{footerTextTop}</PreFooterTopText>
        <PreFooterBottomText>{footerTextBottom}</PreFooterBottomText>
      </PreFooter>
    </GlobalContainer>
  );
};

export default connect(MainTemplate);
