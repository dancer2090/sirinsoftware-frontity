import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Container,
  Header,
  Navigation,
  LinkItem,
  Link,
  InfoTitle,
  InfoItem,
  InfoLabel,
  Social,
  SocialLink,
  Icon,
  Private,
  NavigationLine,
} from './styled';

const Footer = ({ state, libraries }) => {
  const { footer_menu = {} } = state.theme.menu;
  const { items = [] } = footer_menu;
  const { acf = {} } = state.options;

  const { urlCheck } = libraries.func;
  const replaces = [state.frontity.url, state.frontity.adminUrl];

  return (
    <Wrapper>
      <Container>
        <Header>
          <Navigation>
            <NavigationLine>
              {
                items.map((item, index) => (
                  index < 4
                      && (
                      <LinkItem key={index}>
                        <Link link={urlCheck(item.url, replaces)}>
                          { item.title }
                        </Link>
                      </LinkItem>
                      )
                ))
              }
            </NavigationLine>
            <NavigationLine>
              {
                items.map((item, index) => (
                  index >= 4
                      && (
                      <LinkItem key={index}>
                        <Link link={urlCheck(item.url, replaces)}>
                          { item.title }
                        </Link>
                      </LinkItem>
                      )
                ))
              }
            </NavigationLine>
          </Navigation>
          <div
            className="info"
            itemScope
            itemType="http://schema.org/Organization"
          >
            <InfoTitle>
              CONTACT US:
            </InfoTitle>
            <InfoItem>
              <InfoLabel>
                Phone:
              </InfoLabel>
              <Link href={`tel:${acf.main_phone_number}`} itemProp="telephone">
                { acf.main_phone_number }
              </Link>
            </InfoItem>
            <InfoItem>
              <InfoLabel>
                Email:
              </InfoLabel>
              <Link href={`mailto:${acf.main_email}`} itempProp="email">
                { acf.main_email }
              </Link>
            </InfoItem>
          </div>
          <Social>
            <SocialLink href={acf.facebook_link} target="__blank">
              <Icon name="facebook-footer" />
            </SocialLink>
            <SocialLink href={acf.linkedin_link} target="__blank">
              <Icon name="linkedin-footer" />
            </SocialLink>
            <SocialLink href={acf.twitter_link} target="__blank">
              <Icon name="twitter-footer" />
            </SocialLink>
          </Social>
        </Header>
        <Private>
          © Copyright - Sirin Software.
          {' '}
          <br className="mobile" />
          {' '}
          All Rights Reserved.
          {' '}
          <br />
          <Link href="/privacy-policy">Privacy Policy</Link>
        </Private>
      </Container>
    </Wrapper>
  );
};

export default connect(Footer);
