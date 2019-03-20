import { Player } from "./player.model";

export class Game {
  public id?: number;
  public name?: string;
  public playerCount?: number;
  public maxPlayers?: number;
  public players?: Player[];

  constructor() {
    this.players = new Array<Player>();
  }
}
