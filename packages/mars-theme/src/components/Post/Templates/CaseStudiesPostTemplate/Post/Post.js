import React from 'react';
import {
  Container,
  Title,
  Description
} from './styles';

const Post = ({ className, href, title = '', children }) => {
  return (
    <Container className={className} link={href}>
      <Title>{title}</Title>
      <Description>
        {children}
      </Description>
    </Container>
  )
}

export default Post;