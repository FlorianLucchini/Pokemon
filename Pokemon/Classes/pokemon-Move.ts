import { moveType, moveDetails } from "../Types/pokemon-MoveType";
import { Detail } from "./pokemon-Detail";

export class PokemonMove {
    name : string
    url : string
    moveDetails : Array<Detail>

    constructor(name = "", url = "", moveDetails = []) {
        this.name = name
        this.url = url
        this.moveDetails = moveDetails
    }

    setByType(type : moveType) {
        this.name = type.move.name
        this.url = type.move.url
        this.moveDetails = this.setMoveDetails(type.version_group_details)
    }

    setMoveDetails(details : Array<moveDetails>) : Array<Detail> {
        const list = []
        for(const elem of details) {
            const detail = new Detail()
            detail.setByType(elem)
            list.push(detail)
        }

        return list

    }
}