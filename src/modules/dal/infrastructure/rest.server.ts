import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Game } from "src/models/game.model";
import { Observable } from "rxjs";

const PROTOCOL = "http";
const PORT = "5000";
const API = "api";

@Injectable()
export class RestServer {
    baseUrl: string;

    constructor(private http: HttpClient) {
      this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/${API}`;
    }

    public getGames(): Observable<Game[]> {
      return this.http.get<Game[]>(this.baseUrl + "games");
    }
}
