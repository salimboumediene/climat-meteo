import {Component} from "./../component.component";
import {default as template} from "./climat.component.html";

/**
 * @type {Climat}
 */

export class Climat extends Component {

 /**
 * @constructor
 * @param {Model} climat
 */
constructor (climat){
    
    super();
    this.selector = "climat";
    this.template = template;

    this.getModel = () => {
        return climat;
    }

    climat.bind(this.render.bind(this));

}

render (){
    super.render([this.getModel()]);
    }

}
