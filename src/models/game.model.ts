import { GameRules } from "src/models/gameRules.model";
import { Player } from "./player.model";

export class Game {
  constructor(public id?: number,
    public name?: string,
    public playerCount?: number,
    public gameRules?: GameRules,
    public players?: Player[],
    public isPrivate?: boolean) {
      if (players === undefined) {
        this.players = new Array<Player>();
      }
  }
}
