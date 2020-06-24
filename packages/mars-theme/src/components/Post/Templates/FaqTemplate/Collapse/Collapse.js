import React from 'react'
import {
  Container, 
  Item,
  ItemHeader, 
  ItemIcon,
  ItemTitle,
  ItemBody
} from './styles';

const Collapse = () => {
  return (
    <Container>
      <Item>
        <ItemHeader>
          <ItemTitle>
            Why should I hire your company?
          </ItemTitle>
          <ItemIcon></ItemIcon>
        </ItemHeader>
        <ItemBody>
          We offer high-quality engineering in Embedded, Linux and IoT related services. We keep our focus on these services in order to attract the best talent and expertise in the business. Our main goal is to act not as much as the contractor but rather as the trusted partner which makes software R&D process easier, more cost-effective and speeds up the 
          development of new products together with clients.
        </ItemBody>
      </Item>
    </Container>
  )
}

export default Collapse;