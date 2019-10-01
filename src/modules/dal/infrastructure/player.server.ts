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

  public deletePlayer(gameId: number, playerId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/players/delete/${gameId}/${playerId}`, super.getOptions());
  }

  public getPlayer(playerId: number): Observable<Player> {
    return this.http.get<Player>(`${this.baseUrl}/players/id${playerId}`, super.getOptions());
  }

  public getPlayerByIp(ipAddress: string): Observable<Player> {
    return this.http.get<Player>(`${this.baseUrl}/players/ip${ipAddress}`, super.getOptions());
  }

  public getClientIp(): Observable<any> {
    return this.http.get("https://jsonip.com");
  }

  public updatePlayer(player: Player): Observable<Player> {
    return this.http.post(`${this.baseUrl}/players`, player, super.getOptions());
  }
}
