import React, { useEffect, useState } from 'react';
import { connect, styled } from 'frontity';
import BigTitle from '../../../BigTitle';
import {
  GlobalContainer,
  Container,
  MainBlock,
  MainBlockContainer,
  MainBlockLeft,
  MainBlockTitle,
  MainBlockButton,
  MainBlockRight,
  MainBlockIcon,
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
} from './styles';
import Button from '../../../Button';
import Link from '../../../link';
import Triangle from '../../../../img/main_triangle.svg';


const MainTemplate = ({ state, libraries, actions, scrollRef = null }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];

  const { acf = {} } = post;
  const {
    main_title = "",
    main_bg = {},
    main_icon = {},
    main_button = "",
    services = {},
    left_text = "",
    right_text = "",
    boxes = {},
    t_after = "",
    t_green = "",
    t_orange = "",
    clients = {},
  } = acf;

  useEffect(() => {
    actions.source.fetch('/case-studies/');
  }, []);

  const Html2React = libraries.html2react.Component;
  const case_studies_null = state.source.get('/case-studies/');
  let case_studies = [];
  case_studies = case_studies_null.items.slice(0,4);
  const scrollToRef = () => {
    if (scrollRef) {
      window.scrollTo({
        top: scrollRef.current.offsetTop - 100,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <GlobalContainer>
        <MainBlock src={main_bg.url}>
          <Container>
            <MainBlockContainer>
              <MainBlockLeft>
                <MainBlockTitle>{main_title}</MainBlockTitle>
                <MainBlockButton onClick={() => scrollToRef()}>{main_button}</MainBlockButton>
              </MainBlockLeft>
              <MainBlockRight>
                <MainBlockIcon src={main_icon.url} />
              </MainBlockRight>
            </MainBlockContainer>
          </Container>
        </MainBlock>
        <ServicesGlobalContainer>
          <BigTitle title="Services" />
          <Container>
            <ServicesList>
              {services && services.map((service, k)=>(
                <ServicesItem src={service.bg.url} link="/services" key={service.url}>
                  <ServicesItemTitle>{service.title}</ServicesItemTitle>
                </ServicesItem>
              ))}
            </ServicesList>
          </Container>
        </ServicesGlobalContainer>
        <PartnerShip>
          <BigTitle title="Partnership types" bigTitleBackgroundColor="rgba(255,255,255,0.06)" bigTitleTextColor="#FFFFFF"/>
          <Container>
            <PartnerShipContainer>
              <PartnerShipLeft>
                <PartnerShipLeftTitle> <Html2React html={left_text} /> </PartnerShipLeftTitle>
                {boxes && boxes.map((box,key)=>(
                    <Box key={box.title}>
                      {box.title!=="" && <BoxTitle> {box.title} </BoxTitle>}
                      {box.text!=="" && <BoxText> {box.text} </BoxText>}
                    </Box>
                ))}
              </PartnerShipLeft>
              <PartnerShipRight>
                <PartnerShipRightTitle> <Html2React html={right_text} /> </PartnerShipRightTitle>
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
          <BigTitle title="case studies"/>
          <Container>
            <CaseStudiesList>
              {case_studies && case_studies.map((item,index)=>{
                const p_item = state.source[item.type][item.id];
                const { acf = {} } = p_item;
                const {
                  post_featured_image = {},
                  category_for_green_line = "",
                  short_description = "",
                } = acf;
                return (
                  <ItemBlock key={index}>
                    <CaseItemWrapper
                      src={post_featured_image}>
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
                      <ItemTitle>
                        {p_item.title.rendered}
                      </ItemTitle>
                      <ItemDescription>
                        {short_description}
                      </ItemDescription>
                    </ItemWrapper>
                    <CaseLink link={p_item.link}>Learn more</CaseLink>
                  </ItemBlock>
                )
              })}
            </CaseStudiesList>
          </Container>
        </CaseStudiesGlobalContainer>
        <ClientsGlobalContainer>
          <BigTitle title="Clients" bigTitleBackgroundColor="rgba(63, 165, 74, 0.1)"/>
          <Container>
            <ClientsGallery>
              {clients && clients.map((client,key)=>(
                <ClientContainer link={client.url} key={client.url+key}>
                  <Client src={client.image.url} />
                </ClientContainer>
              ))}
            </ClientsGallery>
          </Container>
        </ClientsGlobalContainer>
    </GlobalContainer>
  );
};

export default connect(MainTemplate);
