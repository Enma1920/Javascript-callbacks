/**
 * @param {any} value
 * @returns boolean
 */
const isString = (value)=>{
    if(value === undefined || typeof value !== "string" || value.length === 0){
        return false;
    }
    return true;
}
export default isString;