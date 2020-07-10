import React from 'react';
import {
  Card,
  Title,
  Content,
  Item,
  Icon,
} from './styles';

const CardCase = ({
  className, title = '', list = [], nameSvg = '', children,
}) => (
  <Card className={className}>
    <Icon name={nameSvg} />
    <Title>{title}</Title>
    {
          list.length > 0
          && (
            <Content>
              {
                list.map((item, key) => (
                  <Item
                    key={key}
                  >
                    { item.embedded_linux_technology_list_item }
                  </Item>
                ))
              }
            </Content>
          )
        }

    { children }
  </Card>
);

export default CardCase;
