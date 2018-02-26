import { Hydrator } from "./hydrator.hydrator";

/**
 * @type {Waqi}
 */
export class Waqi extends Hydrator {


    /**
     * 
     * @param {Model} model 
     * @param {Object} object 
     */
    hydrate(model, object){
            model.set("aqi", object.data.aqi ? object.data.aqi : "?");
            model.set("pm25", object.data.iaqi.pm25 ? object.data.iaqi.pm25.v : "?");
            model.set("ozone", object.data.iaqi.o3.v ? object.data.iaqi.o3.v : "?");
            model.notify();
    }

    deshydrate(model){
        model.set("aqi", 0);
        model.set("pm25", 0);
        model.set("ozone", 0);
        model.notify();
}
    
}