import React, { useState } from 'react';
import { connect } from 'frontity';
import {
  Container,
  Label,
  Socials,
  SocialItem,
  CopyLink,
  CopyBlock,
  CopyNotification,
  SocialIcon,
  CopyIcon,
  CopyButton,
} from './styles';

const SocialList = ({ className, title = '', state }) => {
  const [show, setShow] = useState(false);

  const href = `${state.frontity.url}${state.router.link}`;
  const copyLink = () => {
    navigator.clipboard.writeText(href);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };
  return (
    <Container className={className}>
      <Label>Share</Label>
      <Socials>
        <SocialItem
          name="facebook"
          target="__blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${href}`}
        >
          <SocialIcon name="facebook" />
        </SocialItem>
        <SocialItem
          name="linkedin"
          target="__blank"
          href={`https://www.linkedin.com/cws/share?url=${href}`}
        >
          <SocialIcon name="linkedin" />
        </SocialItem>
        <SocialItem
          name="twitter"
          target="__blank"
          href={`https://twitter.com/share?text=${title}&url=${href}`}
        >
          <SocialIcon name="twitter" />
        </SocialItem>
      </Socials>
      <CopyBlock>
        <CopyButton>
          <CopyIcon name="copy" />
          <CopyLink onClick={copyLink}>COPY LINK</CopyLink>
          <CopyNotification className={show ? 'show' : null}>Link was copied</CopyNotification>
        </CopyButton>
      </CopyBlock>
    </Container>
  );
};

export default connect(SocialList);
