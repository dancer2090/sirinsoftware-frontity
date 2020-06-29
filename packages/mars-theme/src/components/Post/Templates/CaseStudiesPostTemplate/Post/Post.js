import React from 'react';
import {
  Container,
  Title,
  Description
} from './styles';

const Post = ({ className, title = '', children }) => {
  return (
    <Container className={className} >
      <Title>{title}</Title>
      <Description>
        {children}
      </Description>
    </Container>
  )
}

export default Post;