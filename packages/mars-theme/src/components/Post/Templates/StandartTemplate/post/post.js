import React from 'react';
import { connect } from 'frontity';
import Link from '../../../../link';
import { Container, Name, LinkButton } from './styles';

const Post = ({ state, libraries, className, children, href = '#' }) => {
  const Html2React = libraries.html2react.Component;
  return (
    <Container className={className}>
      <Link link={href}>
        <Name>
          <Html2React html={children} />
        </Name>
      </Link>
      <Link link={href}>
        <LinkButton>
          Read
        </LinkButton>
      </Link>
    </Container>
  )};

export default connect(Post);
