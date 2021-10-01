import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Container,
  BigContainer,
  MainTitle,
  MainTitleContainer,
  MainText,
  MainTextContainer,
  TeamImage,
  Team,
  TeamContainer,
  TeamImageContainer,
  TeamTextContainer,
  TeamTitle,
  TeamSubTitle,
  TeamText,
  Advantages,
  AdvantagesText,
  AdvantagesItems,
  AdvantagesItem,
  AdvantagesIcon,
  AdvantagesTitle,
  AdvantagesTextFinal,
  AdvantagesTextContainer,
  AdvantagesSubTitle,
  BlockWIPhoto,
  BlockWIText,
  BlockWI,
  FooterBlock,
  FooterBlockText,
} from './styles';
import BigTitle from '../../../BigTitle';
import Cards from './Cards';
import Grey from './Grey/Grey';

const WhyUs = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const {
    title = { rendered: '' },
    content = { rendered: '' },
    acf = {},
  } = post;
  const {
    footer = {},
    advantages = [],
    main = {},
    team = {},
  } = acf;

  const {
    title: mainTitle = '',
    text: mainText = '',
    image: mainImage = {}
  } = main;
  const {
    img: teamImage,
    title: teamTitle,
    subTitle: teamSubTitle,
    text: teamText
  } = team;

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return (
    <Wrapper>
      {mainImage && mainImage.url && (
        <MainTitle bg={mainImage.url}>
          <MainTitleContainer>
            <Html2React html={mainTitle} />
          </MainTitleContainer>
        </MainTitle>
      )}
      <BigContainer>
        <MainText>
          <MainTextContainer>
            <Html2React html={mainText} />
          </MainTextContainer>
        </MainText>
        <Team>
          <TeamContainer>
            <TeamImageContainer>
              {teamImage && teamImage.url && <TeamImage src={teamImage.url} />}
            </TeamImageContainer>
            <TeamTextContainer>
              <TeamTitle><Html2React html={teamTitle} /></TeamTitle>
              <TeamSubTitle><Html2React html={teamSubTitle} /></TeamSubTitle>
              <TeamText><Html2React html={teamText} /></TeamText>
            </TeamTextContainer>
          </TeamContainer>
        </Team>
      </BigContainer>
      <Advantages>
        <BigTitle size="small" title="Our Advantages" />
        <Container>
          {advantages && advantages.text && (
            <AdvantagesTextContainer>
              {advantages.text.map(item => (
                <AdvantagesText>
                  <Html2React html={item.text}/>
                </AdvantagesText>
              ))}
            </AdvantagesTextContainer>
          )}
          <AdvantagesItems>
            {advantages && advantages.flex && advantages.flex.map(item => {
              const { icon } = item;
              const { url } = icon;
              return (
                <AdvantagesItem>
                  <AdvantagesIcon src={url} />
                  <AdvantagesTitle>
                    <Html2React html={item.title} />
                  </AdvantagesTitle>
                  <AdvantagesSubTitle>
                    <Html2React html={item.text} />
                  </AdvantagesSubTitle>
                  {item.cards && <Cards cards={item.cards} />}
                  {item.block && <Grey textWithImage={item.block} />}
                  {item.textWithImage && (
                    <BlockWI>
                      <BlockWIPhoto src={item.textWithImage.image.url} />
                      <BlockWIText>
                        <Html2React html={item.textWithImage.text} />
                      </BlockWIText>
                    </BlockWI>
                  )}
                  {item.textFinal && (
                    <AdvantagesTextFinal>
                      <Html2React html={item.textFinal} />
                    </AdvantagesTextFinal>
                  )}
                </AdvantagesItem>
              )})}
          </AdvantagesItems>
        </Container>
      </Advantages>
      {footer && (
        <FooterBlock bg={footer.image.url}>
          <FooterBlockText>
            <Html2React html={footer.text} />
          </FooterBlockText>
        </FooterBlock>
      )}
    </Wrapper>
  );
};

export default connect(WhyUs);
