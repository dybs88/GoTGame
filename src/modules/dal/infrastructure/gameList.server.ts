import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Game } from "src/models/game.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

const PROTOCOL = "http";
const PORT = environment.restServerPort;
const API = "api";

@Injectable()
export class GameServer {
    baseUrl: string;

    constructor(private http: HttpClient) {
      this.baseUrl = `${PROTOCOL}:\\\\${location.hostname}:${PORT}/${API}/`;
    }

    public getGame(gameId: number): Observable<Game> {
      return this.http.get<Game>(`${this.baseUrl}games/${gameId}`);
    }

    public getGames(): Observable<Game[]> {
      return this.http.get<Game[]>(this.baseUrl + "games");
    }

    public joinGame(gameId: number, playerName: string): Observable<Game> {
      return this.http.post<Game>(`${this.baseUrl}games`, {gameId: gameId, playerName: playerName}, this.getOptions());
    }

    private getOptions() {
      return { headers: new HttpHeaders ({
        "Content-Type": "application/json"
       }) };
    }
}
