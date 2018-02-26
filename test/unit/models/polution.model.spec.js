/**
 * DECLARATION DE TEST 
 * 1) la 1ere chose a fr lors d'un test unitaire --> describe
 * 2)decrire les assertion --> it
 * 3)le test --> assert
 */

import { describe, beforeEach, it } from "mocha";//la fonction mocha prend tjr 2 arguments minimum
import { assert } from "chai";
import { window } from "./../../window";
import { Polution } from "../../../src/models/polution.model";

let polution 

//decritpion du sujet de test
describe("Polution", () => {

    //avant chaque it le beforEach sera invoqué

    beforeEach(() =>  {//on fait notre declataion ici afin d'eviter de le declarer a chak foi
    polution = new Polution({
        exist: undefined
        });   
    });

    it("Polution contain a aqi set to 0", () => {
        assert.equal(polution.get("aqi"), 0);
    });

    it("Polution contain a pm25 set to 0", () => {
        assert.equal(polution.get("pm25"), 0);
    });

    it("Polution contain a ozone set to 0", () => {
        assert.equal(polution.get("ozone"), 0);
    });

    
});


