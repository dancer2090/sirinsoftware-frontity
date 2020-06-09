import React from 'react';
import Link from '../../link';
import { Container, Name, LinkButton } from './styles';

const Post = ({ className, children, href = '#' }) => (
  <Container className={className}>
    <Name href={href}>
      { children }
    </Name>
    <Link>
      <LinkButton href={href}>
        Read
      </LinkButton>
    </Link>
  </Container>
);

export default Post;
