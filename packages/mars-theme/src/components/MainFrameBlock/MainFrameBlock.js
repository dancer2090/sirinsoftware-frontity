import React from 'react';
import { connect } from 'frontity';
import {
  Container,
  MainBlock,
  MainBlockButton,
  MainBlockContainer,
  MainBlockIcon,
  MainBlockLeft,
  MainBlockRight,
  MainBlockTitle,
} from './styles';

const MainFrameBlock = ({
  url = '', title, button, iconUrl, scrollRef = null, className, type = 'short', marginTop = '31', libraries
}) => {
  const Html2React = libraries.html2react.Component;
  const scrollToRef = () => {
    if (scrollRef) {
      window.scrollTo({
        top: scrollRef.current.offsetTop - 100,
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  return (
    <MainBlock bg={url} className={className}>
      <Container>
        <MainBlockContainer>
          <MainBlockLeft>
            <MainBlockTitle type={type}>
              <Html2React html={title} />
            </MainBlockTitle>
            {button && button !== '' && <MainBlockButton onClick={() => scrollToRef()} marginTop={marginTop}>{button}</MainBlockButton>}
          </MainBlockLeft>
          <MainBlockRight>
            {iconUrl && <MainBlockIcon alt={title} src={iconUrl} />}
          </MainBlockRight>
        </MainBlockContainer>
      </Container>
    </MainBlock>
  );
};

export default connect(MainFrameBlock);
