import { Model } from "./model.model.";

/**
 * This file contain Climat class
 * 
 * This class is a model aggregated  by the MteoPolution model
 * 
 *@author Salim <<<salimboumediene@gmail.com 
 */

/**
 * @type {Climat}
 */

export class Climat extends Model{
    

      /**
       * @constructor
       * @param {temperature} temperature
       */
     constructor (temperature) {

      super({
            humidity : 0,
            wind : 0 ,
            pressure : 0,
            description : 0,
            temperature : temperature

      });

    }

}