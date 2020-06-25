import React, { useState, useRef, useEffect } from 'react'
import {
  Container, 
  Item,
  ItemHeader, 
  ItemIcon,
  ItemTitle,
  ItemBody,
  ItemContent
} from './styles';

const Collapse = ({ data = {}, active, index, color, onToggle }) => {
  const content = useRef(null);
  const [height, setHeight] = useState('0px');
  
  useEffect(() => {
    setHeight(!active ? '0px' : content.current.scrollHeight);
  }, [active]);

  const toggleCollapse = () => {
    onToggle(data, !active , index);
  }

  return (
    <Container>
      <Item>
        <ItemHeader>
          <ItemTitle>
            {data.title}
          </ItemTitle>
          <ItemIcon 
            onClick={toggleCollapse} 
            active={active}
            color={color}
          />
        </ItemHeader>
        <ItemBody ref={content} style={{maxHeight: height}}>
          <ItemContent>
            {data.content}
          </ItemContent>
        </ItemBody>
      </Item>
    </Container>
  )
}

export default Collapse;