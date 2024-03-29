import React, { useEffect } from 'react';
import { connect } from 'frontity';
import BigFrameContainer from '../../../BigFrameContainer';
import BigTitle from '../../../BigTitle';
import Link from '../../../link';
import Image from '../../../../img/service.jpg';
import {
  GlobalContainer,
  Container,
  AboutUsSlider,
  AwardsGlobalContainer,
  AwardsContainer,
  AwardsItem,
  AwardsImageContainer,
  AwardsImage,
  AwardsGalleryItem,
  TestimonialsGlobalContainer,
  TestimonialsContainer,
  TestimonialsItem,
  TestimonialsLeft,
  TestimonialsLogo,
  TestimonialsPhoto,
  TestimonialsRight,
  TestimonialsRightContainer,
  TestimonialsText,
  TestimonialsSignature,
  TestimonialsTextStart,
  TestimonialsTextEnd,
  TestimonialsTextContent,
  GalleryGlobalContainer,
  GalleryContainer,
  GalleryItem,
  GalleryImageContainer,
  GalleryImage,
  Crumbs,
  OurTeam,
  OurTeamContainer,
  OurTeamText,
  Facts,
  Fact,
  FactIcon,
  FactText,
  AwardsText,
  AwardsSubText,
  Values,
  Value,
  ValueTitle,
  ValueIcon,
  ContactsContainer,
  ChoseText,
  BeforeFormHeader,
  BeforeFormText,
  Wrapper,
} from './styles';
import Services from '../MainTemplate/Services';
import Cards from '../ContactsTemplate/Cards';

