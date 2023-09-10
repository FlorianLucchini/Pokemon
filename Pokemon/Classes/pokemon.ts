import { PokemonAbility } from "./pokemon-Ability";
import { PokemonStat } from "./pokemon-Stat";
import { PokemonClasf } from "./pokemon-Clasf";
import { PokemonMove } from "./pokemon-Move";
import { pokemonType } from "../Types/pokemon-pokemonType";
import { abilityType } from "../Types/pokemon-AbilityType";
import { statType } from "../Types/pokemon-StatType";
import { clasfType } from "../Types/pokemon-ClasfType";
import { moveType } from "../Types/pokemon-MoveType";
import { Move } from "../../Move/Classes/move";

export class Pokemon {
    name : string
    id : number
    height : number
    weight : number
    abilities : Array<PokemonAbility>
    stats : Array<PokemonStat>
    clasfs : Array<PokemonClasf>
    moves : Array<PokemonMove> | Array<Move>
    hp : number 
    attack : number 
    defense : number 
    speed : number 

    constructor(name = '', id = 0, height = 0, weight = 0, abilities = [], stats = [], clasfs = [],  moves = [], hp = 0, attack = 0, defense = 0, speed = 0){
        this.name = name
        this.id = id
        this.height = height
        this.weight = weight
        this.abilities = abilities
        this.stats = stats
        this.clasfs = clasfs
        this.moves = moves
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.speed = speed
    }

    setByType (type : pokemonType){
        this.name = type.name
        this.id = type.id
        this.height = type.height
        this.weight = type.weight
        this.hp = this.stats.filter(stat => stat.name === "hp")[0].base_stat
        this.attack = this.stats.filter(stat => stat.name === "attack")[0].base_stat
        this.defense = this.stats.filter(stat => stat.name === "defense")[0].base_stat
        this.speed = this.stats.filter(stat => stat.name === "speed")[0].base_stat
    }

    setAbilities(abilities : Array<abilityType>) : Array<PokemonAbility> {
        const list = []
        for(const elem of abilities) {
            const ability : PokemonAbility = new PokemonAbility()
            ability.setByType(elem)
            list.push(ability) 
        }
        return list
    }

    setStats(stats : Array<statType>) : Array<PokemonStat> {
        const list = []
        for(const elem of stats) {
            const stat : PokemonStat = new PokemonStat()
            stat.setByType(elem)
            list.push(stat)
        }
        return list
    }

    setClasf(clasfs : Array<clasfType>) : Array<PokemonClasf> {
        const list = []
        for(const elem of clasfs) {
            const clasf : PokemonClasf = new PokemonClasf()
            clasf.setByType(elem)
            list.push(clasf)
        }
        return list
    }

    setMoves(moves : Array<moveType>) : Array<PokemonMove> {
        const list = []
        for(const elem of moves) {
            const move : PokemonMove = new PokemonMove()
            move.setByType(elem)
            list.push(move)
        }
        return list
    }


}