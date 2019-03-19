import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { GameRepository } from "./../../../dal/infrastructure/repositories/game.repository";
import { Game } from "src/models/game.model";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";
import { PlayerService } from "src/modules/common/infrastructure/authorization/player.service";
import { delay } from "rxjs/operators";
import { Player } from "src/models/player.model";

@Component({
  templateUrl: "gameList.component.html"
})

export class GameListComponent extends GotBaseComponent {
  private newPlayer: Player;
  games: Game[];

  constructor(private gameRepository: GameRepository,
    private router: Router,
    private playerService: PlayerService,
    localizationService: LocalizationService) {
    super(localizationService);
    this.gameRepository.getGames().subscribe(serverData => {
      this.games = serverData;
    });
   }

  createNewGame() {

  }

  getGame(gameId: number): Game {
    return this.games.find(g => g.id === gameId);
  }

  joinGame(gameId: number) {
    if (this.playerService.player !== undefined && this.playerService.player !== null) {
      if (this.playerService.player.gameId === gameId) {
        if (this.playerService.player.status === 0) {
          this.router.navigate(["/joingame", gameId]);
        } else {
          this.router.navigate(["/readyforgame", gameId]);
        }
      } else {
        //TO DO dołączenie do innej gry
      }

    } else  {
      this.gameRepository.joinGame(gameId).subscribe(serverData => {
        this.newPlayer = serverData.newPlayer;
        this.playerService.joinGame(this.getGame(gameId), this.newPlayer);
        delay(500);
        this.router.navigate(["/joingame", gameId]);
      });
    }
  }

  refreshGames() {
    this.gameRepository.refreshGames().subscribe(serverData => {
      this.games = serverData;
    });
  }
}
