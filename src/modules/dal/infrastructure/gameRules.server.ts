import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { RestServer } from "./rest.server";
import { GameRules } from "src/models/gameRules.model";

@Injectable()
export class GameRulesServer extends RestServer {
  constructor(http: HttpClient) {
    super(http);
  }

  public getGameRules(gameRulesId: number): Observable<GameRules> {
    return this.http.get(`${this.baseUrl}/gamerules/${gameRulesId}`, super.getOptions());
  }

  public getGameRulesByGameId(gameId: number): Observable<GameRules> {
    return this.http.get(`${this.baseUrl}/gamerules/${gameId}`, super.getOptions());
  }

  public updateGameRules(gameRules: GameRules): Observable<any> {
    return this.http.post(`${this.baseUrl}/gamerules`, gameRules, super.getOptions());
  }
}
