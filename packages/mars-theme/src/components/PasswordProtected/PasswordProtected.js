import React, { useState } from 'react';
import {
  Container,
  PasswordProtectedGlobal,
  PasswordForm,
  InputGroup,
  FormControl,
  Label,
  BtnSend,
  ErrorText,
} from './styles';

import {
  validateFieldName
} from '../FeedbackForm/Form/utils/validate';

const PasswordProtected = ({ submitForm, passwordOrigin = "" }) => {

  const [password, setPassword] = useState('');
  const [PasswordError, setPasswordError] = useState('');

  const validateForm = () => {
    const getPasswordError = validateFieldName(password);
    setPasswordError(getPasswordError);
    if(password !== passwordOrigin) setPasswordError("Wrong Password");
    console.log(passwordOrigin);
    return getPasswordError.length === 0 &&
    password === passwordOrigin;
  }

  const sendForm = (e) => {
    e.preventDefault();
    if(validateForm()) {
      submitForm({password});
    }
  }

  return (
    <PasswordProtectedGlobal>
      <PasswordForm>
        <Label> Please enter your password to access this page </Label>
        <InputGroup>
          <FormControl 
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="*****" />
            { PasswordError.length > 0
              ? <ErrorText> Wrong password </ErrorText>
              : null
            }
        </InputGroup>
        <BtnSend>
          <button onClick={sendForm}>SEND</button>
        </BtnSend>
      </PasswordForm>
    </PasswordProtectedGlobal>
  );
};

export default PasswordProtected;
