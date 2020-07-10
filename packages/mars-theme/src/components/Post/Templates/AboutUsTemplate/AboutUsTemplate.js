import React from 'react';
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


const AboutUsTemplate = ({ state, libraries }) => {
    const dataP = state.source.get(state.router.link);
    const post = state.source[dataP.type][dataP.id];

    const mediaObj = state.source.attachment[post.featured_media];
    let bgImg = Image;
    if(mediaObj) bgImg = mediaObj.source_url;

    const { acf = {} } = post;
    const {
        awards = {},
        testimonials = {},
        gallery = {},
    } = acf;

    let subawards = [];
    let size = 10;
    for (let i = 0; i < Math.ceil(awards.length/size); i++){
        subawards[i] = awards.slice((i*size), (i*size) + size);
    }

    let subgallery = [];
    size = 8;
    for (let i = 0; i < Math.ceil(gallery.length/size); i++){
        subgallery[i] = gallery.slice((i*size), (i*size) + size);
    }

    const Html2React = libraries.html2react.Component;

    console.log(subawards);

  return (
    <GlobalContainer>
        <BigFrameContainer title={post.content.rendered} image={bgImg}/>
        <AwardsGlobalContainer>
            <BigTitle title="Awards" />
            <Container>
                <AwardsContainer>
                    <AboutUsSlider>
                        {subawards && subawards.map((aitem, k) => (
                          <AwardsGalleryItem>
                              <AwardsItem>
                                {aitem && aitem.map((asubitem, k) => (
                                    <AwardsImageContainer key={asubitem.url}>
                                        <AwardsImage src={asubitem.image.url} />
                                    </AwardsImageContainer>
                                ))}
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
                      return (
                      <TestimonialsItem key={k+logo.url}>
                          <TestimonialsLeft>
                              <TestimonialsLogo src={logo.url} />
                              <TestimonialsPhoto src={photo.url} />
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
                                {item && item.length>0 && item.map((subitem, k) => (
                                    <GalleryImageContainer key={k+subitem.url}>
                                        <GalleryImage src={subitem.url} />
                                    </GalleryImageContainer>
                                ))}
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
