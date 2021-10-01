import { connect } from 'frontity';
import {
  Card, CardInfo, CardList, CardTitle, Icon, IconContainer,
} from '../styles';
import oneBg from '../../../../../img/kiyv.svg';
import twoBg from '../../../../../img/usa.svg';


const Cards = ({ offices_locations = [], libraries, children }) => {
  const Html2React = libraries.html2react.Component;
  return (
    <div
      className="row"
      itemScope
      itemType="http://schema.org/Organization"
    >
      { offices_locations && offices_locations.length > 0 && offices_locations.map((item, index) => (
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
      {children}
    </div>
  )
};

export default connect(Cards);
