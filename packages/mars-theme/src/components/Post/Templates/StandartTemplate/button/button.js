import React from 'react';
import { Container } from './styles';

const Button = (props) => {
  const { className, children, color } = props;
  return (
    <Container
      className={className}
      color={color}
      {...props}
    >
      { children }
    </Container>
  );
};

export default Button;
