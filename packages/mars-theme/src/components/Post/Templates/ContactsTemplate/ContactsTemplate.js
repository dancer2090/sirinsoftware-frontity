import React from 'react';
import { connect } from 'frontity';
import {
  Wrapper,
  Container,
  Description,
  Card,
  CardTitle,
  CardList,
  CardInfo,
  IconContainer,
  Icon,
  Crumbs,
} from './styles';
import oneBg from '../../../../img/kiyv.svg';
import twoBg from '../../../../img/usa.svg';
import Breadcrumbs from '../../../Breadcrumbs';

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
      <Crumbs links={[{ name: 'Contacts', link: '#' }]} />
      <Wrapper>
        <Description>
          <Html2React html={post.content.rendered} />
        </Description>
        <div
          className="row"
          itemScope
          itemType="http://schema.org/Organization"
        >
          { acf.offices_locations.map((item, index) => (
            <Card
              src={index === 0 ? oneBg : twoBg}
              key={index}
            >
              <CardTitle>
                <Html2React html={item.office_header} />
              </CardTitle>
              <CardList>
                <div
                  className="card-address"
                  itemProp="address"
                  itemScope
                  itemType="http://schema.org/PostalAddress"
                >
                  <div className="card-item">
                    <IconContainer>
                      <Icon name="location" />
                    </IconContainer>
                    <span>
                      <Html2React html={item.office_address} />
                    </span>
                  </div>
                </div>
                <CardInfo>
                  <div
                    className="card-item"
                    itemProp="telephone"
                  >
                    <IconContainer>
                      <Icon name="phone" />
                    </IconContainer>
                    <a href={`tel:${item.office_phone1}`}>
                      <Html2React html={item.office_phone1} />
                    </a>
                  </div>
                  <div
                    className="card-item"
                    itemProp="email"
                  >
                    <IconContainer>
                      <Icon name="message" />
                    </IconContainer>
                    <a href={`mailto:${item.office_email}`}>
                      <Html2React html={item.office_email} />
                    </a>
                  </div>
                </CardInfo>
              </CardList>
            </Card>
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default connect(ContactsTemplate);
