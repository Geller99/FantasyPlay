import { newPlayer, playerType } from "./playerData";

export interface TeamData {
  name: string;
  id: number;
  size: number;
  eligibility: boolean;
  parentLeague: string;
  parentSport: string;
  playerList: playerType[];
}

export class Team {
  constructor(public data: TeamData) {};
}

const newTeam = new Team({
  name: "FCB",
  id: 5,
  size: 11,
  eligibility: true,
  parentLeague: "La Liga",
  parentSport: "soccer",
  playerList: [newPlayer, {}, {}, {}, {}]
});




