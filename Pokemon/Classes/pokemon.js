"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
const pokemon_Ability_1 = require("./pokemon-Ability");
const pokemon_Stat_1 = require("./pokemon-Stat");
const pokemon_Clasf_1 = require("./pokemon-Clasf");
const pokemon_Move_1 = require("./pokemon-Move");
class Pokemon {
    constructor(name = '', id = 0, height = 0, weight = 0, abilities = [], stats = [], clasfs = [], moves = [], hp = 0, attack = 0, defense = 0, speed = 0) {
        this.name = name;
        this.id = id;
        this.height = height;
        this.weight = weight;
        this.abilities = abilities;
        this.stats = stats;
        this.clasfs = clasfs;
        this.moves = moves;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.speed = speed;
    }
    setByType(type) {
        this.name = type.name;
        this.id = type.id;
        this.height = type.height;
        this.weight = type.weight;
        this.hp = this.stats.filter(stat => stat.name === "hp")[0].base_stat;
        this.attack = this.stats.filter(stat => stat.name === "attack")[0].base_stat;
        this.defense = this.stats.filter(stat => stat.name === "defense")[0].base_stat;
        this.speed = this.stats.filter(stat => stat.name === "speed")[0].base_stat;
    }
    setAbilities(abilities) {
        const list = [];
        for (const elem of abilities) {
            const ability = new pokemon_Ability_1.PokemonAbility();
            ability.setByType(elem);
            list.push(ability);
        }
        return list;
    }
    setStats(stats) {
        const list = [];
        for (const elem of stats) {
            const stat = new pokemon_Stat_1.PokemonStat();
            stat.setByType(elem);
            list.push(stat);
        }
        return list;
    }
    setClasf(clasfs) {
        const list = [];
        for (const elem of clasfs) {
            const clasf = new pokemon_Clasf_1.PokemonClasf();
            clasf.setByType(elem);
            list.push(clasf);
        }
        return list;
    }
    setMoves(moves) {
        const list = [];
        for (const elem of moves) {
            const move = new pokemon_Move_1.PokemonMove();
            move.setByType(elem);
            list.push(move);
        }
        return list;
    }
}
exports.Pokemon = Pokemon;
