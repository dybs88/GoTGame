
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription, timer } from "rxjs";

import { LocalizationService } from "../../../common/infrastructure/locale/localization.service";
import { GotBaseComponent } from "../../../common/components/gotBase.component";
import { GameRepository } from "../../../dal/infrastructure/repositories/game.repository";
import { Game } from "src/models/game.model";
import { Player } from "src/models/player.model";
import { PlayerService } from "src/modules/common/infrastructure/authorization/player.service";
import { UserService } from "src/modules/common/infrastructure/authorization/user.service";
import { GameRulesService } from "src/modules/common/infrastructure/services/gameRules.service";

@Component({
  selector: "got-join",
  templateUrl: "ReadyForGame.component.html"
})

export class ReadyForGameComponent extends GotBaseComponent {
  game: Game;
  players: Player[];
  currentPlayer: Player;
  joined: boolean = false;
  refreshCounter: number = 0;
  showChangeRules: boolean = false;

  private gameSubscription: Subscription;
  private timerSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private gameRepository: GameRepository,
    private playerService: PlayerService,
    private gameRulesService: GameRulesService,
    userService: UserService,
    localizationService: LocalizationService) {
      super(localizationService, userService);
      this.currentPlayer = this.playerService.player;

      this.route.params.subscribe(params => {
        this.refreshGameSubscription(parseInt(params["id"], 10));
      });
     }

  public confirmRules() {
    this.gameRulesService.updateGameRules();
    this.toggleShowChangeRules();
  }

  leaveGame() {
    this.playerService.deletePlayer().subscribe(serverData => {
      this.playerService.clearPlayer();
      this.router.navigateByUrl("/gamelist");
    });
  }

  ngOnDestroy() {
    this.gameSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
    this.router.navigateByUrl("/gameList");
  }

  public changeStatus(playerStatus: string) {
    this.playerService.changeStatus(playerStatus);
  }

  private refreshGameSubscription(gameId: number) {
    this.gameSubscription = this.gameRepository.getGame(gameId).subscribe(serverData => {
      this.gameRepository.currentGame = serverData;
      this.game = serverData;
      this.players = serverData.players;
      this.gameRulesService.setGameRules(serverData.gameRules);
      this.refreshCounter++;
      this.subscribeToData(gameId);
    });
  }

  private subscribeToData(gameId: number) {
    this.timerSubscription = timer(2500).subscribe(() => this.refreshGameSubscription(gameId));
  }

  toggleShowChangeRules() {
    this.showChangeRules = !this.showChangeRules;
  }
}
