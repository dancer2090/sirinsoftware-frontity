import React from 'react';
import { Container, Name, Link } from './styles';

const Post = ({ className, children, href = '#' }) => (
    <Container className={ className }>
        <Name>
            { children }
        </Name>
        <Link href={ href }>
            Read
        </Link>
    </Container>
);

export default Post;