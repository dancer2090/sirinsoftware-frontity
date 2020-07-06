import React, { useState } from 'react';
import { connect } from 'frontity';
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
  Form,
  FormGroup
} from './styles';

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
export const BookTemplate = ({ state }) => {
  const [fields, setFields] = useState(DEFAULT_FIELDS);
  const [fieldsClasses, setFieldsClasses] = useState(DEFAULT_FIELDS_CLASSES);

  const handleChangeTextInput = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleFocusInput = (e) => {
    const field = e.target.name;
    const classes = fieldsClasses[field];
    classes.push('focused');
    setFieldsClasses({ ...fieldsClasses, [field]: classes });
  };

  const handleBlurInput = (e) => {
    const field = e.target.name;
    const classes = fieldsClasses[field].filter((c) => c !== 'focused');
    setFieldsClasses({ ...fieldsClasses, [field]: classes });
  };

  const setBoxClasses = (field) => fieldsClasses[field] && fieldsClasses[field].join(' ');

  return (
    <BookPage>
      <BookSpace>
        <Book>
          <BookContent>
            <h2>Get free</h2>
            <p> insights sirin software’s guide to <br /> outsourcing software development</p>
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
                  <g clip-path="url(#clip0)">
                    <path d="M0 4.81364V82.6813C0 85.3712 2.26524 87.4949 4.95521 87.4949H50.1184V96.5559L54.7905 89.7601L59.4626 96.5559V79.9913V77.8676V0H58.3299H5.94626H4.95521C2.26524 0 0 2.12366 0 4.81364ZM57.3389 89.7601L54.7905 86.0791L52.2421 89.7601V79.9913H57.3389V89.7601ZM8.06992 2.12366H57.1973V77.8676H49.9769H8.06992V2.12366ZM49.9769 79.9913V85.2297H4.95521C3.39786 85.2297 2.12366 84.097 2.12366 82.5397C2.12366 80.9823 3.39786 79.8497 4.95521 79.8497H6.08783H49.9769V79.9913ZM5.94626 77.8676H4.95521C3.96417 77.8676 2.97313 78.1508 2.12366 78.7171V4.81364C2.12366 3.39786 3.39786 2.12366 4.95521 2.12366H6.08783L5.94626 77.8676Z" fill="white"/>
                    <path d="M16.7061 25.6255H48.8441V17.9803H16.7061V25.6255ZM18.8297 20.104H46.7205V23.5019H18.8297V20.104Z" fill="white"/>
                    <path d="M38.9339 30.4392H26.4751V32.5628H38.9339V30.4392Z" fill="white"/>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="59.4626" height="96.4143" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </Image>
              <Text>
                <h3>Request Brochure</h3>
                <p>Please fill the form <br /> to download <strong>PDF</strong> file</p>
              </Text>
            </Title>
            <Form>
              <form action="" id="Book_send">
                <FormGroup className={setBoxClasses('firstName')}>
                  <label for="field-book-first-name">First name *</label>
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
                <FormGroup className={setBoxClasses('lastName')}>
                  <label for="field-book-last-name">Last name *</label>
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
                <FormGroup className={setBoxClasses('company')}>
                  <label for="field-book-company">Company *</label>
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
                <FormGroup className={setBoxClasses('email')}>
                  <label for="ield-book-email">E-mail *</label>
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
                          <div className="accept-block">
                              <input type="checkbox" id="book-cbx-accept" className="cbx" name="accetp-with" style={{ display: 'none' }}/>
                              <label for="book-cbx-accept" className="check">
                                  <table>
                                      <tr>
                                          <td>
                                              <svg width="32px" height="32px" viewBox="0 0 18 18">
                                                  <path fill="#ffffff" d="M0.7,9 L0.7,0.7 L14.5,0.7 L14.5,14.5 L1,14.5 L0.7,9 Z"></path>
                                                  <polyline points="1 9 7 14 15 4"></polyline>
                                              </svg>
                                          </td>
                                          <td>
                                              <span>I accept Sirin Software <br /> <a href="/">privacy policy</a></span>
                                          </td>
                                      </tr>
                                  </table>
                              </label>
                          </div>
                          <p className="error-text">Please, accept privacy policy</p>
                      </div>
                  </div>
                  <div className="accept-news">
                      <div className="form-group">
                          <div className="accept-block">
                              <input type="checkbox" id="book-cbx-news" className="cbx" name="accetp-with-news" style={{ display: 'none' }} />
                              <label for="book-cbx-news" className="check">
                                  <table>
                                      <tr>
                                          <td>
                                              <svg width="32px" height="32px" viewBox="0 0 18 18">
                                                  <path fill="#ffffff" d="M0.7,9 L0.7,0.7 L14.5,0.7 L14.5,14.5 L1,14.5 L0.7,9 Z"></path>
                                                  <polyline points="1 9 7 14 15 4"></polyline>
                                              </svg>
                                          </td>
                                          <td>
                                              <span>I want to stay tuned for Sirin Software latest articles and news</span>
                                          </td>
                                      </tr>
                                  </table>
                              </label>
                          </div>
                          <p className="error-text">Please, accept privacy policy</p>
                      </div>
                  </div>
              </div>
              </form>
            </Form>
          </FormContent>
        </BookForm>
      </BookSpace>
    </BookPage>
  );
};

export default connect(BookTemplate);
