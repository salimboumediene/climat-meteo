import { MetaComponent } from "./../meta-component.component";


/**
 * @type {Meteopolution}
 */

export class Meteopolution extends MetaComponent {

    /**
     * 
     * @param {Component} climat 
     * @param {Model} city 
     * @param {Component} temperature 
     * @param {Component} polution 
     */
    constructor(
        temperature,
        climat,
        polution,
        city) {

        super();
        this.component = [climat, temperature, polution];


        city.bind(
            this.ambiance.bind(this, city)// il faut determiner le contexte qui renvoi au contexte de la function
            // on passe en 1er parametre le contexte pr changer le contexte 
            //et en 2eme parametre les atgument ki seront injecté 
        );
    }

    ambiance(city) {
        let date = new Date;
        let time = window.parseInt(date.getTime() / 1000, 10);//
        let ambiance = ["sunset", "sunrise", "day", "night"];
        let elements = window.document.getElementsByTagName("meteopolution")[0];
        let className = elements.getAttribute("class");
        for (let i = 0, l = ambiance.length; i < l; i++) {
            className = className.replace(" " + ambiance[i], "");
        }
        let interval = 4200;
        className += " "
                    + (time < city.get("sunrise") + interval || time > city.get("sunset")
                    ? "night"
                    : (time < city.get("sunrise") + interval && time < citu.get("sunrise") + interval
                    ? "sunrise"
                    : (time > city.get("sunrise") + interval &&  time < city.get("sunset")
                    ? "day"
                    : ( time < city.get("sunset") &&  time < city.get("sunset") + interval
                    ? "sunset"
                    : "" ))));
    elements.className = className;
    }


}