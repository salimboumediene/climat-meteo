import {Component} from "./../component.component";
import {default as template} from "./city.component.html";

export class City extends Component{


    /**
     * 
     * @param {*} cityModel 
     * @param {*} apiOpenWeather 
     */
    constructor(model, api){

        
        super();
        this.selector = "city";
        this.template = template;

        /**
         * @returns {Models}
         * 
         */
        this.getModel = () => {
            return model;
        }

        
        /**
         * @returns {ApiToken}
         * 
         */
        this.getApi = () => {
            return api;
        }

        this.geolocation();
    }
    

    geolocation()  {
        
        navigator.geolocation.getCurrentPosition(
           (e) => {
               this.geolocationSuccess (e.coords.latitude, e.coords.longitude)
            },
           (e) => {
               this.getModel().set("name", "-");
               this.render();
               this.exception("Geolocation", "Can't determined yout position");
           },
        
        );
    
    }

    

    exception(title, message, btnText, confirm)  {
        window.ui.dialog.alert(title,message).onconfirm(btnText, confirm);
        

    }

    geolocationSuccess(lat, lng)  {
        var xhr = new XMLHttpRequest;
        xhr.open("GET", this.getApi().getEndPoint(lat, lng));
            //   xhr.onreadystatechange = function (e) {
            //        //cette methode nous permet de connaitre toutes les étapes de notre requete: create, ouvrir, send, reception, resolve.
            //        console.log(this.readyState);
            //    };
            xhr.onload = () => {
                if(200 == xhr.status) {
                    //transformer du texte en Object
                    let reponse = window.JSON.parse(xhr.response);

                    this.getModel().set("name", reponse.name);
                    this.getModel().set("sunset", reponse.name);
                    this.getModel().set("sunrise", reponse.name);
                    this.getModel().get("climat").set("humidity", reponse.main.humidity);
                    this.getModel().get("climat").set("wind", reponse.wind.speed);
                    this.getModel().get("climat").set("pression", reponse.main.pressure);
                    this.getModel().get("climat").set("description", reponse.weather[0].main);
                    this.getModel().get("climat").get("temperature").set("temperature", reponse.main.temp);
                    this.getModel().get("climat").get("temperature").set("min", reponse.main.temp_min);
                    this.getModel().get("climat").get("temperature").set("max", reponse.main.temp_max);
                    
                    this.render();

                return;
            }
        xhr.onerror();
    };

    xhr.onerror = () => {
        this.getModel().set("name", "-");
            this.render();
        this.exception(
            "Information",
            "Can't read information",
            "retry",
    () => {this.geolocationSuccess (lat, lng);}
    );
    };
    xhr.send();
    }

    render() {
        let elements = super.render([this.getModel()]);
        for (
            let i= 0 , l = elements.length ;
             i < l ; 
            window.componentHandler.downgradeElements(elements[i]),
            window.componentHandler.upgradeDom(), i++);
    }

}