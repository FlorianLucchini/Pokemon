import { abilityType } from "../Types/pokemon-AbilityType";

export class PokemonAbility {
    name : string 
    url : string
    is_hidden : boolean
    slot : number

    constructor(name = "", url = "", is_hidden = true, slot = 0) {
        this.name = name,
        this.url = url
        this.is_hidden = is_hidden
        this.slot = slot
    }

    setByType(type : abilityType) {
        this.name = type.ability.name
        this.url = type.ability.url
        this.is_hidden = type.is_hidden
        this.slot = type.slot
    }
}