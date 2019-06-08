import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { PlayerService } from "./player.service";
import { GameBoard } from "./../../../../models/gameBoard.model";
import { GameServer } from "./../../../dal/infrastructure/game.server";
import { House } from "src/models/house.model";

@Injectable()
export class GameService {
  private board: GameBoard;
  private house: House;

  get gameBoard() {
    return this.board;
  }

  get currentHouse() {
    return this.house;
  }

  constructor(private server: GameServer, private playerService: PlayerService) { }

  public quickStart(): Observable<any> {
    return this.server.quickStart();
  }

  public startGame(gameId: number): Observable<any> {
    return this.server.startGame(gameId);
  }

  public setGameBoard(gameBoard: GameBoard) {
    this.board = gameBoard;

    const currentPlayer = this.playerService.currentPlayer;
    if (currentPlayer !== undefined && currentPlayer !== null) {
      this.house = this.board.houses.find(h => h.playerId === currentPlayer.id);
    } else {
      const playerId = parseInt(localStorage.getItem("player_id"), 10);
      this.house = this.board.houses.find(h => h.playerId === playerId);
    }
  }
}
