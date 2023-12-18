import isString from "../helpers/validateString.js";

/**
 * If value is a string and it is not empty transform it to an array
 * @param {any} value
 * @param {Function} onError
 * @param {Function} onSuccess
 * @returns array
 */

const transformStringToArray = (value, onError, onSuccess) => {
  if (isString(value)) {
    return onSuccess(value);
  }

  return onError();
};

export default transformStringToArray;
