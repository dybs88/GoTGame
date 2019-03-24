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

  public changeStatus(player: Player): Observable<any> {
    return this.http.put(`${this.baseUrl}/players`, {player: player}, this.getOptions());
  }

  public deletePlayer(playerId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/players/${playerId}`);
  }

  public getPlayer(playerId: number): Observable<Player> {
    return this.http.get<Player>(`${this.baseUrl}/players/${playerId}`);
  }

  public readyForGame(player: Player): Observable<any> {
    return this.http.put(`${this.baseUrl}/players`, {player: player}, this.getOptions());
  }
}
