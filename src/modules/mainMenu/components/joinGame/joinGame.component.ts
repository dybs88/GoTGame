import { Component } from "@angular/core";
import { switchMap } from "rxjs/operators";
import { ParamMap, ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { GotBaseComponent } from "../../../common/components/gotBase.component";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { GameRepository } from "./../../../dal/infrastructure/repositories/game.repository";
import { PlayerService } from "src/modules/common/infrastructure/authorization/player.service";
import { Player } from "src/models/player.model";
import { Game } from "src/models/game.model";
import { UserService } from "./../../../common/infrastructure/authorization/user.service";
import { House } from "src/modules/common/infrastructure/consts/goTEnums";

@Component({
  selector: "got-joinGame",
  templateUrl: "joinGame.component.html"
})
export class JoinGameComponent extends GotBaseComponent {
  newPlayer: Player;
  selectedHouse: string;
  game: Game;
  avaibleHouses: string[] = new Array("Baratheon", "Stark", "Lannister", "Tyrell", "Greyjoy", "Martell");

  constructor(private route: ActivatedRoute,
    private router: Router,
    private gameRepository: GameRepository,
    private playerService: PlayerService,
    userService: UserService,
    localService: LocalizationService) {
    super(localService, userService);
    this.newPlayer = playerService.player;

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => params.get("id"))).subscribe(s => {
        this.gameRepository.getGame(parseInt(s, 10)).subscribe(serverData => {
          this.game = serverData;
          for (let i = 0; i < this.avaibleHouses.length; i++) {
            if (serverData.players.find(p => p.house === this.avaibleHouses[i])) {
              this.avaibleHouses.splice(i, 1);
            }
          }
        });
      });
  }
  cancelJoinGame() {
    this.playerService.deletePlayer();
    this.router.navigate(["/gamelist"]);
  }

  confirmJoinGame(form: NgForm) {
    if (form.valid) {
      this.newPlayer.house = this.selectedHouse;
      this.gameRepository.confirmJoinGame(this.game.id, this.newPlayer).subscribe(serverData => {
        if (serverData.playerJoined) {
          this.playerService.updatePlayer(serverData.player);
          this.router.navigate(["/readyforgame", this.game.id]);
        }
      });
    }
  }
}
