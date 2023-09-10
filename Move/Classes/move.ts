import { moveType } from "../Types/move";

export class Move {
    id : number
    name : string
    power : number
    pp : number
    accuracy : number

    constructor( id = 0, name = "", power = 0, pp = 0, accuracy = 0) {
        this.id = id
        this.name = name
        this.power = power
        this.pp = pp
        this.accuracy = accuracy
    }

    setByType(type : moveType) {
        this.id = type.id
        this.name = type.name
        this.power = type.power
        this.pp = type.pp
        this.accuracy = type.accuracy
    }
}