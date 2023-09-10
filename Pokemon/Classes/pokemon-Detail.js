"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Detail = void 0;
class Detail {
    constructor(level_learned_at = 0, learnMethodName = "", learnMethodUrl = "", versionGroupName = "", versionGroupUrl = "") {
        this.level_learned_at = level_learned_at;
        this.learnMethodName = learnMethodName;
        this.learnMethodUrl = learnMethodUrl;
        this.versionGroupName = versionGroupName;
        this.versionGroupUrl = versionGroupUrl;
    }
    setByType(type) {
        this.level_learned_at = type.level_learned_at;
        this.learnMethodName = type.move_learn_method.name;
        this.learnMethodUrl = type.move_learn_method.url;
        this.versionGroupName = type.version_group.name;
        this.versionGroupUrl = type.version_group.url;
    }
}
exports.Detail = Detail;
