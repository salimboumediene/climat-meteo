/**
 * DECLARATION DE TEST 
 * 1) la 1ere chose a fr lors d'un test unitaire --> describe
 * 2)decrire les assertion --> it
 * 3)le test --> assert
 */

import { describe, beforeEach, it } from "mocha";//la fonction mocha prend tjr 2 arguments minimum
import { assert } from "chai";
import { window } from "./../../window";
import { Temperature } from "../../../src/models/temperature.model";



//decritpion du sujet de test
describe("temperature", () => {
    let temperature
    //avant chaque it le beforEach sera invoqué

    beforeEach(() =>  {//on fait notre declataion ici afin d'eviter de le declarer a chak foi
    temperature = new Temperature({
        exist: undefined
        });     
    });

    it("temperature contain a min set to 0", () => {
        assert.equal(temperature.get("min"), 0);
    });

    it("temperature contain a max set to 0", () => {
        assert.equal(temperature.get("max"), 0);
    });

    it("temperature contain a ozone set to 0", () => {
        assert.equal(temperature.get("temp"), 0);
    });


});


