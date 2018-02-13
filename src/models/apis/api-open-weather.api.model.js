import { ApiToken } from "./api-token.api.model";

/**
 * @type {ApiOpenWeather}
 */
export class ApiOpenWeather extends ApiToken{
    /**
     * @constructor
     * @param {String} token 
     */
    constructor (token) {
        super (token);
    }

    /**
     * 
     * @param {Number} lat 
     * @param {Number} lng
     * @returns {Sting}
     */
    getEndPoint(lat, lng){
        return `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${this.get("token")}`;
    }

}