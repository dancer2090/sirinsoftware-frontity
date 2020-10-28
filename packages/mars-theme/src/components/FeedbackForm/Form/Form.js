/* eslint-disable no-undef */
/* eslint-disable quote-props */
import React, { useState, useRef } from 'react';
import Link from '../../link';
import {
  InputTextBlock,
  InputGroup,
  FormControl,
  FormTemplate,
  ErrorText,
  Textarea,
  Clip,
  PictureIcon,
  Send,
  BtnSend,
  RecaptchaText,
} from './styles';
import {
  validateFieldName,
  validateFieldCompany,
  validateFieldEmail,
  validateCheckbox,
} from './utils/validate';
import clipImg from '../../../img/clip.svg';

const Form = ({ submitForm }) => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [company, setCompany] = useState('');
  const [companyError, setCompanyError] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [hasErrorPrivacy, setPrivacyError] = useState(false);
  const [nameSelectFile, setSelectFile] = useState('');
  const [message, setMessage] = useState('');
  const [nda, setNda] = useState(false);
  const [trackNews, setTrackNews] = useState(false);
  const fileInput = useRef(null);

  const validateForm = () => {
    const getNameError = validateFieldName(name);
    const getCompanyError = validateFieldCompany(company);
    const getEmailError = validateFieldEmail(email);
    const getPrivacyError = validateCheckbox(privacy);

    setNameError(getNameError);
    setCompanyError(getCompanyError);
    setEmailError(getEmailError);
    setPrivacyError(getPrivacyError);

    return getNameError.length === 0
      && getCompanyError.length === 0
      && getEmailError.length === 0
      && getPrivacyError === false;
  };

  const sendForm = () => {
    gtag('event', 'Click Send in footer form', {
      'event_category': 'Click Send in footer form',
    });
    if (validateForm()) {
      const formData = new FormData();
      formData.append('userfile', fileInput.current.files[0]);
      formData.append('name', name);
      formData.append('email', email);
      formData.append('company', company);
      formData.append('description', message);
      formData.append('nda', nda);
      formData.append('subscribe', trackNews);
      submitForm({ formData });
      setName('');
      setCompany('');
      setEmail('');
      setPrivacy(false);
      setSelectFile('');
      setMessage('');
      setNda(false);
      setTrackNews(false);
    }
  };

  const selectFile = () => {
    const { name } = fileInput.current.files[0];
    setSelectFile(name);
  };


  return (
    <>
      <FormTemplate>
        <InputTextBlock>
          <InputGroup>
            <FormControl
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name*"
            />
            { nameError.length > 0
              ? <ErrorText>{ nameError }</ErrorText>
              : null}
          </InputGroup>
          <InputGroup>
            <FormControl
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
            />
            { emailError.length > 0
              ? <ErrorText>{ emailError }</ErrorText>
              : null}
          </InputGroup>
          <InputGroup>
            <FormControl
              name="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Company*"
            />
            { companyError.length > 0
              ? <ErrorText>{ companyError }</ErrorText>
              : null}
          </InputGroup>
        </InputTextBlock>
        <Textarea
          name="description"
          className="text-field"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          tabIndex="4"
          name="text"
        />
        <Clip>
          <input
            name="userfile"
            type="file"
            id="upload"
            ref={fileInput}
            onChange={selectFile}
            className="hide"
          />
        </Clip>
        <PictureIcon htmlFor="upload">
          { nameSelectFile.length > 0
            ? <span>{ nameSelectFile }</span>
            : null}
          <img src={clipImg} />
        </PictureIcon>
        <Send>
          <div className="box">
            <input
              name="nda"
              tabIndex="5"
              type="checkbox"
              id="nda"
              checked={nda}
              onChange={() => setNda(!nda)}
              className="cbx"
              name="check"
            />
            <label htmlFor="nda">Send me NDA</label>
          </div>
          <div className="box">
            <input
              tabIndex="6"
              type="checkbox"
              id="accept"
              checked={privacy}
              onChange={() => setPrivacy(!privacy)}
              name="check"
              value="yes"
            />
            <label
              htmlFor="accept"
              className={hasErrorPrivacy ? 'error' : null}
            >
              I accept Sirin Software
              {' '}
              <Link link="/privacy-policy"><span>&nbsp; Privacy Policy </span></Link>
            </label>
          </div>
          <div className="box">
            <input
              tabIndex="7"
              type="checkbox"
              checked={trackNews}
              onChange={() => setTrackNews(!trackNews)}
              id="news"
              name="check"
              value="yes"
            />
            <label htmlFor="news">I want to stay tuned for Sirin Software latest articles and news</label>
          </div>
        </Send>
      </FormTemplate>
      <RecaptchaText>
        This site is protected by reCAPTCHA and the Google
        {' '}
        <a target="_blank" href="https://policies.google.com/privacy/">Privacy Policy</a>
        {' '}
        and
        {' '}
        <a target="_blank" href="https://policies.google.com/terms/">Terms of Service</a>
        {' '}
        .
      </RecaptchaText>
      <BtnSend>
        <button onClick={sendForm}>SEND</button>
      </BtnSend>
    </>
  );
};

export default Form;
