import { Hydrator } from "./hydrator.hydrator";

/**
 * @type {Weather}
 */
export class Weather extends Hydrator {


    /**
     * 
     * @param {Model} model 
     * @param {Object} object 
     */
    hydrate(model, object){
            model.set("name", object.name);
            model.set("sunset", object.sys.sunset);
            model.set("sunrise", object.sys.sunrise);
            model.set("lat", object.coord.lat);
            model.set("lng", object.coord.lon);
            model.get("climat").set("humidity", object.main.humidity);
            model.get("climat").set("wind", object.wind.speed);
            model.get("climat").set("pression", object.main.pressure);
            model.get("climat").set("description", object.weather[0].main);
            model.get("climat").get("temperature").set("min", object.main.temp_min);
            model.get("climat").get("temperature").set("max", object.main.temp_max);
            model.get("climat").get("temperature").set("temperature", object.main.temp);
            model.notify();
    }

    deshydrate(model){
        model.set("name", "");
        model.set("sunset", 0);
        model.set("sunrise", 0);
        model.set("lat", 0);
        model.set("lng", 0);
        model.get("climat").set("humidity", 0);
        model.get("climat").set("wind", 0);
        model.get("climat").set("pression", 0);
        model.get("climat").set("description", "");
        model.get("climat").get("temperature").set("min", 0);
        model.get("climat").get("temperature").set("max", 0);
        model.get("climat").get("temperature").set("temperature", 0);
        model.notify();
}
}