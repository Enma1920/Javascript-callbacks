import isString from "../helpers/validateString.js";

/**
 * function that generates a random number and returns a message
 * @param {string} email
 * @param {Function} onError
 * @param {Function} onSuccess
 * @returns array
 */

const createUser = (email, onError, onSuccess) => {
  const randomNumber = Math.random();

  if (randomNumber < 0.5 || isString(email) === false) {
    return onError();
  }

  return onSuccess(email);
};

export default createUser;
