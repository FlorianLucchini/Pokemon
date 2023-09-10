import { moveDetails } from "../Types/pokemon-MoveType";

export class Detail {
    level_learned_at : number
    learnMethodName : string
    learnMethodUrl : string
    versionGroupName : string
    versionGroupUrl : string

    constructor(level_learned_at = 0, learnMethodName = "", learnMethodUrl = "", versionGroupName = "", versionGroupUrl = "") {
        this.level_learned_at = level_learned_at
        this.learnMethodName = learnMethodName
        this.learnMethodUrl = learnMethodUrl
        this.versionGroupName = versionGroupName
        this.versionGroupUrl = versionGroupUrl
    }

    setByType(type : moveDetails) {
        this.level_learned_at = type.level_learned_at
        this.learnMethodName = type.move_learn_method.name
        this.learnMethodUrl = type.move_learn_method.url
        this.versionGroupName = type.version_group.name
        this.versionGroupUrl = type.version_group.url
    }
}