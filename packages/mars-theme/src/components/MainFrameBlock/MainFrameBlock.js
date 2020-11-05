import React from 'react';
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
  url = '', title, button, iconUrl, scrollRef = null, className
}) => {
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
            <MainBlockTitle>{title}</MainBlockTitle>
            <MainBlockButton onClick={() => scrollToRef()}>{button}</MainBlockButton>
          </MainBlockLeft>
          <MainBlockRight>
            <MainBlockIcon alt={title} src={iconUrl} />
          </MainBlockRight>
        </MainBlockContainer>
      </Container>
    </MainBlock>
  );
};

export default MainFrameBlock;
