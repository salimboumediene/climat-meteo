/**
 * DECLARATION DE TEST 
 * 1) la 1ere chose a fr lors d'un test unitaire --> describe
 * 2)decrire les assertion --> it
 * 3)le test --> assert
 */

import { describe, beforeEach, it } from "mocha";//la fonction mocha prend tjr 2 arguments minimum
import { assert } from "chai";
import { Model } from "./../../../src/models/model.model";
import { window } from "./../../window";



//decritpion du sujet de test
describe("Model", () => {
    let model;
    //avant chaque it le beforEach sera invoqué 
    beforeEach(() =>  {//on fait notre declataion ici afin d'eviter de le declarer a chak foi
        model = new Model({
        exist: undefined
        });
    });

    it("getCallback return an Array", () => {
        assert.isArray(model.getCallback());
    });

    
    it("setter mute model property if exists", () => {
        let value = true;
        model.set("exist", value);
   
        assert.equal(model.get("exist"), value);
   
    });

    it("getCallback return an Array", () => {
        assert.isArray(model.getCallback());
    });
    
    it("Getter retrieve default value if property is undefined or do not exist", () => {
        let value = "default value";
        assert.equal(model.get("exist", value), value);
    });

    it("Getter retrieve default value if property do not exist", () => {
        let value = "default value";
        assert.equal(model.get("foo", value), value);
    });

    //the window problem
    //on doit inporter le fichier window.js
    it("toString get JSON representation of model property", () => {
        assert.equal(model.toString(), "{}")
    });

    it("toString get JSON representation of muted model property", () => {
        model.set("exist", true);
        assert.equal(model.toString(), "{\"exist\":true}")
    });

    it("notify call binded callback", () => {
        let called = false;
        let callback = () => {
            called = true;
        };
        model.bind(callback);
        model.notify();
        assert.equal(called, true);
    });


});


