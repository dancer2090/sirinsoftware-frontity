import React from 'react';
import { Field } from './styles';

const Input = (props) => {
    const { className, type = 'text' } = props;
    return (
        <Field 
            type={type} 
            className={className} 
            {...props} />
    )
}

export default Input;