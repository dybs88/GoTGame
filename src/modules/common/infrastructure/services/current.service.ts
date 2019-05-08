import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Game } from "src/models/game.model";
import { Player } from "src/models/player.model";
import { GameRules } from "./../../../../models/gameRules.model";
import { PlayerService } from "./player.service";
import { GameRulesService } from "./gameRules.service";
import { GameService } from "./game.service";


@Injectable()
export class CurrentService {
  currentGame: Game;
  currentPlayer: Player;
  currentGameRules: GameRules;

  constructor(private gameService: GameService,
    private playerService: PlayerService,
    private rulesService: GameRulesService,
    route: ActivatedRoute) {
    const playerId = localStorage.getItem("player_id");
    if (playerId !== undefined && playerId !== "undefined" && playerId !== "") {
      this.playerService.getPlayer(parseInt(localStorage.getItem("player_id"), 10)).subscribe(response => {
        this.currentPlayer = response;
      });
    }

    route.params.subscribe(params => {
      const gameId = params["id"];
      if (gameId !== "" && gameId !== undefined) {
        this.gameService.getGame(parseInt(params["id"], 10)).subscribe(response => {
          this.currentGame = response;
          this.currentGameRules = response.gameRules;
        });
      }
    });
  }

  public clearAll() {
    this.clearCurrentGame();
    this.clearCurrentGameRules();
    this.clearCurrentPlayer();
  }

  public clearCurrentGame() {
    this.currentGame = undefined;
  }

  public clearCurrentGameRules() {
    this.clearCurrentGameRules = undefined;
  }

  public clearCurrentPlayer() {
    this.currentPlayer = undefined;
  }

  public updateAll() {
    this.updateCurrentGame();
    this.updateCurrentGameRules();
    this.updateCurrentPlayer();
  }

  public updateCurrentGame() {
    this.gameService.getGame(this.currentGame.id).subscribe(response => {
      this.currentGame = response;
    });
  }

  public updateCurrentGameRules() {
    this.rulesService.getGameRules(this.currentGameRules.id).subscribe(response => {
      this.currentGameRules = response;
    });
  }

  public updateCurrentPlayer() {
    this.playerService.getPlayer(this.currentPlayer.id).subscribe(response => {
      this.currentPlayer = response;
    });
  }
}
