import {Component} from "./../component.component";
import {default as template} from "./city.component.html";

/**
 * @type {City}
 */

export class City extends Component {

 /**
  * @constructor
  * @param {Model} model 
  * @param {ApiToken} api 
  * @param {Hydrator} hydrator
  */
    constructor (model, api, hydrator){
        super();
        this.selector = "city";
        this.template = template;
        this.getModel = ()=>{
            return model;
        }
        this.getApi = ()=>{
            return api;
        }
        this.getHydrator = ()=>{
            return hydrator;
        }
        this.geolocation();
    }

    geolocation(){
        navigator.geolocation.getCurrentPosition(
            (e)=>{
                this.api(e.coords.latitude, e.coords.longitude);
            },
            (e)=>{
                this.exception("Geolocation","Can't determine your position");

            },
        );
    }
    
    api(lat, lng){//cette function nous permet d'appeler l'api et d'etre detectert par la latitude et longitude
        this.getModel().set("name", "-");
        this.render();
        // faire une requete
   var xhr = new XMLHttpRequest;
   xhr.open("GET", this.getApi().getEndPoint(lat,lng));
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

    /**
     * 
     * @param {String} name 
     */
    cityNameEndPoint (name){//cette function nous permet d'appeler l'api au moment ou entre une ville
        var xhr = new XMLHttpRequest;
   xhr.open("GET", this.getApi().getCityEndPoint(name));
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
        this.getHydrator().deshydrate(this.getModel());
        this.exception(
            "Informations",
            "Can't read information",
            "Retry",
        ()=> {this.geolocation();}
        
    )
    };
    xhr.send();

}

    exception(title, message, btnText,confirm){    
        this.getModel().set("name", "-");
        window.ui.dialog.alert(title, message)
        .onconfirm(btnText, confirm);
        this.render();
        
    }
    
    render (){
        
        let elements = super.render([this.getModel()]);
       
        for (let i = 0; i<elements.length; i++){
        window.componentHandler.downgradeElements(elements[i]);
        window.componentHandler.upgradeDom();
        //récupération de la ville recherchée
        let input = elements[i].getElementsByTagName("input")[0];
        
        //quelle touche est pressée
        input.onkeypress = (e) => {
            
            if (13==e.keyCode){
                this.cityNameEndPoint(input.value);
            }
        }
    }
    }
}