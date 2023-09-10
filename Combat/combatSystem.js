"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Combat = void 0;
class Combat {
    constructor(poke1, poke2, clash = []) {
        this.poke1 = poke1;
        this.poke2 = poke2;
        this.clash = [this.poke1, this.poke2];
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    attackSequence(pokeAtacker, pokeDefender) {
        pokeDefender.hp -= (pokeAtacker.attack - pokeDefender.defense);
        console.log("paso un ataque");
    }
    samePrio() {
        const randomPokemon = this.clash[this.getRandomInt(0, 1)];
        this.attackSequence(randomPokemon, this.clash.filter((element) => element != randomPokemon)[0]);
    }
    initCombat() {
        this.clash.forEach(element => { element.hp += element.hp * 10; });
        console.log(this.poke1.hp);
        const fastest = this.clash.filter((Element) => Element.speed == Math.max(this.poke1.speed, this.poke2.speed));
        do {
            if (fastest.length > 1) {
                this.samePrio;
            }
            else {
                this.attackSequence(fastest[0], this.clash.filter((element) => element != fastest[0])[0]);
                console.log("paso un ataque");
            }
        } while (this.poke1.hp < 1 || this.poke2.hp < 1);
        return true;
    }
    winner() {
        const winn = this.clash.find((Element) => Element.hp == Math.max(this.poke1.hp, this.poke2.hp));
        console.log(winn === null || winn === void 0 ? void 0 : winn.name);
    }
}
exports.Combat = Combat;
