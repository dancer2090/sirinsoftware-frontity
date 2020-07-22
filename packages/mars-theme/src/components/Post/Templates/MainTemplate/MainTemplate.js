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
} from './styles';
import MainFrameBlock from '../../../MainFrameBlock';
import Triangle from '../../../../img/main_triangle.svg';

const MainTemplate = ({
  state, libraries, actions, scrollRef = null,
}) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];

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
  } = acf;

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
      <ServicesGlobalContainer>
        <ServicesTitle title="Services" />
        <Container>
          <ServicesList>
            {services && services.map((service, k) => {
              const {
                bg = { url: '' },
              } = service;
              return (
                <ServicesItem src={bg.url} link="/services" key={service.url}>
                  <ServicesItemTitle>{service.title}</ServicesItemTitle>
                </ServicesItem>
              );
            })}
          </ServicesList>
        </Container>
      </ServicesGlobalContainer>
      <PartnerShip>
        <BigTitle title="Partnership types" bigTitleBackgroundColor="rgba(255,255,255,0.06)" bigTitleTextColor="#FFFFFF" />
        <Container>
          <PartnerShipContainer>
            <PartnerShipLeft>
              <PartnerShipLeftTitle>
                {' '}
                <Html2React html={left_text} />
                {' '}
              </PartnerShipLeftTitle>
              {boxes && boxes.map((box) => (
                <Box key={box.title}>
                  {box.title !== '' && (
                    <BoxTitle>
                      {' '}
                      {box.title}
                      {' '}
                    </BoxTitle>
                  )}
                  {box.text !== '' && (
                    <BoxText>
                      {' '}
                      {box.text}
                      {' '}
                    </BoxText>
                  )}
                </Box>
              ))}
            </PartnerShipLeft>
            <PartnerShipRight>
              <PartnerShipRightTitle>
                {' '}
                <Html2React html={right_text} />
                {' '}
              </PartnerShipRightTitle>
              <PartnerShipRightContainer src={Triangle}>
                <GreenTitle><Html2React html={t_green} /></GreenTitle>
                <OrangeTitle><Html2React html={t_orange} /></OrangeTitle>
                <TText>{t_after}</TText>
              </PartnerShipRightContainer>
            </PartnerShipRight>
          </PartnerShipContainer>
        </Container>
      </PartnerShip>
      <CaseStudiesGlobalContainer>
        <CaseTitle title="case studies" />
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
                    src={post_featured_image}
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
                    <Link link={p_item.link}>
                      <ItemTitle>
                        {p_item.title.rendered}
                      </ItemTitle>
                    </Link>
                    <ItemDescription>
                      {short_description}
                    </ItemDescription>
                  </ItemWrapper>
                  <CaseLink link={p_item.link}>Learn more</CaseLink>
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
                <ClientContainer link={client.url} key={client.url + key}>
                  <Client src={image.url} />
                </ClientContainer>
              );
            })}
          </ClientsGallery>
        </Container>
      </ClientsGlobalContainer>
    </GlobalContainer>
  );
};

export default connect(MainTemplate);
