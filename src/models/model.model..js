

export class Model{

      /**
     * @constructor
     * @param {Object} obj 
     */
constructor (obj) {

      /**
 * @param{String} name
 * @return{*}
 */

 this.get = (name, defaultValue) =>{

      return obj[name] || defaultValue;
}
/**
 * @param{String} name
 * @return{*} value
 */
this.set = (name, value) =>{
      obj[name] = value;
}
      }

}