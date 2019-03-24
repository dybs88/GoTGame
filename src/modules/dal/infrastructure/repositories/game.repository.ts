import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Game } from "src/models/game.model";
import { GameServer} from "../gameList.server";
import { Player } from "src/models/player.model";

@Injectable()
export class GameRepository {
  constructor(private server: GameServer) { }

  public createGame(game: Game, player: Player): Observable<any> {
    return this.server.createGame(game, player);
  }

  public getGames(): Observable<Game[]> {
    return this.server.getGames();
  }

  public getGame(gameId: number): Observable<Game> {
    return this.server.getGame(gameId);
  }

  public refreshGames(): Observable<Game[]> {
    return this.server.getGames();
  }

  public joinGame(gameId: number): Observable<any> {
    return this.server.joinGame(gameId);
  }

  public confirmJoinGame(gameId: number, player: Player): Observable<any> {
    return this.server.confirmJoinGame(gameId, player);
  }
}
