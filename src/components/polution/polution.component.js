import {Component} from "./../component.component";
import {default as template} from "./polution.component.html";

export class Polution extends Component{
    constructor(){
        super();
        this.selector = "polution";
        this.template = template;
    }
}