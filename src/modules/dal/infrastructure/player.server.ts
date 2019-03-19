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

  public getPlayer(playerId: number): Observable<Player> {
    return this.http.get<Player>(`${this.baseUrl}/players/${playerId}`);
  }
}
