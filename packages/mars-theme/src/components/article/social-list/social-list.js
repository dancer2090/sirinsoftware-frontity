import React from 'react';
import {
  Container, Label, Socials, SocialItem, CopyLink, CopyBlock, CopyNotification, SocialIcon, CopyIcon, CopyButton,
} from './styles';

const SocialList = ({ className }) => (
  <Container className={className}>
    <Label>Share</Label>
    <Socials>
      <SocialItem name="facebook" href="#">
        <SocialIcon name="facebook" />
      </SocialItem>
      <SocialItem name="linkedin" href="#">
        <SocialIcon name="linkedin" />
      </SocialItem>
      <SocialItem name="twitter" href="#">
        <SocialIcon name="twitter" />
      </SocialItem>
    </Socials>
    <CopyBlock>
      <CopyButton>
        <CopyIcon name="copy" />
        <CopyLink>COPY LINK</CopyLink>
        <CopyNotification>Link was copied</CopyNotification>
      </CopyButton>
    </CopyBlock>
  </Container>
);

export default SocialList;
