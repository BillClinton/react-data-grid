import React from 'react';

const FormErrorMessage = ({ errors, fieldName, message }) => {
  if (errors && errors[fieldName] && errors[fieldName].message) {
    message = errors[fieldName].message;
  }
  return message ? (
    <p className="error">
      <i className="icon" aria-hidden="true"></i>
      {message}
    </p>
  ) : (
    ''
  );
};

export default FormErrorMessage;
