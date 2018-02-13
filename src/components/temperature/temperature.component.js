import {Component} from "./../component.component";
import {default as template} from "./temperature.component.html";

export class Temperature extends Component{
    constructor(){
        super();
        this.selector = "temperature";
        this.template = template;
    }
}