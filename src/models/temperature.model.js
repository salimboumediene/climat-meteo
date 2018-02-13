import { Model } from "./model.model.";



export class Temperature extends Model{
    

      /**
       * @constructor
       */
     constructor (temperature) {

      super({
           temperature : temperature,
           min : 0,
           max : 0

      });

    }

}