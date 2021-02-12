import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  ContentWrapper,
  Content,
  Title,
  Card,
  LastCard
} from './styles';

const GreenBlock = ({
  state,
  libraries,
  background = '',
  cards = null,
  last = null,
  title = '',
  titleWidth = null
}) => {
  const { imageUrlCheck, urlCheck } = libraries.func;
  const { urlsWithLocal = {} } = state.customSettings;

  const replaces = [state.frontity.url, state.frontity.adminUrl];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  return (
    <>
      <Wrapper bg={background}>
        <ContentWrapper>
          {title && <Title titleWidth={titleWidth}>{title}</Title>}
          <Content>
            {cards && cards.length > 0 && cards.map((item,key)=>(
              <Card cardWidth={item.width} key={`${key}_${item.width}`}>
                <Html2React html={item.card} />
              </Card>
            ))}
          </Content>
          {last && last !== '' && (
              <LastCard>
                <Html2React html={last} />
              </LastCard>
            )}
        </ContentWrapper>
      </Wrapper>
    </>
  );
};

export default connect(GreenBlock);
