import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

import { Game } from "src/models/game.model";
import { environment } from "src/environments/environment";
import { Player } from "src/models/player.model";
import { RestServer } from "./rest.server";

const PROTOCOL = "http";
const PORT = environment.restServerPort;
const API = "api";

@Injectable()
export class GameServer extends RestServer {
    baseUrl: string;

    constructor(http: HttpClient) {
      super(http);
    }

    public confirmJoinGame(gameId: number, player: Player): Observable<any> {
      return this.http.put<Player>(`${this.baseUrl}/games`, {gameId: gameId, player: player}, super.getOptions());
    }

    public createGame(game: Game): Observable<any> {
      return this.http.post(`${this.baseUrl}/games/creategame`, game, super.getOptions());
    }

    public getGame(gameId: number): Observable<Game> {
      return this.http.get(`${this.baseUrl}/games/${gameId}`, super.getOptions());
    }

    public getGames(): Observable<Game[]> {
      return this.http.get<Game[]>(`${this.baseUrl}/games`, super.getOptions());
    }

    public joinGame(gameId: number): Observable<any> {
      return this.http.post<Game>(`${this.baseUrl}/games`, {gameId: gameId}, this.getOptions());
    }

    public refreshGame(gameId: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/games/refresh/${gameId}`, super.getOptions());
    }
}
