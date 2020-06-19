import React from 'react'
import {
  Card,
  Title,
  Description,
  Icon
} from './styles';

const BusinesCard = ({ className }) => {
  return (
    <Card className={className}>
      <Icon name="busines" />
      <Title>
        Business <br/> challenge
      </Title>
      <Description>
        The client required a solution that
        would evolve the capabilities of its next generation of smartwatches. 
        The client needed its smartwatches to provide location coordinates to the smartwatches’ 
        owners in the event of an emergency. Due to market expansion for the smartwatches (initially
        they were sold exclusively in South Korea), the client required that the smartwatches connection standards be updated to be compatible with any country in the world – 
        and that any potential errors with differing grid frequencies be eliminated.
      </Description>
    </Card>
  )
}

export default BusinesCard;