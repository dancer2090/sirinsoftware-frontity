import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Header,
  Title,
  Icon,
  ContentImage,
  Content,
  WrapCard,
  TitleCard,
  TextCard,
  CardsWrapper,
  InnerCard,
  InnerCardTitle,
  InnerCardText,
  InnerCardWrapper
} from './styles';

const Block = ({
  state,
  libraries,
  type = '',
  icon = {},
  image = {},
  title = '',
  text = '',
  cards = [],
  textAlignPush = null,
  titleLeftOffset = 0,
  titleRightOffset = 0,
  iconLeftOffset = 0,
  iconRightOffset = 0,
  titleAlign = null,
  lastCloudSpan = null,
  dynamiContent = null
}) => {
  const { imageUrlCheck, urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;

  const replaces = [state.frontity.url, state.frontity.adminUrl];

  const {
    url : iconUrl = ''
  } = icon;
  const {
    url : imageUrl = '',
    sizes : imageSizes = {}
  } = image;
  const types = {
    grey : {
      textColor : '#222',
      titleColor : '#216628',
      paddingLeft : '60px',
      paddingRight : '50px',
      paddingTop : '25px',
      paddingBottom : '40px',
      mobilePaddingLeft : '15px',
      mobilePaddingRight : '15px',
      background : '#F2F2F2'
    },
    white : {
      textColor : '#222',
      titleColor : '#216628',
      paddingLeft : '0px',
      paddingRight : '0px',
      paddingTop : '0px',
      paddingBottom : '0px',
      mobilePaddingLeft : '0px',
      mobilePaddingRight : '0px',
      background : 'transparent'
    },
    green : {
      textColor : '#fff',
      titleColor : '#fff',
      paddingLeft : '60px',
      paddingRight : '50px',
      paddingTop : '25px',
      paddingBottom : '40px',
      mobilePaddingLeft : '15px',
      mobilePaddingRight : '15px',
      background : '#216628'
    }
  }
  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  return ( 
    <Wrapper blockType={types[type]} textAlignPush={textAlignPush}>
      <Header titleAlign={titleAlign} minHeight={icon.height}>
        <Title marginLeft={titleLeftOffset} marginRight={titleRightOffset}>{title}</Title>
        {icon && (
          <Icon
            marginLeft={iconLeftOffset}
            marginRight={iconRightOffset}
            width={icon.width}
            height={icon.height}
            src={iconUrl}
          />
        )}
      </Header>
      {image && imageUrl && <ContentImage width={image.width} height={image.height} src={imageUrlCheck(imageUrl, urlsWithLocal)} />}
      <Content lastCloudSpan={lastCloudSpan}>
        {dynamiContent && dynamiContent.length > 0 && dynamiContent.map((item, key) => (
          <>
          {item && item.standart && <Html2React html={item.standart} />}
          {item.cards && item.cards.length > 0 && (
            <InnerCardWrapper>
              {item.cards.map((item) => {
                const {
                  title = '',
                  color = '',
                  text = ''
                } = item;
                let textColor = '#fff';
                let titleColor = '#fff';
                let bgColor = '#216628';
                if (color === 'grey-orange') {
                  textColor = '#222';
                  titleColor = '#F8710F';
                  bgColor = '#F2F2F2';
                } else if (color === 'grey-green'){
                  textColor = '#222';
                  titleColor = '#216628';
                  bgColor = '#F2F2F2';
                } else if (color === 'orange'){
                  textColor = '#fff';
                  titleColor = '#fff';
                  bgColor = '#F8710F';
                }
                return (
                  <InnerCard bgColor={bgColor}>
                    <InnerCardTitle titleColor={titleColor}>{title}</InnerCardTitle>
                    <InnerCardText textColor={textColor}>{text}</InnerCardText>
                  </InnerCard>
                )
              })}
            </InnerCardWrapper>
          )}
          </>
        ))}
        <Html2React html={text} />
      </Content>
      {cards && (
        <CardsWrapper>
          {cards.map((item, key) => {
            const {
              title = '',
              text = ''
            } = item;
            return (
              <WrapCard key={`${title}_${key}`}>
                <TitleCard>{title}</TitleCard>
                <TextCard>{text}</TextCard>
              </WrapCard>
            )
          })}
        </CardsWrapper>
      )}
    </Wrapper>
  );
};

export default connect(Block);
