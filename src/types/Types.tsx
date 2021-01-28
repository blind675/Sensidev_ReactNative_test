
export type PokemonStat = {
    base_stat: number,
    effort: number,
    name: string,
}

export type Pokemon = {
    name: string,
    stats: [PokemonStat],
    types: [string]
    sprites: [string],
    pictureULR: string,
}
