import React from 'react'
import {
  Card,
  Title,
  Description,
  Icon
} from './styles';

const BusinesCard = ({ className, children }) => {
  return (
    <Card className={className}>
      <Icon name="busines" />
      <Title>
        Business <br/> challenge
      </Title>
      <Description>
        { children }
      </Description>
    </Card>
  )
}

export default BusinesCard;