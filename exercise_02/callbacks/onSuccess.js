/**
 * Define 'onSuccess' function and signature
 * It receives an email as string and returns a string
 *
 * input:
 *  - email: string
 *
 * output:
 *  - string: User with email {email} has been correctly created
 */

/**
 * Function that receives an email an returns a message with it
 * @param {string} email
 * @returns string
 */

const onSuccess = (email) =>{

    return `User with email ${email} has been correctly created`;

}

export default onSuccess;