import React from 'react';
import { connect } from 'frontity';
import Breadcrumbs from '../../../Breadcrumbs';
import {
  Wrapper,
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
import CollapseList from '../FaqTemplate/CollapseList';
import { filterQuestions } from '../../../../utils/filterQuestions';

const ContactsTemplate = ({ state, libraries }) => {
  // Get information about the current URL.
  const data = state.options;
  const dataContent = state.source.get(state.router.link);

  // Get the data of the post.
  const { acf = {} } = data;
  const post = state.source[dataContent.type][dataContent.id];

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  const faqArray = filterQuestions(state, dataContent.id);

  return (
    <Container>
      <Breadcrumbs links={[{ name: 'Contacts', link: '#' }]} />
      <Wrapper>
        <Description>
          <Html2React html={post.content.rendered} />
        </Description>
        <Row itemscope itemtype="http://schema.org/Organization">
          { acf.offices_locations.map((item, index) => (
            <Card
              src={index === 0 ? oneBg : twoBg}
              key={index}
            >
              <CardTitle>
                <Html2React html={item.office_header} />
              </CardTitle>
              <CardList>
                <CartAddress itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
                  <CardItem>
                    <Icon name="location" />
                    <span>
                      <Html2React html={item.office_address} />
                    </span>
                  </CardItem>
                </CartAddress>
                <CardInfo>
                  <CardItem itemprop="telephone">
                    <Icon name="phone" />
                    <a href={item.office_phone1} >
                      <Html2React html={item.office_phone1} />
                    </a>
                  </CardItem>
                  <CardItem itemprop="email">
                    <Icon name="message" />
                    <a href={item.office_email}>
                      <Html2React html={item.office_email} />
                    </a>
                  </CardItem>
                </CardInfo>
              </CardList>
            </Card>
          ))}
        </Row>

        <CollapseList elements={faqArray} libraries={libraries} />
      </Wrapper>
    </Container>
  );
};

export default connect(ContactsTemplate);
