import {pokemonType} from "../Pokemon/Types/pokemon-pokemonType";
import { Pokemon } from "../Pokemon/Classes/pokemon";

export class Combat{
    poke1 : Pokemon
    poke2 : Pokemon
    clash : Array <Pokemon>

    constructor(poke1 : Pokemon , poke2 : Pokemon, clash = []) {
        this.poke1 = poke1
        this.poke2 = poke2
        this.clash = [this.poke1, this.poke2]
    }

    getRandomInt(min : number , max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }

    attackSequence(pokeAtacker : Pokemon, pokeDefender : Pokemon){
        pokeDefender.hp -= (pokeAtacker.attack - pokeDefender.defense)
    }

    samePrio(){
        const randomPokemon = this.clash[this.getRandomInt(0,1)]
        this.attackSequence(randomPokemon , this.clash.filter((element) => element != randomPokemon)[0])     
    }

    initCombat(){ 
        this.clash.forEach(element => {element.hp += element.hp * 10});
        console.log(this.poke1.hp)
        const fastest = this.clash.filter((Element) => Element.speed == Math.max(this.poke1.speed, this.poke2.speed))

        do 
        { 
            if(fastest.length > 1){
                this.samePrio
            }

            else{
                this.attackSequence(fastest[0]  , this.clash.filter((element) => element != fastest[0])[0])
            }

        }
        while(this.poke1.hp < 1 || this.poke2.hp < 1);
        return true
    }

    winner() {
        const winn = this.clash.find((Element) => Element.hp == Math.max(this.poke1.hp, this.poke2.hp))
        console.log(winn?.name)
    }

}