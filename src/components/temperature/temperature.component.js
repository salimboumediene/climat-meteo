import {Component} from "./../component.component";
import {default as template} from "./temperature.component.html";

/**
 * @type {Temperature}
 */

export class Temperature extends Component {

 /**
 * @constructor
 * @param {City} city
 */
    constructor (city){
        
        super();
        this.selector = "temperature";
        this.template = template;

        /**
         * @returns {City} city
         */
        this.getModel = () => {
            return city;
        }

        city.bind(
            this.render.bind(this)); //on rajoute une fonction au modèle
    }

    render (){
    super.render([this.getModel()]);
    }
}