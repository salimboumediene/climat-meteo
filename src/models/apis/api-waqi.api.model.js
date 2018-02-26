import { ApiToken } from "./api-token.api.model";



/**
 * @type{ApiWaqi}
 */

export class ApiWaqi extends ApiToken{

   
    /**
     * 
     * @param {Number} lat 
     * @param {Number} lng
     * @returns {String} 
     */
    getEndPoint(lat, lng){
        return `http://api.waqi.info/feed/geo:${lat};${lat}/?token=${this.get("token")}`;
    }
}