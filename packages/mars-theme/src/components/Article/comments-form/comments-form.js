import React from 'react';
import {
  Container, Title, Form, Input, TextArea, Button,
} from './styles';

const CommentsForm = () => (
  <Container>
    <Title>Leave a comment</Title>
    <Form>
      <Input placeholder="Name*" />
      <Input type="email" placeholder="Email*" />
      <TextArea placeholder="Message" />
      <Button>Send</Button>
    </Form>
  </Container>
);

export default CommentsForm;
