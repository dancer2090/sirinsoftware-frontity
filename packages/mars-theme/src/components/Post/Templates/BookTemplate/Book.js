import React, { useState } from 'react';
import { connect } from 'frontity';
import Link from '../../../link';
import Modal from '../../../Modal';

import {
  BookPage,
  BookSpace,
  Book,
  BookContent,
  BookForm,
  FormContent,
  Title,
  Image,
  Text,
  Container,
  Form,
  FormGroup,
  SubmitButton,
  Icon,
  RecaptchaText,
} from './styles';
import {
  validateFieldName,
  validateFieldEmail,
  validateFieldCompany,
  validateCheckbox,
} from '../../../FeedbackForm/Form/utils/validate';

const DEFAULT_FIELDS = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
};

const DEFAULT_FIELDS_CLASSES = {
  firstName: [],
  lastName: [],
  company: [],
  email: [],
};

export const BookTemplate = ({ state, actions }) => {
  const [fields, setFields] = useState(DEFAULT_FIELDS);
  const [fieldsClasses, setFieldsClasses] = useState(DEFAULT_FIELDS_CLASSES);
  const [privacy, setPrivacy] = useState(false);
  const [news, setNews] = useState(false);

  const [hasErrorName, setHasErrorName] = useState(false);
  const [hasLastName, setErrorLastName] = useState(false);
  const [hasCompany, setErrorCompany] = useState(false);
  const [hasEmailError, setErrorEmail] = useState(false);
  const [hasPrivaty, setErrorPrivaty] = useState(false);

  const { acf : acfOptions = {} } = state.options;
  const {
    bookFileDesctop = "",
    bookFileMobile = "",
  } = acfOptions;

  const data = state.source.get(state.router.link);
  const handleChangeTextInput = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };
  const formHandleClose = () => {
    actions.theme.changeFormGuide();
  };

  const handleFocusInput = (e) => {
    const field = e.target.name;
    const classes = fieldsClasses[field];
    classes.push('focused');
    setFieldsClasses({ ...fieldsClasses, [field]: classes });
  };

  const handleBlurInput = (e) => {
    const field = e.target.name;
    const { value } = e.target;

    if (value.length > 0) {
      setFieldsClasses({ ...fieldsClasses });
      return;
    }
    const classes = fieldsClasses[field].filter((c) => c !== 'focused');
    setFieldsClasses({ ...fieldsClasses, [field]: classes });
  };

  const setBoxClasses = (field) => fieldsClasses[field] && fieldsClasses[field].join(' ');

  const validateForm = () => {
    const getNameError = validateFieldName(fields.firstName);
    const getLastError = validateFieldName(fields.lastName);
    const getCompanyError = validateFieldCompany(fields.company);
    const getEmailError = validateFieldEmail(fields.email);
    const getPrivacyError = validateCheckbox(privacy);

    setHasErrorName(getNameError);
    setErrorLastName(getLastError);
    setErrorCompany(getCompanyError);
    setErrorEmail(getEmailError);
    setErrorPrivaty(getPrivacyError);

    return getNameError.length === 0
      && getCompanyError.length === 0
      && getEmailError.length === 0
      && getLastError.length === 0
      && getPrivacyError === false;
  };

  const generateClass = (defaultClass, variable) => {
    if (variable) {
      return `${defaultClass} error`;
    }
    return defaultClass;
  };

  const sendForm = (event) => {
    event.preventDefault();

    const valid = validateForm();

    if (valid) {
      const formData2 = new FormData();
      formData2.append('first_name', fields.firstName);
      formData2.append('last_name', fields.lastName);
      formData2.append('company', fields.company);
      formData2.append('email', fields.email);
      formData2.append('accept-with-news', news);
      formData2.append('privacy', privacy);
      setFields(DEFAULT_FIELDS);

      actions.theme.sendFormGuide(formData2);
    }
  };

  return (
    <BookPage>
      <Modal
        title="Thank you for your request"
        text={"You can download your <a target='_blank' class='desctop' href='" + bookFileDesctop + "'>Book</a> <a target='_blank' class='mobile' href='" + bookFileMobile + "'>Book</a>"}
        isOpen={state.customSettings.sendFormGuide}
        handleClose={formHandleClose}
      />
      <BookSpace>
        <Book>
          <BookContent>
            <h2>Get free</h2>
            <p>
              {' '}
              insights sirin software’s guide to
              <br />
              {' '}
              outsourcing software development
            </p>
            <div className="image">
              <img
                src={`${state.frontity.adminUrl}/wp-content/themes/sirinsoftware/sirindesign/build/img/width_srcset/book_1x.png`}
                srcSet={`${state.frontity.adminUrl}/wp-content/themes/sirinsoftware/sirindesign/build/img/width_srcset/book_1x.png 1x, ${state.frontity.adminUrl}/wp-content/themes/sirinsoftware/sirindesign/build/img/width_srcset/book_2x.png 2x`}
                alt="sirinsoftware book"
              />
            </div>
          </BookContent>
        </Book>
        <BookForm>
          <FormContent>
            <Title>
              <Image>
                <svg width="60" height="97" viewBox="0 0 60 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0)">
                    <path d="M0 4.81364V82.6813C0 85.3712 2.26524 87.4949 4.95521 87.4949H50.1184V96.5559L54.7905 89.7601L59.4626 96.5559V79.9913V77.8676V0H58.3299H5.94626H4.95521C2.26524 0 0 2.12366 0 4.81364ZM57.3389 89.7601L54.7905 86.0791L52.2421 89.7601V79.9913H57.3389V89.7601ZM8.06992 2.12366H57.1973V77.8676H49.9769H8.06992V2.12366ZM49.9769 79.9913V85.2297H4.95521C3.39786 85.2297 2.12366 84.097 2.12366 82.5397C2.12366 80.9823 3.39786 79.8497 4.95521 79.8497H6.08783H49.9769V79.9913ZM5.94626 77.8676H4.95521C3.96417 77.8676 2.97313 78.1508 2.12366 78.7171V4.81364C2.12366 3.39786 3.39786 2.12366 4.95521 2.12366H6.08783L5.94626 77.8676Z" fill="white" />
                    <path d="M16.7061 25.6255H48.8441V17.9803H16.7061V25.6255ZM18.8297 20.104H46.7205V23.5019H18.8297V20.104Z" fill="white" />
                    <path d="M38.9339 30.4392H26.4751V32.5628H38.9339V30.4392Z" fill="white" />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="59.4626" height="96.4143" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Image>
              <Text>
                <h3>Request Brochure</h3>
                <p>
                  Please fill the form
                  <br />
                  {' '}
                  to download
                  <strong>PDF</strong>
                  {' '}
                  file
                </p>
              </Text>
            </Title>
            <Form>
              <form action="" id="Book_send">
                <FormGroup className={generateClass(setBoxClasses('firstName'), hasErrorName)}>
                  <label htmlFor="field-book-first-name">First name *</label>
                  <input
                    type="text"
                    name="firstName"
                    id="field-book-first-name"
                    value={fields.firstName}
                    onChange={handleChangeTextInput}
                    onFocus={handleFocusInput}
                    onBlur={handleBlurInput}
                  />
                  <p className="error-text">Enter first name</p>
                </FormGroup>
                <FormGroup className={generateClass(setBoxClasses('lastName'), hasLastName)}>
                  <label htmlFor="field-book-last-name">Last name *</label>
                  <input
                    type="text"
                    name="lastName"
                    id="field-book-last-name"
                    value={fields.lastName}
                    onChange={handleChangeTextInput}
                    onFocus={handleFocusInput}
                    onBlur={handleBlurInput}
                  />
                  <p className="error-text">Enter last name</p>
                </FormGroup>
                <FormGroup className={generateClass(setBoxClasses('company'), hasCompany)}>
                  <label htmlFor="field-book-company">Company *</label>
                  <input
                    type="text"
                    name="company"
                    id="field-book-company"
                    value={fields.company}
                    onChange={handleChangeTextInput}
                    onFocus={handleFocusInput}
                    onBlur={handleBlurInput}
                  />
                  <p className="error-text">Enter company</p>
                </FormGroup>
                <FormGroup className={generateClass(setBoxClasses('email'), hasEmailError)}>
                  <label htmlFor="ield-book-email">E-mail *</label>
                  <input
                    type="text"
                    name="email"
                    id="field-book-email"
                    value={fields.email}
                    onChange={handleChangeTextInput}
                    onFocus={handleFocusInput}
                    onBlur={handleBlurInput}
                  />
                  <p className="error-text">Enter correct e-mail</p>
                </FormGroup>
                <div className="accept-book-space">
                  <div className="accept-policy">
                    <div className="form-group">
                      <div className="box">
                        <input
                          type="checkbox"
                          checked
                          id="book-cbx-accept"
                          className="cbx"
                          checked={privacy}
                          onChange={() => setPrivacy(!privacy)}
                          name="accetp-with"
                          style={{ display: 'none' }}
                        />
                        <label htmlFor="book-cbx-accept" className="box-block" />
                        <label htmlFor="book-cbx-accept" className="">
                          I accept Sirin Software
                          {' '}
                          <br />
                          <Link link="/privacy-policy">privacy policy</Link>
                        </label>
                      </div>
                      {
                            hasPrivaty
                              && <p className="error-text">Please, accept privacy policy</p>
                          }
                    </div>
                  </div>
                  <div className="accept-news">
                    <div className="form-group">
                      <div className="box">
                        <input
                          type="checkbox"
                          id="book-cbx-news"
                          className="cbx"
                          checked={news}
                          onChange={() => setNews(!news)}
                          name="accetp-with-news"
                          style={{ display: 'none' }}
                        />
                        <label htmlFor="book-cbx-news" className="box-block" />
                        <label htmlFor="book-cbx-news" className="check">
                          I want to stay tuned for Sirin Software latest articles and news
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="send-button">
                  <SubmitButton
                    onClick={(event) => sendForm(event)}
                  >
                    download
                    <Icon name="pdf" />
                  </SubmitButton>
                </div>
              </form>
            </Form>
            <RecaptchaText>
              This site is protected by reCAPTCHA and the Google
              {' '}
              <a target="_blank" href="https://policies.google.com/privacy">Privacy Policy</a>
              {' '}
              and
              {' '}
              <a target="_blank" href="https://policies.google.com/terms">Terms of Service</a>
              {' '}
              apply.
            </RecaptchaText>
          </FormContent>
        </BookForm>
      </BookSpace>
    </BookPage>
  );
};

export default connect(BookTemplate);
