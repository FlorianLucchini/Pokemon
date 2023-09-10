export type moveType = {
    move : {
        name: string
        url: string 
    }
    version_group_details: Array<moveDetails>
}

export type moveDetails = {
    level_learned_at : number
    move_learn_method : {
        name : string
        url : string
    }
    version_group : {
        name : string
        url : string
    }
}