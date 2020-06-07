import React from 'react';
import {
  Form, Title, SubmitButton, Description, Input,
} from './styles';

const SubscribeForm = () => (
  <Form>
    <Title>
      Stay informed
      onour latest news
    </Title>
    <Input placeholder="Name*" />
    <Input type="email" placeholder="Email*" />
    <Description>
      Subcribing to our blog you agree with our
      <a href="">Privacy Policy</a>
    </Description>
    <SubmitButton color="yellow">Subscribe</SubmitButton>

  </Form>
);

export default SubscribeForm;
