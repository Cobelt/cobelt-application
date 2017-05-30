const _hasErr = (error, field, fieldName, form, errorsMessages) => {
  error = field.hasError(error);
  return {
    thenTell: (message) => {
      if (error) {
        errorsMessages[fieldName] = message;
      }
      return {
        elseIfHasError: (error) => {
          return _hasErr(error, field, fieldName, form, errorsMessages);
        },
        elseIfField: (field) => {
          return _ifField(field, form, errorsMessages);
        }
      }
    }
  }
};

const _ifField = (field, form, errorsMessages) => {
  const fieldName: string = field;
  field = form.get(field);
  return {
    hasError: (error) => {
      return _hasErr(error, field, fieldName, form, errorsMessages);
    }
  }
};

export const inForm = (form) => {
  return {
    placeErrorsMessagesIn: (errorsMessages) => {
      return {
        ifField: (field) => _ifField(field, form, errorsMessages)
      }
    }

  }
};

