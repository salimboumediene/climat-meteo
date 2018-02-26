import {Component} from "./../component.component";
import {default as template} from "./polution.component.html";

/**
 * @type {Polution}
 */

export class Polution extends Component {

    /**
     * 
     * @param {} city 
     * @param {} api 
     * @param {*} hydrator 
     */
    constructor (city, api, hydrator){
        
        super();
        this.selector = "polution";
        this.template = template;

        /**
         * @returns {Model} city
         */
        this.getModel = () => {
            return city.get("polution");
        }

        this.getApi = ()=>{
            return api;
        }
        this.getHydrator = ()=>{
            return hydrator;
        }

        city.bind(//c une fonction ki nous permet d'avoir la latitude et longitude en dynamik
            () => {
                if (city.get("lat")) {
                   return this.api(
                    city.get("lat"),
                    city.get("lng")
                    ) 
                }
            hydrator.deshydrate(this.getModel());
            this.render();    
            }
        );
    }

    api(lat, lng){

 // faire une requete
   let xhr = new XMLHttpRequest;
   xhr.open("GET", this.getApi().getEndPoint(lat, lng));
   xhr.onload = ()=>{
        if (200 == xhr.status){
           //transformer du texte en JSON
            
            this.getHydrator().hydrate(
                this.getModel(),
                window.JSON.parse(xhr.response)
            );
            this.render();

            return;
        }
        xhr.onerror();
   };
   xhr.onerror = ()=>{
    this.exception(
        "Informations",
        "Can't read information",
        "Retry",
         ()=> {this.api(lat,lng);}
        
    )
   };
   xhr.send();

   

    }
    render (){
        let elements = super.render([this.getModel()]);
    }  
}