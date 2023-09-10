// Imports
import axios, { AxiosResponse } from "axios";
import { pokemonType } from "../Pokemon/Types/pokemon-pokemonType";
import { Pokemon } from "../Pokemon/Classes/pokemon";
import { PokemonClasf } from "../Pokemon/Classes/pokemon-Clasf";
import { PokemonAbility } from "../Pokemon/Classes/pokemon-Ability";
import { PokemonStat } from "../Pokemon/Classes/pokemon-Stat";
import { PokemonMove } from "../Pokemon/Classes/pokemon-Move";
import { Move } from "../Move/Classes/move";
import { moveType } from "../Move/Types/move";

export const pokeApi : string = "https://pokeapi.co/api/v2"


export class Pokedex {
    pokeUrl : string

    constructor() {
        this.pokeUrl = pokeApi
    }
    
    async getByPokemon( pokeReference : string | number ) {
        const response : AxiosResponse = await axios.get(this.pokeUrl + '/pokemon/' + pokeReference)
        const pokeData : pokemonType = response.data
        const pokemon = new Pokemon()
        pokemon.abilities = pokemon.setAbilities( pokeData.abilities )
        pokemon.stats = pokemon.setStats( pokeData.stats )
        pokemon.clasfs = pokemon.setClasf( pokeData.types )
        pokemon.moves = pokemon.setMoves( pokeData.moves )

        pokemon.setByType( pokeData )
        const list = []
        for (let i = 0; i < pokemon.moves.length; i++) {
            list.push(await this.getMoveByURL(pokemon.moves[i].url))
        }
        pokemon.moves = list
        return pokemon
    }    

    async getByAbility( abilityName : string ) {
        const response : AxiosResponse = await axios.get(this.pokeUrl + '/abilty/' + abilityName)
        const abilityData = response.data
        const ability = new PokemonAbility()
        ability.setByType( abilityData )
        return ability
    }

    async getByClasf( clasfName : string ) {
        const response : AxiosResponse = await axios.get(this.pokeUrl + '/type/' + clasfName)
        const clasfData = response.data
        const clasf = new PokemonClasf()
        clasf.setByType( clasfData )
        return clasf
    }

    async getByMove( moveName : string ) {
        const response : AxiosResponse = await axios.get(this.pokeUrl + '/move/' + moveName)
        const moveData = response.data
        const move = new PokemonMove()
        move.setByType( moveData )
        return move
    }

    async getByStat( statName : string ) {
        const response : AxiosResponse = await axios.get(this.pokeUrl + '/stat/' + statName)
        const statData = response.data
        const stat = new PokemonStat()
        stat.setByType( statData )
        return stat
    }

    async getMoveByURL( url : string ) {
        const response : AxiosResponse = await axios.get(url)
        const moveData : moveType = response.data
        const move : Move = new Move()
        move.setByType( moveData )
        return move
    }
}