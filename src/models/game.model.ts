import { Player } from "./player.model";

export class Game {
;

  constructor(public id?: number,
    public name?: string,
    public playerCount?: number,
    public maxPlayers?: number,
    public players?: Player[]) {
      if (players === undefined) {
        this.players = new Array<Player>();
      }
  }
}
