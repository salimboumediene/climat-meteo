/**
 * @type{Model}
 */

export class Model {

    /**
     * @constructor
     * @param {object} model
     */
    constructor(model){


        model = model || {};
        /**
         * @type {Array}
         */
        let callback = [];

        /**
         * @returns {Function[]}
         */
        this.getCallback = () => {
            return callback;
        }
        /**
         * @param {String} name
         * @param {*} value
         * @returns {*} 
         */
        this.get = (name, value) =>{
            return undefined !== model[name]
                    ? model[name] : value
            // return model[name] || value;
        }

     
        /**
         * @returns {String}
         */
        this.toString = () => {
            return window.JSON.stringify(model);
        }
        

        /**
         * @param {String} name
         * @returns {*} value
         */
        this.set = (name, value) =>{
            if (name in model) {//il ya deux methode ki permettent de savoir si une methode existe ds un objet
                                //obj.hasOwnProperty(name) ou name in obj
            model[name] = value;
            }
        }

        /**
         * @returns {model}
         */
        this.getmodel = () => {
            return model;
        }
    }
       
    /**
     * @param {Function}
     */
    bind (callback){
    this.getCallback().push(callback);
    }

    notify (){
        // on invoque les callback
        for (
            let i=0,
            l=this.getCallback().length;
            i<l;
            this.getCallback()[i](), i++
        );
        // on invoque les notify des agregations-compositions
        for (let key in this.getmodel()){
            if ("object"===typeof this.getmodel()[key] && (this.getmodel()[key] instanceof Model)){
                this.getmodel()[key].notify();
            }
        }
    }
}
