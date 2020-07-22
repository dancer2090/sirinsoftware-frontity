import React from 'react';
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
} from './styles';
import Breadcrumbs from '../../../Breadcrumbs';

const AboutUsTemplate = ({ state, libraries }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;

  const mediaObj = state.source.attachment[post.featured_media];
  let bgImg = Image;
  if (mediaObj) bgImg = imageUrlCheck(mediaObj.source_url, urlsWithLocal);

  const { acf = {} } = post;
  const {
    awards = {},
    testimonials = {},
    gallery = {},
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

  return (
    <GlobalContainer>
      <BigFrameContainer title={post.content.rendered} image={bgImg} />
      <Container style={{ padding: 0 }}>
        <Breadcrumbs links={[{
          name: 'About',
          link: '#',
        }]}
        />
      </Container>
      <AwardsGlobalContainer>
        <BigTitle title="Awards" />
        <Container>
          <AwardsContainer>
            <AboutUsSlider>
              {subawards && subawards.map((aitem, k) => (
                <AwardsGalleryItem key={k}>
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
      <TestimonialsGlobalContainer>
        <BigTitle title="Testimonials" />
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
                      ? <Link link={project}><TestimonialsLogo src={logoUrl} /></Link>
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
                        <Link link={item.linkedin}>
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
        <GalleryContainer>
          <AboutUsSlider>
            {subgallery && subgallery.length > 0 && subgallery.map((item, k) => (
              <div>
                <GalleryItem key={`${k}galleryItem`}>
                  {item && item.length > 0 && item.map((subitem, k) => {
                    const subItemUrl = imageUrlCheck(subitem.url, urlsWithLocal);
                    return (
                      <GalleryImageContainer key={k + subitem.url}>
                        <GalleryImage src={subItemUrl} />
                      </GalleryImageContainer>
                    );
                  })}
                </GalleryItem>
              </div>
            ))}
          </AboutUsSlider>
        </GalleryContainer>
      </GalleryGlobalContainer>
    </GlobalContainer>
  );
};

export default connect(AboutUsTemplate);
