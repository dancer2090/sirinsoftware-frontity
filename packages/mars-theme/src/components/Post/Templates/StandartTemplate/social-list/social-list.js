import React, { useState } from 'react';
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

const SocialList = ({ className, title = '' }) => {
  const [show, setShow] = useState(false);

  let href;
  const copyLink = () => {
    href = location.href;
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

export default SocialList;
