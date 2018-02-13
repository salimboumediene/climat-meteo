import { Model } from "./model.model.";



export class Polution extends Model{
    
     constructor () {

      super({
            aqi : 0,
            pm25 : 0,
            ozone : 0

      });

    }

}