"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonStat = void 0;
class PokemonStat {
    constructor(name = "", url = "", effort = 0, base_stat = 0) {
        this.name = name;
        this.url = url;
        this.effort = effort;
        this.base_stat = base_stat;
    }
    setByType(type) {
        this.name = type.stat.name;
        this.url = type.stat.url;
        this.effort = type.effort;
        this.base_stat = type.base_stat;
    }
}
exports.PokemonStat = PokemonStat;
