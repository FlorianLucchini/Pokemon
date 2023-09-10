export type itemResult = {
    name : string,
    url : string,
}

export type pokeResult = {
    count : number,
    next : string | undefined,
    preview : string | undefined,
    results : Array<itemResult>
}