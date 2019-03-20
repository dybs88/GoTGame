import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { GameRepository } from "./../../../dal/infrastructure/repositories/game.repository";
import { Game } from "src/models/game.model";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";

@Component({
  templateUrl: "gameList.component.html"
})

export class GameListComponent extends GotBaseComponent {
  joinGameWindowVisible = false;

  gameId: number;
  playerName: string;

  selectedGame: Game;

  constructor(private gameRepository: GameRepository,
    private router: Router,
    localizationService: LocalizationService) {
    super(localizationService);
   }

  createNewGame() {

  }

  games(): Game[] {
    return this.gameRepository.getGames();
  }

  getGame(gameId: number) {
    this.selectedGame = this.gameRepository.getGame(gameId);
  }

  joinGame(gameId: number) {
    this.router.navigate(["/joinGame", gameId]);
  }

  toggleJoinGameWindow(gameId: number) {
    this.joinGameWindowVisible = !this.joinGameWindowVisible;
    if (this.joinGameWindowVisible) {
      this.gameId = gameId;
    }
  }
}