const AboutUsTemplate = ({ actions, state, libraries }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];
  const { imageUrlCheck, urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;
  const dataMain = state.source.get('/') || {};
  const {
    type: mainType = dataP.type,
    id: mainId = dataP.id,
  } = dataMain;
  const main = state.source[mainType][mainId] || {};
  const contacts = state.options;
  const { acf: mainAcf = {} } = main;
  const { services: servicesList = [] } = mainAcf;
  const { acf: contactsAcf = {} } = contacts;
  const { offices_locations: officesLocations = [] } = contactsAcf;

  const replaces = [state.frontity.url, state.frontity.adminUrl];

  const mediaObj = state.source.attachment[post.featured_media];
  let bgImg = Image;
  if (mediaObj) bgImg = imageUrlCheck(mediaObj.source_url, urlsWithLocal);

  const { acf = {} } = post;
  const {
    awards = {},
    testimonials = {},
    gallery = {},
    ourteam = {},
    factsAndFigures = {},
    awardsText = '',
    values = '',
    services = '',
  } = acf;

  const subawards = [];
  let size = 10;
  for (let i = 0; i < Math.ceil(awards.length / size); i++) {
    subawards[i] = awards.slice((i * size), (i * size) + size);
  }

  const subgallery = [];
  size = 8;
  for (let i = 0; i < Math.ceil(gallery.length / size); i++) {
    subgallery[i] = gallery.slice((i * size), (i * size) + size);
  }

  const Html2React = libraries.html2react.Component;
  useEffect(() => {
    actions.source.fetch('/');
    actions.source.fetch('/contacts');
  }, []);
  return (
    <GlobalContainer>
      <BigFrameContainer title={post.content.rendered} image={bgImg} />
      <Container style={{ padding: 0 }}>
        <Crumbs links={[{
          name: 'About',
          link: '#',
        }]}
        />
      </Container>
      <OurTeam>
        <Container>
          <BigTitle size='small' title={ourteam.title} />
          {ourteam.text && ourteam.text.length > 0 && (
            <OurTeamContainer>
              {ourteam.text.map((item) => (
                <OurTeamText>
                  <Html2React html={item.text} />
                </OurTeamText>
              ))}
            </OurTeamContainer>
          )}
        </Container>
      </OurTeam>
      <Facts>
        <BigTitle title='Facts and Figures' />
        <Container>
          {factsAndFigures.map(fact => {
            const {
              icon = {},
              title = ''
            } = fact;
            const { url = '' } = icon;
            return (
              <Fact>
                <FactIcon src={url} />
                <FactText>
                  <Html2React html={title} />
                </FactText>
              </Fact>
            )
          })}
        </Container>
      </Facts>
      <AwardsGlobalContainer>
        <BigTitle title="Awards" />
        <AwardsText>
          <Html2React html={awardsText} />
        </AwardsText>
        <AwardsSubText>
          <Html2React html='Today we have the following awards:' />
        </AwardsSubText>
        <Container>
          <AwardsContainer>
            <AboutUsSlider>
              {subawards && subawards.map((aitem, k) => (
                <AwardsGalleryItem key={`${k}aitem`}>
                  <AwardsItem>
                    {aitem && aitem.map((asubitem, k) => {
                      const awardsUrl = imageUrlCheck(asubitem.image.url, urlsWithLocal);
                      return (
                        <AwardsImageContainer key={k + asubitem.url}>
                          <AwardsImage src={awardsUrl} />
                        </AwardsImageContainer>
                      );
                    })}
                  </AwardsItem>
                </AwardsGalleryItem>
              ))}
            </AboutUsSlider>
          </AwardsContainer>
        </Container>
      </AwardsGlobalContainer>
      {values && values.length > 0 && (
          <Values>
            <BigTitle bigTitle="values" title="Sirin Software Values"/>
            <Container>
              {values.map(value => {
                const {
                  title = '',
                  icon = {}
                } = value;
                const { url } = icon;
                return (
                  <Value>
                    <ValueIcon src={url} />
                    <ValueTitle>
                      <Html2React html={title} />
                    </ValueTitle>
                  </Value>
                )
              })}
            </Container>
          </Values>
      )}
      {services && servicesList && servicesList.length > 0 && (
        <Services title={services.title} services={servicesList}>
          <OurTeamContainer>
            {services && services.text && services.text.map((item) => (
              <OurTeamText>
                <Html2React html={item.text} />
              </OurTeamText>
            ))}
          </OurTeamContainer>
          <AwardsSubText>
            <Html2React html="Today, our expertise covers the following IT niches:"/>
          </AwardsSubText>
        </Services>
      )}
      <TestimonialsGlobalContainer>
        <BigTitle title="Testimonials" />
        <OurTeamContainer>
          <OurTeamText>
            Positive feedback from our clients is an indicator of a well-done job.
          </OurTeamText>
        </OurTeamContainer>
        <AwardsSubText>
          <Html2React html="Here are some reviews by our clients </br> whose projects have already been launched successfully:" />
        </AwardsSubText>
        <Container>
          <TestimonialsContainer>
            {testimonials && testimonials.length > 0 && testimonials.map((item, k) => {
              const {
                logo = { url: '' },
                photo = { url: '' },
                project = '',
              } = item;
              const logoUrl = imageUrlCheck(logo.url, urlsWithLocal);
              const photoUrl = imageUrlCheck(photo.url, urlsWithLocal);
              return (
                <TestimonialsItem key={k + logo.url}>
                  <TestimonialsLeft>
                    { (project !== '')
                      ? (
                        <Link link={urlCheck(project, replaces)}>
                          <TestimonialsLogo src={logoUrl} />
                        </Link>
                      )
                      : <TestimonialsLogo src={logoUrl} />}
                    <TestimonialsPhoto src={photoUrl} />
                  </TestimonialsLeft>
                  <TestimonialsRight>
                    <TestimonialsRightContainer>
                      <TestimonialsText>
                        <TestimonialsTextStart>
                          “
                        </TestimonialsTextStart>
                        <TestimonialsTextContent>
                          <Html2React html={item.text} />
                        </TestimonialsTextContent>
                        <TestimonialsTextEnd>
                          “
                        </TestimonialsTextEnd>
                      </TestimonialsText>
                      <TestimonialsSignature>
                        {item.signature}
                        { item.linkedin !== '' && (
                        <Link link={urlCheck(item.linkedin, replaces)}>
                          <svg width="27" height="20" viewBox="0 0 27 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="27" height="20" rx="2" fill="#0077B5" />
                            <path d="M20 11.3774V15.4019H17.428V11.647C17.428 10.7037 17.056 10.0599 16.125 10.0599C15.4143 10.0599 14.9914 10.4938 14.8054 10.9134C14.7375 11.0635 14.72 11.2723 14.72 11.4823V15.4019H12.1472C12.1472 15.4019 12.1818 9.04223 12.1472 8.38332H14.7198V9.37818C14.7146 9.38562 14.7078 9.39364 14.7029 9.40086H14.7198V9.37818C15.0616 8.90063 15.672 8.21843 17.0383 8.21843C18.731 8.21841 20 9.22157 20 11.3774ZM9.45587 5C8.5757 5 8 5.52371 8 6.21241C8 6.88611 8.55905 7.42571 9.42172 7.42571H9.43891C10.3361 7.42571 10.8941 6.88621 10.8941 6.21241C10.8772 5.52371 10.3361 5 9.45587 5ZM8.1528 15.4019H10.7247V8.38332H8.1528V15.4019Z" fill="white" />
                          </svg>
                        </Link>
                        )}
                      </TestimonialsSignature>
                    </TestimonialsRightContainer>
                  </TestimonialsRight>
                </TestimonialsItem>
              );
            })}
          </TestimonialsContainer>
        </Container>
      </TestimonialsGlobalContainer>
      <GalleryGlobalContainer>
        <BigTitle title="Gallery" />
        <OurTeamContainer>
          <OurTeamText>
            For each of us, the <Link link="/">Sirin Software</Link> team is a second family where we spend a lot of time both within projects and at informal events. Let’s take a look at some moments from the life of our team:
          </OurTeamText>
        </OurTeamContainer>
        <GalleryContainer>
          <AboutUsSlider>
            {subgallery && subgallery.length > 0 && subgallery.map((item, k) => (
              <div key={`${k}galleryItem`}>
                <GalleryItem>
                  {item && item.length > 0 && item.map((subitem, k) => {
                    const subItemUrl = imageUrlCheck(subitem.url, urlsWithLocal);
                    return (
                      <GalleryImageContainer key={k + subitem.url}>
                        <GalleryImage background={subItemUrl} />
                      </GalleryImageContainer>
                    );
                  })}
                </GalleryItem>
              </div>
            ))}
          </AboutUsSlider>
        </GalleryContainer>
      </GalleryGlobalContainer>
      <ContactsContainer>
        <BigTitle title="Locations and Offices" size="70" />
        <Container>
          <Wrapper>
            <Cards offices_locations={officesLocations} />
          </Wrapper>
          <ChoseText>
            Thank you for choosing <Link link="/">Sirin Software</Link>!
          </ChoseText>
          <BeforeFormHeader>
            <Html2React html="Fill out the form below <br> and tell us about your project plans!" />
          </BeforeFormHeader>
          <BeforeFormText>
            Our staff will contact you as soon as possible to discuss your business solution in detail.
          </BeforeFormText>
        </Container>
      </ContactsContainer>
    </GlobalContainer>
  );
};

export default connect(AboutUsTemplate);
