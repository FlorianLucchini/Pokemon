"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonMove = void 0;
const pokemon_Detail_1 = require("./pokemon-Detail");
class PokemonMove {
    constructor(name = "", url = "", moveDetails = []) {
        this.name = name;
        this.url = url;
        this.moveDetails = moveDetails;
    }
    setByType(type) {
        this.name = type.move.name;
        this.url = type.move.url;
        this.moveDetails = this.setMoveDetails(type.version_group_details);
    }
    setMoveDetails(details) {
        const list = [];
        for (const elem of details) {
            const detail = new pokemon_Detail_1.Detail();
            detail.setByType(elem);
            list.push(detail);
        }
        return list;
    }
}
exports.PokemonMove = PokemonMove;
