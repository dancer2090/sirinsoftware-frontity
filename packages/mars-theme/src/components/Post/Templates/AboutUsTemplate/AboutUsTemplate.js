import React from 'react';
import { connect, styled } from 'frontity';
import BigFrameContainer from '../../../BigFrameContainer';
import AboutUsSlider from './AboutUsSlider'
import BigTitle from '../../../BigTitle';
import Image from '../../../../img/service.jpg';
import {
  GlobalContainer,
  Container,
  AwardsGlobalContainer,
  AwardsContainer,
  AwardsItem,
  AwardsImageContainer,
  AwardsImage,
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
} from './styles';


const AboutUsTemplate = ({ state }) => {
    const dataP = state.source.get(state.router.link);
    const post = state.source[dataP.type][dataP.id];

    const mediaObj = state.source.attachment[post.featured_media];
    let bgImg = Image;
    if(mediaObj) bgImg = mediaObj.source_url;

    const { acf = {} } = post;
    const {
        awards = {},
        testimonials = {},
    } = acf;

    let subawards = [];
    let size = 10;
    for (let i = 0; i < Math.ceil(awards.length/size); i++){
        subawards[i] = awards.slice((i*size), (i*size) + size);
    }

  return (
    <GlobalContainer>
        <BigFrameContainer title={post.content.rendered} image={bgImg}/>
        <AwardsGlobalContainer>
            <BigTitle title="Awards" />
            <Container>
                <AwardsContainer>
                {subawards && subawards.map((aitem, k) => (
                  <AwardsItem>
                    {aitem && aitem.map((asubitem, k) => (
                        <AwardsImageContainer>
                            <AwardsImage src={asubitem.image.url} />
                        </AwardsImageContainer>
                    ))}
                  </AwardsItem>
                ))}
                </AwardsContainer>
            </Container>
        </AwardsGlobalContainer>
        <TestimonialsGlobalContainer>
            <BigTitle title="Testimonials" />
            <Container>
                <TestimonialsContainer>
                    {testimonials && testimonials.length>0 && testimonials.map((item, k) => (
                        <TestimonialsItem>
                            <TestimonialsLeft>
                                <TestimonialsLogo src={item.logo.url} />
                                <TestimonialsPhoto src={item.photo.url} />
                            </TestimonialsLeft>
                            <TestimonialsRight>
                                <TestimonialsRightContainer>
                                    <TestimonialsText>
                                        {item.text}
                                    </TestimonialsText>
                                    <TestimonialsSignature>
                                        {item.signature}
                                    </TestimonialsSignature>
                                </TestimonialsRightContainer>
                            </TestimonialsRight>
                        </TestimonialsItem>
                    ))}
                </TestimonialsContainer>
            </Container>
        </TestimonialsGlobalContainer>
    </GlobalContainer>
  );
};

export default connect(AboutUsTemplate);
