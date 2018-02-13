import {Component} from "./../component.component";
import {default as template} from "./climat.component.html";

export class Climat extends Component{
    constructor(){
        super();
        this.selector = "climat";
        this.template = template;
    }
}