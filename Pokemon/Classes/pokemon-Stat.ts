import { statType } from "../Types/pokemon-StatType";

export class PokemonStat {
    name : string
    url : string
    effort : number
    base_stat : number

    constructor(name = "", url = "", effort = 0, base_stat = 0) {
        this.name = name
        this.url = url
        this.effort = effort
        this.base_stat =  base_stat
    }

    setByType(type : statType) {
        this.name = type.stat.name
        this.url = type.stat.url
        this.effort = type.effort
        this.base_stat = type.base_stat
    }
}