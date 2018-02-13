import {MetaComponent} from "./../meta-component.component";


export class Meteopolution extends MetaComponent{
    /**
     * 
     * @param {Component} temperature
     */
    constructor(temperature, climat, polution){
        super();
        this.component = [temperature, climat, polution];
    }
}