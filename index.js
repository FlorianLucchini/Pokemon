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
Object.defineProperty(exports, "__esModule", { value: true });
// Imports.
const pokedex_1 = require("./Pokedex/pokedex");
const combatSystem_1 = require("./Combat/combatSystem");
main();
// const pokemon = pokedex.searchByName('ditto')
// Devuelve una promesa pendiente
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const pokedex = new pokedex_1.Pokedex();
        const combat = new combatSystem_1.Combat(yield pokedex.getByPokemon(23), yield pokedex.getByPokemon(92));
        combat.initCombat();
        combat.winner();
    });
}
