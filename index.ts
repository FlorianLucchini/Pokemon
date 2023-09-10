// Imports.
import { Pokedex } from "./Pokedex/pokedex";
import {Combat}  from "./Combat/combatSystem";

main()


// const pokemon = pokedex.searchByName('ditto')

// Devuelve una promesa pendiente



async function main(){

const pokedex = new Pokedex();
const combat = new Combat( await pokedex.getByPokemon(23) , await pokedex.getByPokemon(92));
combat.initCombat()
combat.winner()
}