import { Model } from "./model.model.";



export class City extends Model{
    
    /**
     * 
     * @param {*} polution 
     * @param {*} climat 
     */
     constructor (polution, climat) {

      super({
            name : "",
            sunrise : 0,
            sunset : 0,
            polution : polution,
            climat : climat

      });

    }

}