"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokedex = exports.pokeApi = void 0;
// Imports
const axios_1 = __importDefault(require("axios"));
const pokemon_1 = require("../Pokemon/Classes/pokemon");
const pokemon_Clasf_1 = require("../Pokemon/Classes/pokemon-Clasf");
const pokemon_Ability_1 = require("../Pokemon/Classes/pokemon-Ability");
const pokemon_Stat_1 = require("../Pokemon/Classes/pokemon-Stat");
const pokemon_Move_1 = require("../Pokemon/Classes/pokemon-Move");
const move_1 = require("../Move/Classes/move");
exports.pokeApi = "https://pokeapi.co/api/v2";
class Pokedex {
    constructor() {
        this.pokeUrl = exports.pokeApi;
    }
    getByPokemon(pokeReference) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(this.pokeUrl + '/pokemon/' + pokeReference);
            const pokeData = response.data;
            const pokemon = new pokemon_1.Pokemon();
            pokemon.abilities = pokemon.setAbilities(pokeData.abilities);
            pokemon.stats = pokemon.setStats(pokeData.stats);
            pokemon.clasfs = pokemon.setClasf(pokeData.types);
            pokemon.moves = pokemon.setMoves(pokeData.moves);
            pokemon.setByType(pokeData);
            const list = [];
            for (let i = 0; i < pokemon.moves.length; i++) {
                list.push(yield this.getMoveByURL(pokemon.moves[i].url));
            }
            pokemon.moves = list;
            return pokemon;
        });
    }
    getByAbility(abilityName) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(this.pokeUrl + '/abilty/' + abilityName);
            const abilityData = response.data;
            const ability = new pokemon_Ability_1.PokemonAbility();
            ability.setByType(abilityData);
            return ability;
        });
    }
    getByClasf(clasfName) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(this.pokeUrl + '/type/' + clasfName);
            const clasfData = response.data;
            const clasf = new pokemon_Clasf_1.PokemonClasf();
            clasf.setByType(clasfData);
            return clasf;
        });
    }
    getByMove(moveName) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(this.pokeUrl + '/move/' + moveName);
            const moveData = response.data;
            const move = new pokemon_Move_1.PokemonMove();
            move.setByType(moveData);
            return move;
        });
    }
    getByStat(statName) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(this.pokeUrl + '/stat/' + statName);
            const statData = response.data;
            const stat = new pokemon_Stat_1.PokemonStat();
            stat.setByType(statData);
            return stat;
        });
    }
    getMoveByURL(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield axios_1.default.get(url);
            const moveData = response.data;
            const move = new move_1.Move();
            move.setByType(moveData);
            return move;
        });
    }
}
exports.Pokedex = Pokedex;
