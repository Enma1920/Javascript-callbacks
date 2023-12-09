import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
import transformStringToArray from "./transformStringToCollection.js";

//test with value as number and log result
console.log(transformStringToArray(1, onError, onSuccess));

//test with value as array and log result
console.log(transformStringToArray([], onError, onSuccess));

//test with value as boolean and log result
console.log(transformStringToArray(true, onError, onSuccess));

//test with value as empty string and log result
console.log(transformStringToArray('', onError, onSuccess));

//test with value as string and log result
console.log(transformStringToArray('This is a string', onError, onSuccess));
