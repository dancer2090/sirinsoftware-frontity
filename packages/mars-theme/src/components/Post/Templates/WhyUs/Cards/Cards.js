import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  CardsContainer,
  Card,
} from './styles';

const Cards = ({ libraries, cards = [] }) => {

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return (
    <Wrapper>
      <CardsContainer>
        {cards && cards.map(item => (
          <Card key={item.text.slice(2)}>
            <Html2React html={item.text} />
          </Card>
        ))}
      </CardsContainer>
    </Wrapper>
  );
};

export default connect(Cards);
