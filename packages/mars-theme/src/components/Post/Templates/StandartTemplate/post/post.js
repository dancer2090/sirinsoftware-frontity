import React from 'react';
import { connect } from 'frontity';
import Link from '../../../../link';
import { Container, Name, LinkButton } from './styles';

const Post = ({ state, libraries, className, children, href = '#' }) => {
  const Html2React = libraries.html2react.Component;
  const { urlCheck } = libraries.func;
  const replaces = [state.frontity.url, state.frontity.adminUrl];
  return (
    <Container className={className}>
      <Link link={urlCheck(href, replaces)}>
        <Name>
          <Html2React html={children} />
        </Name>
      </Link>
      <Link link={urlCheck(href, replaces)}>
        <LinkButton>
          Read
        </LinkButton>
      </Link>
    </Container>
  )};

export default connect(Post);
