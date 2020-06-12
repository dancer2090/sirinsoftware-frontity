import React from 'react';
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

const ContactsTemplate = () => {
  return (
    <Container>
      <Title>
        Thank you for your interest in Sirin Software! 
      </Title>
      <Description>
        By completing the form below you can tell us about your needs. Here you can find <br/>
        all our contact information for both Sirin Software office locations in the USA and Ukraine
      </Description>
      <Row>
        <Card src={oneBg} >
          <CardTitle>
            Kyiv, Ukraine
          </CardTitle>

          <CardList>
            <CartAddress>
              <CardItem>
                <Icon name="location"/>
                <span>
                  Delivery office: <br/>
                  Yaroslavskaya St. 56a, <br/>
                  04071 Kyiv, Ukraine
                </span>
              </CardItem>
            </CartAddress>
            <CardInfo>
              <CardItem>
                <Icon name="phone"/>
                <a href="tel:+380445925087">
                  +38 044 592 50 87
                </a>
              </CardItem>
              <CardItem>
                <Icon name="message"/>
                <a href="mailto:info@sirinsoftware.com">
                  info@sirinsoftware.com
                </a>
              </CardItem>
            </CardInfo>
          </CardList>
        </Card>
        <Card src={twoBg} >
          <CardTitle>
            Orlando, Florida
          </CardTitle>
          <CardList>
            <CartAddress>
              <CardItem>
                <Icon name="location"/>
                <span>
                  Mailing address: <br/>
                  13920 Landstar Blvd Suite #101 - 0060 <br/>
                  Orlando, FL, 32824
                </span>
              </CardItem>
            </CartAddress>

            <CardInfo>
              <CardItem>
                <Icon name="phone"/>
                <a href="tel:+3213288379">
                  321 328 8379
                </a>
              </CardItem>
              <CardItem>
                <Icon name="message"/>
                <a href="mailto:info@sirinsoftware.com">
                  info@sirinsoftware.com
                </a>
              </CardItem>
            </CardInfo>
          </CardList>
        </Card>
      </Row>
    </Container>
  )
}

export default ContactsTemplate;