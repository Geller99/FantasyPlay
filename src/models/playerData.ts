
export interface PlayerData {
    name: string,
    id: number,
    team: string,
    rating: number,
    position: string
    injuryStatus: boolean | undefined,
    
}

export type playerType = PlayerData | {};


export class Player {
    constructor (public data: PlayerData) {};
}



export const newPlayer = new Player({
    name: "Messi",
    id: 10,
    team: "FC Barcelona",
    rating: 94,
    position: "Striker",
    injuryStatus: false

})

