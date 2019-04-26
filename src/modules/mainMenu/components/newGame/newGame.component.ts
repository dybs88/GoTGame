import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { UserService } from "src/modules/common/infrastructure/authorization/user.service";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { Game } from "src/models/game.model";
import { Player } from "src/models/player.model";
import { GameService } from "../../../common/infrastructure/services/game.service";
import { PlayerService } from "src/modules/common/infrastructure/services/player.service";
import { GameRules } from "src/models/gameRules.model";
import { GameRulesService } from "./../../../common/infrastructure/services/gameRules.service";



@Component({
  selector: "got-newgame",
  templateUrl: "newGame.component.html"
})
export class NewGameComponent extends GotBaseComponent {
  gameName: string;
  maxPlayers: number = 3;
  playerName: string;
  selectedHouse: string;
  avaibleHouses: string[];

  gameRules: GameRules;

  constructor(private router: Router,
    private gameRepository: GameService,
    private playerService: PlayerService,
    private gameRulesService: GameRulesService,
    localService: LocalizationService,
    userService: UserService) {
    super(localService, userService);
  }

  createNewGame(form: NgForm) {
    if (form.valid) {
      if (this.gameRules.randomHouses) {
        const r = Math.floor(Math.random() * (this.avaibleHouses.length - 1) + 1);
        this.selectedHouse = this.avaibleHouses[r];
      }
      const game = new Game(0, this.gameName, 0, this.gameRules);
      const player = new Player(0, this.playerName, 0, "", this.selectedHouse, "Joined", true);
      game.players.push(player);

      this.gameRepository.createGame(game).subscribe(serverData => {
        this.playerService.setPlayer(serverData.player);
        this.gameRulesService.setGameRules(serverData.gameRules);
        this.router.navigate(["/readyforgame", serverData.game.id.toString()]);
      });
    }
  }

  getRules() {
    this.gameRules = this.gameRulesService.rules;
    this.avaibleHouses = this.gameRulesService.calculateAvaibleHouses();
  }
}
