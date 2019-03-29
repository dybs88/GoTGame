import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { RestServer } from "./rest.server";
import { Player } from "src/models/player.model";


@Injectable()
export class PlayerServer extends RestServer {
  constructor(http: HttpClient) {
    super(http);
  }

  public deletePlayer(playerId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/players/delete/${playerId}`);
  }

  public getPlayer(playerId: number): Observable<Player> {
    return this.http.get<Player>(`${this.baseUrl}/players/${playerId}`);
  }

  public updatePlayer(player: Player): Observable<Player> {
    return this.http.post(`${this.baseUrl}/players`, player);
  }
}
