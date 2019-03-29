import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";

import { Game } from "src/models/game.model";
import { environment } from "src/environments/environment";
import { Player } from "src/models/player.model";

const PROTOCOL = "http";
const PORT = environment.restServerPort;
const API = "api";

@Injectable()
export class GameServer {
    baseUrl: string;

    constructor(private http: HttpClient) {
      this.baseUrl = `${PROTOCOL}:\\\\${location.hostname}:${PORT}/${API}/`;
    }

    public createGame(game: Game): Observable<any> {
      return this.http.post(`${this.baseUrl}games/creategame`, game, this.getOptions());
    }

    public getGame(gameId: number): Observable<Game> {
      return this.http.get<Game>(`${this.baseUrl}games/${gameId}`);
    }

    public getGames(): Observable<Game[]> {
      return this.http.get<Game[]>(this.baseUrl + "games");
    }

    public joinGame(gameId: number): Observable<any> {
      return this.http.post<Game>(`${this.baseUrl}games`, {gameId: gameId}, this.getOptions());
    }

    public confirmJoinGame(gameId: number, player: Player): Observable<any> {
      return this.http.put<Player>(`${this.baseUrl}games`, {gameId: gameId, player: player});
    }

    private getOptions() {
      return { headers: new HttpHeaders ({
        "Content-Type": "application/json"
       }) };
    }
}
