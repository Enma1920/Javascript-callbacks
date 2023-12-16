/**
 * Define 'transformStringToArray' function and signature (JSDocs)
 *
 * input:
 *  - value: any
 *  - onError: function
 *  - onSuccess: function
 *
 * If received value is not a string or it is an empty string, then call onError callback
 * Otherwise, call onSuccess function
 *
 * output
 *  - array
 */

/**
 * If value is a string and it is not empty transform it to an array
 * @param {any} value
 * @param {Function} onError
 * @param {Function} onSuccess
 * @returns array
 */

const transformStringToArray = (value, onError, onSuccess) => {
  if (typeof value !== "string" || value === "") {
    return onError();
  }

  return onSuccess(value);
};

export default transformStringToArray;
