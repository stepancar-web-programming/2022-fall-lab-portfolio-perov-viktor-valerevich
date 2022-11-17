import {Site} from "./site";
import {model} from "../model";
import {Sidebar} from "./sidebar";
import {counter} from "../utils";

export class App {
    constructor(model) {
        this.model = model;
    }

    init() {
        const site = new Site('#site')
        site.render(model)

        const updateCallback =  newBlock => {
            model.push(newBlock)
            site.render(model)
        }

        new Sidebar('#panel', updateCallback)

        counter();
    }

}