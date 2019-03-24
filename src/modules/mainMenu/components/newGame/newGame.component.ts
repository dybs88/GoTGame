
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { UserService } from "src/modules/common/infrastructure/authorization/user.service";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { Game } from "src/models/game.model";
import { Player } from "src/models/player.model";
import { GameRepository } from "./../../../dal/infrastructure/repositories/game.repository";
import { PlayerService } from "src/modules/common/infrastructure/authorization/player.service";



@Component({
  selector: "got-newgame",
  templateUrl: "newGame.component.html"
})
export class NewGameComponent extends GotBaseComponent {
  gameName: string;
  maxPlayers: number;
  playerName: string;
  house: string;

  constructor(private router: Router,
    private gameRepository: GameRepository,
    private playerService: PlayerService,
    localService: LocalizationService,
    userService: UserService) {
    super(localService, userService);
  }

  createNewGame(form: NgForm) {
    if (form.valid)
    {
      const game = new Game(0, this.gameName, 0, this.maxPlayers);
      const player = new Player(0, this.playerName, 0, "", this.house, "Joined");

      this.gameRepository.createGame(game, player).subscribe(serverData => {
        this.playerService.updatePlayer(serverData.player);
        this.router.navigate(["/readyforgame", serverData.game.id]);
      });
    }
  }
}
