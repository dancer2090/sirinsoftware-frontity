import React from 'react';
import { Container, Label, Socials, SocialItem, CopyLink, CopyBlock, CopyNotification, SocialIcon, CopyIcon, CopyButton } from './styles';

const SocialList = ({ className }) => {
    return (
        <Container className={className}>
            <Label>Share</Label>
            <Socials>
                <SocialItem name="facebook" href="#">
                    <SocialIcon name="facebook"></SocialIcon>
                </SocialItem>
                <SocialItem name="linkedin" href="#">
                    <SocialIcon name="linkedin"></SocialIcon>
                </SocialItem>
                <SocialItem name="twitter" href="#">
                    <SocialIcon name="twitter"></SocialIcon>
                </SocialItem>
            </Socials>
            <CopyBlock>
                <CopyButton>
                    <CopyIcon name="copy"></CopyIcon>
                    <CopyLink>COPY LINK</CopyLink>
                    <CopyNotification>Link was copied</CopyNotification>
                </CopyButton>
            </CopyBlock>
        </Container>
    )
}

export default SocialList;