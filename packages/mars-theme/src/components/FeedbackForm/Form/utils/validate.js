import {
  nameCheck,
  companyCheck,
  emailCheck,
  checkboxCheck,
} from './checkValidate';


export const validateFieldName = (name) => {
  const error = [];
  nameCheck.forEach((el) => {
    if (el.validation(name, el.reg)) error.push(el.message);
  });

  return error.length ? error[0] : '';
};

export const validateFieldCompany = (company) => {
  const error = [];

  companyCheck.forEach((el) => {
    if (el.validation(company, el.reg)) error.push(el.message);
  });

  return error.length ? error[0] : '';
};

export const validateFieldEmail = (email) => {
  const error = [];

  emailCheck.forEach((el) => {
    if (el.validation(email, el.reg)) error.push(el.message);
  });

  return error.length ? error[0] : '';
};

export const validateCheckbox = (value) => {
  const error = [];

  checkboxCheck.forEach((el) => {
    if (el.validation(value, el.reg)) error.push(el.message);
  });

  return !!error.length;
};
