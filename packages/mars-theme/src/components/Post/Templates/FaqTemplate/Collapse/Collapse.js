import React, { useState, useRef, useEffect } from 'react';
import {
  Container,
  ItemHeader,
  ItemIcon,
  ItemBody,
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
      <div
        className="item-card"
        itemScope
        itemProp="mainEntity"
        itemType="https://schema.org/Question"
      >
        <ItemHeader>
          <div
            className="item-title"
            itemProp="name"
          >
            {data.question}
          </div>
          <ItemIcon
            onClick={toggleCollapse}
            active={active}
            color={color}
          />
        </ItemHeader>
        <ItemBody ref={content} style={{ maxHeight: height }}>
          <div
            className="item-content"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <div
              className="item-text"
              itemProp="text"
            >
              <Html2React html={data.description} />
            </div>
          </div>
        </ItemBody>
      </div>
    </Container>
  );
};

export default Collapse;
