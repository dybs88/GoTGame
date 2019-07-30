import { HttpClient } from "@angular/common/http";

import { Injectable } from "@angular/core";
import { RestServer } from "./rest.server";
import { Observable } from "rxjs";

@Injectable()
export class GameServer extends RestServer {
  constructor(http: HttpClient) {
    super(http);
  }

  public startGame(gameId: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/game/start`, { gameId: gameId }, super.getOptions());
  }

  public quickStart(name: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/game/quickstart`, {name: name}, super.getOptions());
  }
}


