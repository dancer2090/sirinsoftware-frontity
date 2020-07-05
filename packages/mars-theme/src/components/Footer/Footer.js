import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Container,
  Header,
  Navigation,
  LinkItem,
  Link,
  Info,
  InfoTitle,
  InfoItem,
  InfoLabel,
  Social,
  SocialLink,
  Icon,
  Private,
  NavigationLine
} from './styled';

const Footer = ({ state, libraries}) => {
  const { main = {} } = state.theme.menu;
  const { items = [] } = main;
  const { acf = {} } = state.options;

  console.log(acf)
  return (
    <Wrapper>
      <Container>
        <Header>
          <Navigation>

            <NavigationLine>
              {
                items.map((item, index) => {
                  return (
                    index < 4 &&
                      <LinkItem key={index}>
                        <Link href={item.urlFrontity}>
                          { item.title }
                        </Link>
                      </LinkItem>
                  )
                }) 
              }
            </NavigationLine>
            <NavigationLine>
              {
                items.map((item, index) => {
                  return (
                    index >=4 &&
                      <LinkItem key={index}>
                        <Link href={item.urlFrontity}>
                          { item.title }
                        </Link>
                      </LinkItem>
                  )
                }) 
              }
            </NavigationLine>
          </Navigation>
          <Info>
            <InfoTitle>
              CONTACT US:
            </InfoTitle>
            <InfoItem>
              <InfoLabel>
                Phone:
              </InfoLabel>
              <Link href={`tel:${acf.main_phone_number}`}>
                { acf.main_phone_number }
              </Link>
            </InfoItem>
            <InfoItem>
              <InfoLabel>
                Email:
              </InfoLabel>
              <Link href={`mailto:${acf.main_email}`}>
                { acf.main_email }
              </Link>
            </InfoItem>
          </Info>
          <Social>
            <SocialLink href={acf.facebook_link} target="__blank">
              <Icon name="facebook-footer"/>
            </SocialLink>
            <SocialLink href={acf.linkedin_link} target="__blank">
              <Icon name="linkedin-footer"/>
            </SocialLink>
            <SocialLink href={acf.twitter__link} target="__blank" >
              <Icon name="twitter-footer"/>
            </SocialLink>
          </Social>
        </Header>
        <Private>
          © Copyright - Sirin Software. <br className="mobile"/> All Rights Reserved. <br/>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </Private>
      </Container>
    </Wrapper>
  )
}

export default connect(Footer);
