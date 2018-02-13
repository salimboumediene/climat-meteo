import { Component } from "./component.component";

/**
 * @type {Component}
 */
export class MetaComponent extends Component {
    
    /**
     * @constructor
     */
    constructor(){
        super();
        this.component
    }


        /**
         * @returns{HTMLElement}
         */

        render () {
            super.render();
         if (this.component){
             for(
                 let i=0, l = this.component.length;

                i < l;
                 
                this.component[i].render(), i++);
            }
         }
            

    
}