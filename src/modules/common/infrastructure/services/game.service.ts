import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { PlayerService } from "./player.service";
import { GameBoard } from "./../../../../models/gameBoard.model";
import { GameServer } from "./../../../dal/infrastructure/game.server";
import { House } from "src/models/house.model";
import { Game } from "src/models/game.model";

@Injectable()
export class GameService {
  private game: Game;
  private board: GameBoard;
  private house: House;

  public get currentGame() { return this.game; }
  public get gameBoard() { return this.board; }
  public get currentHouse() { return this.house; }

  public set currentGame(value: Game) {
    this.game = value;
  }

  public set gameBoard(value: GameBoard) {
    this.board = value;

    const currentPlayer = this.playerService.currentPlayer;
    if (currentPlayer !== undefined && currentPlayer !== null) {
      this.house = this.board.houses.find(h => h.playerId === currentPlayer.id);
    } else {
      const playerId = parseInt(localStorage.getItem("player_id"), 10);
      this.house = this.board.houses.find(h => h.playerId === playerId);
    }
  }

  constructor(private server: GameServer, private playerService: PlayerService) { }

  public quickStart(): Observable<any> {
    return this.server.quickStart();
  }

  public startGame(gameId: number): Observable<any> {
    return this.server.startGame(gameId);
  }


}
