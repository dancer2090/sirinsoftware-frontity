import React from 'react';
import { connect } from 'frontity';
import {
  Container,
  Title,
  Description,
  Row,
  Card,
  CardTitle,
  CardList,
  CardItem,
  CartAddress,
  CardInfo,
  Icon
} from './styles';
import oneBg from '../../../../img/kiyv.svg';
import twoBg from '../../../../img/usa.svg';

const ContactsTemplate = ({ state, libraries }) => {
   // Get information about the current URL.
  const data = state.options;
  const dataContent = state.source.get(state.router.link);

  // Get the data of the post.
  const office = data.acf.offices_locations
  const post = state.source[dataContent.type][dataContent.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return (
    <Container>
      <Title>
        <Html2React html={post.excerpt.rendered} />
      </Title>
      <Description>
        <Html2React html={post.content.rendered} />
      </Description>
      <Row>
        <Card src={oneBg} >
          <CardTitle>
            <Html2React html={office[0].office_header} />
          </CardTitle>
          <CardList>
            <CartAddress>
              <CardItem>
                <Icon name="location"/>
                <span>
                  <Html2React html={office[0].office_address} />
                </span>
              </CardItem>
            </CartAddress>
            <CardInfo>
              <CardItem>
                <Icon name="phone"/>
                <a href={office[0].office_phone1}>
                  <Html2React html={office[0].office_phone1} />
                </a>
              </CardItem>
              <CardItem>
                <Icon name="message"/>
                <a href={office[0].office_email} >
                  <Html2React html={office[0].office_email} />
                </a>
              </CardItem>
            </CardInfo>
          </CardList>
        </Card>
        <Card src={twoBg} >
          <CardTitle>
            <Html2React html={office[1].office_header} />
          </CardTitle>
          <CardList>
            <CartAddress>
              <CardItem>
                <Icon name="location"/>
                <span>
                  <Html2React html={office[1].office_address} />
                </span>
              </CardItem>
            </CartAddress>

            <CardInfo>
              <CardItem>
                <Icon name="phone"/>
                <a href={office[1].office_phone1}>
                  <Html2React html={office[1].office_phone1} />
                </a>
              </CardItem>
              <CardItem>
                <Icon name="message"/>
                <a href={office[1].office_email} >
                  <Html2React html={office[1].office_email} />
                </a>
              </CardItem>
            </CardInfo>
          </CardList>
        </Card>
      </Row>
    </Container>
  )
}

export default connect(ContactsTemplate);