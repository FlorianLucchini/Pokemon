import { clasfType } from "../Types/pokemon-ClasfType";

export class PokemonClasf {
    name : string
    url : string
    slot : number

    constructor(name = "", url = "", slot = 0) {
        this.name = name
        this.url = url
        this.slot = slot
    }

    setByType(type : clasfType) {
        this.name = type.type.name
        this.url = type.type.url
        this.slot = type.slot
    }
}