import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { PlayerServer } from "./../player.server";
import { Player } from "src/models/player.model";

@Injectable()
export class PlayerRepository {
  constructor(private server: PlayerServer) { }

  public getPlayer(playerId: number): Observable<Player> {
    return this.server.getPlayer(playerId);
  }
}
