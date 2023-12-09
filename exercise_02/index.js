import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";
import createUser from "./createUser.js";

//test with email as empty string and log result

console.log(createUser('', onError, onSuccess));

//test with email as string and log result
console.log(createUser('enmaormaza@gmail.com', onError, onSuccess));
