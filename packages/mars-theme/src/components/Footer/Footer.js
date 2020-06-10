import React from 'react';
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

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Navigation>
            <NavigationLine>
              <LinkItem>
                <Link href="#">ABOUT US</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">SERVICES</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">CASE STUDIES</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Career</Link>
              </LinkItem>
            </NavigationLine>
            <NavigationLine>
              <LinkItem>
                <Link href="#">Blog</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">FAQ</Link>
              </LinkItem>
              <LinkItem>
                <Link href="#">Contacts</Link>
              </LinkItem>
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
              <Link href="tel:3213288379">
                321 328 8379
              </Link>
            </InfoItem>
            <InfoItem>
              <InfoLabel>
                Email:
              </InfoLabel>
              <Link href="mailto:info@sirinsoftware.com">
                info@sirinsoftware.com
              </Link>
            </InfoItem>
          </Info>
          <Social>
            <SocialLink href="https://www.facebook.com/sirinsoftware" target="__blank">
              <Icon name="facebook-footer"/>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/company/10654107" target="__blank">
              <Icon name="linkedin-footer"/>
            </SocialLink>
            <SocialLink href="https://twitter.com/Sirin_Software" target="__blank" >
              <Icon name="twitter-footer"/>
            </SocialLink>
          </Social>
        </Header>
        <Private>
          © Copyright - Sirin Software. <br className="mobile"/> All Rights Reserved. <br/>
          <Link href="#">Privacy Policy</Link>
        </Private>
      </Container>
    </Wrapper>
  )
}

export default Footer;
