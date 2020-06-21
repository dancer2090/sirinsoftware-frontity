import React from 'react';
import { connect } from 'frontity';
import {
  Container,
  Description,
  Row,
  Card,
  CardTitle,
  CardList,
  CardItem,
  CartAddress,
  CardInfo,
  Icon,
} from './styles';
import oneBg from '../../../../img/kiyv.svg';
import twoBg from '../../../../img/usa.svg';

const ContactsTemplate = ({ state, libraries }) => {
  // Get information about the current URL.
  const data = state.options;
  const dataContent = state.source.get(state.router.link);

  // Get the data of the post.
  const { acf = {} } = data;
  const post = state.source[dataContent.type][dataContent.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  return (
    <Container>
      <Description>
        <Html2React html={post.content.rendered} />
      </Description>
      <Row>
        { acf.offices_locations.map((item, index) => {
          return (
            <Card 
              src={index === 0 ? oneBg : twoBg}
              key={index}
              >
              <CardTitle>
                <Html2React html={item.office_header} />
              </CardTitle>
              <CardList>
                <CartAddress>
                  <CardItem>
                    <Icon name="location" />
                    <span>
                      <Html2React html={item.office_address} />
                    </span>
                  </CardItem>
                </CartAddress>
                <CardInfo>
                  <CardItem>
                    <Icon name="phone" />
                    <a href={item.office_phone1}>
                      <Html2React html={item.office_phone1} />
                    </a>
                  </CardItem>
                  <CardItem>
                    <Icon name="message" />
                    <a href={item.office_email}>
                      <Html2React html={item.office_email} />
                    </a>
                  </CardItem>
                </CardInfo>
              </CardList>
            </Card>
          )
        })
        }
      </Row>
    </Container>
  );
};

export default connect(ContactsTemplate);
