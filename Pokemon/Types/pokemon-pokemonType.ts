import { moveType } from "./pokemon-MoveType";
import { clasfType } from "./pokemon-ClasfType";
import { statType } from "./pokemon-StatType";
import { abilityType } from "./pokemon-AbilityType";

export type pokemonType = {
    name : string
    id : number
    height : number
    weight : number
    next : string | undefined
    previous : string | undefined
    abilities : Array<abilityType>
    stats : Array<statType>
    types : Array<clasfType>
    moves : Array<moveType>
}