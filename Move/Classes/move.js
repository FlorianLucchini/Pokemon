"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Move = void 0;
class Move {
    constructor(id = 0, name = "", power = 0, pp = 0, accuracy = 0) {
        this.id = id;
        this.name = name;
        this.power = power;
        this.pp = pp;
        this.accuracy = accuracy;
    }
    setByType(type) {
        this.id = type.id;
        this.name = type.name;
        this.power = type.power;
        this.pp = type.pp;
        this.accuracy = type.accuracy;
    }
}
exports.Move = Move;
