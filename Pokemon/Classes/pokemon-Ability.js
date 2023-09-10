"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonAbility = void 0;
class PokemonAbility {
    constructor(name = "", url = "", is_hidden = true, slot = 0) {
        this.name = name,
            this.url = url;
        this.is_hidden = is_hidden;
        this.slot = slot;
    }
    setByType(type) {
        this.name = type.ability.name;
        this.url = type.ability.url;
        this.is_hidden = type.is_hidden;
        this.slot = type.slot;
    }
}
exports.PokemonAbility = PokemonAbility;
