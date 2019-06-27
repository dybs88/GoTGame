import { Component } from "@angular/core";
import { switchMap } from "rxjs/operators";
import { ParamMap, ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { GotBaseComponent } from "../../../common/components/gotBase.component";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { GameListService } from "../../../common/infrastructure/services/gameList.service";
import { PlayerService } from "src/modules/common/infrastructure/services/player.service";
import { Player } from "src/models/player.model";
import { Game } from "src/models/game.model";
import { UserService } from "./../../../common/infrastructure/authorization/user.service";
import { GameRulesService } from "./../../../common/infrastructure/services/gameRules.service";

@Component({
  selector: "got-joinGame",
  templateUrl: "joinGame.component.html"
})
export class JoinGameComponent extends GotBaseComponent {
  newPlayer: Player;
  selectedHouse: string;
  game: Game;
  avaibleHouses: string[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private gameRepository: GameListService,
    private playerService: PlayerService,
    private gameRulesService: GameRulesService,
    userService: UserService,
    localService: LocalizationService) {
    super(localService, userService);
    this.newPlayer = playerService.currentPlayer;

    this.route.params.subscribe(params => {
        this.gameRepository.getGame(parseInt(params["id"], 10)).subscribe(serverData => {
          this.game = serverData;
          this.gameRulesService.rules = this.game.gameRules;
          this.avaibleHouses = gameRulesService.calculateAvaibleHouses(this.game.players.map(p => p.house));
        });
      });
  }
  cancelJoinGame() {
    this.playerService.deletePlayer().subscribe(serverData => {
      this.router.navigate(["/gamelist"]);
    });
  }

  confirmJoinGame(form: NgForm) {
    if (form.valid) {
      if (this.game.gameRules.randomHouses) {
        const r = Math.floor(Math.random() * (this.avaibleHouses.length - 1)  + 1);
        this.selectedHouse = this.avaibleHouses[r];
      }
      this.newPlayer.house = this.selectedHouse;
      this.gameRepository.confirmJoinGame(this.game.id, this.newPlayer).subscribe(serverData => {
        if (serverData.playerJoined) {
          this.playerService.setPlayer(serverData.player);
          this.router.navigate(["/readyforgame", this.game.id]);
        } else {
          this.showMessageBox(this.getTranslation(this.localKeys.housePlayerExistMsg), "OK");
          window.location.reload();
        }
      });
    }
  }
}
