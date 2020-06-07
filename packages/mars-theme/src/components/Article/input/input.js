import React from 'react';
import { Field } from './styles';

const Input = (props) => {
  const { className, type = 'text' } = props;
  return (
    <Field
      type={type}
      autoComplete="off"
      className={className}
      {...props}
    />
  );
};

export default Input;
