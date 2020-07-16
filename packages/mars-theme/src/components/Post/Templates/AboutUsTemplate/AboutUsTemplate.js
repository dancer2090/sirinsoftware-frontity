import React, { useEffect } from 'react';
import { connect, styled } from 'frontity';
import BigFrameContainer from '../../../BigFrameContainer';
import BigTitle from '../../../BigTitle';
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
} from './styles';
import Breadcrumbs from '../../../Breadcrumbs';
import CollapseList from '../FaqTemplate/CollapseList';
import { filterQuestions } from '../../../../utils/filterQuestions';

const AboutUsTemplate = ({ state, libraries, actions }) => {
  const dataP = state.source.get(state.router.link);
  const post = state.source[dataP.type][dataP.id];
  const { imageUrlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;

  const mediaObj = state.source.attachment[post.featured_media];
  let bgImg = Image;
  if (mediaObj) bgImg = imageUrlCheck( mediaObj.source_url, urlsWithLocal );

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

  const faqArray = filterQuestions(state, dataP.id);

  return (
    <GlobalContainer>
        <BigFrameContainer title={post.content.rendered} image={bgImg}/>
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
                                  const awardsUrl = imageUrlCheck( asubitem.image.url, urlsWithLocal );
                                  return (
                                      <AwardsImageContainer key={k+asubitem.url}>
                                          <AwardsImage src={ awardsUrl } />
                                      </AwardsImageContainer>
                                  )
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
                    {testimonials && testimonials.length>0 && testimonials.map((item, k) => {
                      const {
                        logo = { url : "" },
                        photo = { url : "" },
                      } = item;
                      const logoUrl = imageUrlCheck( logo.url, urlsWithLocal );
                      const photoUrl = imageUrlCheck( photo.url, urlsWithLocal );
                      return (
                      <TestimonialsItem key={k+logo.url}>
                          <TestimonialsLeft>
                              <TestimonialsLogo src={logoUrl} />
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
                                  </TestimonialsSignature>
                              </TestimonialsRightContainer>
                          </TestimonialsRight>
                      </TestimonialsItem>
                  )})}
                </TestimonialsContainer>
            </Container>
        </TestimonialsGlobalContainer>
        <GalleryGlobalContainer>
            <BigTitle title="Gallery" />
            <GalleryContainer>
                <AboutUsSlider>
                    {subgallery && subgallery.length>0 && subgallery.map((item, k) => (
                        <div>
                            <GalleryItem key={k+"galleryItem"}>
                                {item && item.length>0 && item.map((subitem, k) => {
                                  const subItemUrl = imageUrlCheck( subitem.url, urlsWithLocal )
                                  return (
                                      <GalleryImageContainer key={k+subitem.url}>
                                          <GalleryImage src={subItemUrl} />
                                      </GalleryImageContainer>
                                  )
                                })}
                            </GalleryItem>
                        </div>
                    ))}
                </AboutUsSlider>
            </GalleryContainer>
        </GalleryGlobalContainer>
      
      <Container>
        <CollapseList elements={faqArray} libraries={libraries} />
      </Container>
    </GlobalContainer>
  );
};

export default connect(AboutUsTemplate);
