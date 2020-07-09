import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  Item,
  ItemHeader,
  ItemIcon,
  ItemTitle,
  ItemBody,
  ItemContent,
} from './styles';

const Collapse = ({
  data = {}, active, index, color, onToggle, libraries,
}) => {
  const content = useRef(null);
  const [height, setHeight] = useState('0px');
  const Html2React = libraries.html2react.Component;

  useEffect(() => {
    setHeight(!active ? '0px' : content.current.scrollHeight);
  }, [active]);

  const toggleCollapse = () => {
    onToggle(data, !active, index);
  };

  return (
    <Container>
      <Item>
        <ItemHeader>
          <ItemTitle>
            {data.question}
          </ItemTitle>
          <ItemIcon
            onClick={toggleCollapse}
            active={active}
            color={color}
          />
        </ItemHeader>
        <ItemBody ref={content} style={{ maxHeight: height }}>
          <ItemContent>
            <Html2React html={data.description} />
          </ItemContent>
        </ItemBody>
      </Item>
    </Container>
  );
};

export default Collapse;
