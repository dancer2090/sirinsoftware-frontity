import React, { useState } from 'react';
import { connect } from 'frontity';
import Link from '../../../../link';
import {
  Form,
  Title,
  SubmitButton,
  Description,
  Input,
  FText,
  InputGroup,
  ErrorText,
  RecaptchaText
} from './styles';

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const SubscribeForm = ({actions, state}) => {
  const preErrors = {
    FNAME : false,
    EMAIL : false,
  };
  const preForm = {
    FNAME : '',
    EMAIL : '',
  };

  const [formError, setFormErrorState] = useState(preErrors);
  const [formState, setFormState] = useState(preForm);
  const [preload, setPreload] = useState(false);

  const validForm = () => {
    let error = true;
    const errorObj = {};
    Object.keys(formError).forEach((key) => {
      if (formState[key] === '' || formError[key]) {
        errorObj[key] = true;
        error = false;
      } else errorObj[key] = false;
    });
    setFormErrorState(errorObj);
    return error;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validForm()) {
      let formData = new FormData();
      formData.append('FNAME',formState.FNAME);
      formData.append('EMAIL',formState.EMAIL);
      actions.theme.sendSubscribe(formData);
      setFormErrorState(preErrors);
      setFormState(preForm);
      setPreload(true);
    }
  };

  const handleChangeInput = (e, key) => {
    const inputValue = e.target.value;
    const objJ = {};
    objJ[key] = inputValue;
    setFormState({ ...formState, ...objJ });

    const errorObj = {};
    const type = e.target.attributes.getNamedItem('type').value;
    let optional = false;

    if (type === 'email') {
      if (!validateEmail(inputValue) && !optional) {
        errorObj[key] = true;
      } else {
        errorObj[key] = false;
      }
      setFormErrorState({ ...formError, ...errorObj });
    } else {
      if (inputValue.length < 2 && !optional) {
        errorObj[key] = true;
      } else {
        errorObj[key] = false;
      }
      setFormErrorState({ ...formError, ...errorObj });
    }
  };

  return (
    <Form
      onSubmit={submitForm}
      preloadNEW={state.customSettings.isSubscribeSend || false}
    >
      <Title>
        Stay informed
        onour latest news
      </Title>
      <InputGroup>
        <Input
          name="FNAME"
          placeholder="Name*"
          error={formError["FNAME"]}
          onChange={(e) => handleChangeInput(e, "FNAME")}
          value={formState["FNAME"]}
        />
        { formError['FNAME']
          ? <ErrorText>Field is required</ErrorText>
          : null
        }
      </InputGroup>
      <InputGroup>
        <Input
          type="email"
          name="EMAIL"
          placeholder="Email*"
          error={formError["EMAIL"]}
          onChange={(e) => handleChangeInput(e, "EMAIL")}
          value={formState["EMAIL"]}
        />
        { formError['EMAIL']
          ? <ErrorText>Field is required</ErrorText>
          : null
        }
      </InputGroup>
      <Description>
        Subcribing to our blog you agree with our
        <Link href="/privacy-policy">Privacy Policy</Link>
      </Description>
      <SubmitButton color="yellow">Subscribe</SubmitButton>
      <RecaptchaText>
        This site is protected by reCAPTCHA and the Google <a target="_blank" href="https://policies.google.com/privacy">Privacy Policy</a> and <a target="_blank" href="https://policies.google.com/terms">Terms of Service</a> .
      </RecaptchaText>
    </Form>
  )};

export default connect(SubscribeForm);
