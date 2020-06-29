import React from 'react'
import {
  Card,
  Title,
  Content,
  Item,
  Icon
} from './styles';

const CardCase = ({ className, title = '', lists = [], nameSvg = '' }) => {
  return (
    <Card className={className}>
      <Icon name={nameSvg} />
      <Title>{title}</Title>
      <Content>
        <Item>embedded GUI based on Qt framework</Item>
        <Item>cloud-based remote connectivity (REST-API)</Item>
        <Item>IP-based protocol for realtime digital voice transmission between</Item>
        <Item>DRC and Radiostation (digital voice transmission)</Item>
        <Item>reporting to existing safety system in building via BACnet</Item>
        <Item>smart vandalism detection</Item>
        <Item>embedded GUI based on Qt framework</Item>
        <Item>embedded GUI based on Qt framework</Item>
        <Item>DRC and Radiostation (digital voice transmission)</Item>
      </Content>
    </Card>
  )
}

export default CardCase;