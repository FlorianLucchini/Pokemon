"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonClasf = void 0;
class PokemonClasf {
    constructor(name = "", url = "", slot = 0) {
        this.name = name;
        this.url = url;
        this.slot = slot;
    }
    setByType(type) {
        this.name = type.type.name;
        this.url = type.type.url;
        this.slot = type.slot;
    }
}
exports.PokemonClasf = PokemonClasf;
