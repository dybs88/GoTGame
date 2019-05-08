import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Game } from "src/models/game.model";
import { GameServer} from "../../../dal/infrastructure/gameList.server";
import { Player } from "src/models/player.model";

@Injectable()
export class GameService {

  currentGame: Game;

  constructor(private server: GameServer) { }

  public confirmJoinGame(gameId: number, player: Player): Observable<any> {
    return this.server.confirmJoinGame(gameId, player);
  }

  public createGame(game: Game, password?: string): Observable<any> {
    return this.server.createGame(game, password);
  }

  public getGames(): Observable<Game[]> {
    return this.server.getGames();
  }

  public getGame(gameId: number): Observable<Game> {
    return this.server.getGame(gameId);
  }

  public joinGame(gameId: number): Observable<any> {
    return this.server.joinGame(gameId);
  }

  public refreshGames(): Observable<Game[]> {
    return this.server.getGames();
  }

  public refreshGame(gameId: number, playerId: number): Observable<any> {
    return this.server.refreshGame(gameId, playerId);
  }

  public verifyPassword(gameId: number, password: string): Observable<boolean> {
    return this.server.verifyPassword(gameId, password);
  }
}
