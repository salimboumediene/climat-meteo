import { ApiToken } from "./api-token.api.model";



/**
 * @type{ApiOpenWeather}
 */

export class ApiOpenWeather extends ApiToken{

   
    /**
     * 
     * @param {Number} lat 
     * @param {Number} lng
     * @returns {String} 
     */
    getEndPoint(lat,lng){
        return `http://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lng}&appid=${this.get("token")}`;
    }

    /**
     * @param {String} city
     * @returns {String}
     */
    getCityEndPoint(city){
        return `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.get("token")}`;
    }
}