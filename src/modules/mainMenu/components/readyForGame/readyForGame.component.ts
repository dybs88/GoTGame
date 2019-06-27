import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Subscription, timer } from "rxjs";

import { GameService } from "./../../../common/infrastructure/services/game.service";
import { LocalizationService } from "../../../common/infrastructure/locale/localization.service";
import { GotBaseComponent } from "../../../common/components/gotBase.component";
import { GameListService } from "../../../common/infrastructure/services/gameList.service";
import { Game } from "src/models/game.model";
import { Player } from "src/models/player.model";
import { PlayerService } from "src/modules/common/infrastructure/services/player.service";
import { UserService } from "src/modules/common/infrastructure/authorization/user.service";
import { GameRulesService } from "src/modules/common/infrastructure/services/gameRules.service";
import { MapHelper } from "src/modules/common/infrastructure/helpers/map.helper";

@Component({
  selector: "got-readyforgame",
  templateUrl: "ReadyForGame.component.html"
})

export class ReadyForGameComponent extends GotBaseComponent implements OnDestroy {
  game: Game;
  players: Player[];
  joined: boolean = false;
  refreshCounter: number = 0;
  showChangeRules: boolean = false;
  newGameCreatorMsgShow: boolean = false;
  start: boolean;
  disableAdminBtn: boolean;

  private gameSubscription: Subscription;
  private timerSubscription: Subscription;

  get currentPlayer() {
    return this.playerService.currentPlayer;
  }

  constructor(private route: ActivatedRoute,
    private router: Router,
    private gameListService: GameListService,
    private playerService: PlayerService,
    private gameRulesService: GameRulesService,
    private gameService: GameService,
    private mapHelper: MapHelper,
    userService: UserService,
    localizationService: LocalizationService) {
      super(localizationService, userService);

      this.route.params.subscribe(params => {
        this.refreshGameSubscription(parseInt(params["id"], 10));
      });
     }

  public changeStatus(playerStatus: string) {
    this.playerService.changeStatus(playerStatus);
  }

  public confirmRules() {
    this.gameRulesService.updateGameRules();
    this.toggleShowChangeRules();
  }

  public kickPlayer(playerId: number) {
    this.disableAdminBtn = true;
    this.playerService.deletePlayer(playerId).subscribe(response => {
      this.disableAdminBtn = false;
    });
  }

  public leaveGame() {
    this.playerService.deletePlayer().subscribe(serverData => {
      this.playerService.clearPlayer();
      this.router.navigateByUrl("/gamelist");
    });
  }

  public transferGameCreator(newCreator: Player) {
    this.disableAdminBtn = true;
    this.playerService.currentPlayer.isGameCreator = false;
    newCreator.isGameCreator = true;
    this.playerService.updatePlayer(this.currentPlayer).subscribe(response => {
      this.playerService.setPlayer(response);
    });
    this.playerService.updatePlayer(newCreator).subscribe(response => {
      this.disableAdminBtn = false;
    });
  }

  public startGame() {
    this.gameService.startGame(this.game.id).subscribe(response => {
      this.gameService.gameBoard = this.mapHelper.mapOnGameBoard(response.gameBoard);
      this.router.navigate(["/gameboard", response.game.id]);
    });
  }

  ngOnDestroy() {
    this.gameSubscription.unsubscribe();
    this.timerSubscription.unsubscribe();
  }

  private onRefreshGame(serverData: any) {
    if (serverData.newGameCreator && this.playerService.currentPlayer.id === serverData.newGameCreatorId) {
      this.playerService.setPlayerById(this.playerService.currentPlayer.id);
      this.showMessageBox(this.getTranslation(this.localKeys.newGameCreatorMsg), "OK", this.hideMessageBox);
    }

    if (serverData.game.players.find(p => p.id === this.currentPlayer.id) === undefined) {
      this.playerService.clearPlayer();
      this.router.navigateByUrl("/gamelist");
    }
    this.game = this.mapHelper.mapOnGame(serverData.game);
    this.gameService.currentGame = this.game;
    this.players = this.game.players;
    this.gameRulesService.rules = this.game.gameRules;
    this.start = !(this.players !== undefined && this.players.length >= 3 && this.players.every(p => p.status === "Ready"));
    this.refreshCounter++;
  }

  private refreshGameSubscription(gameId: number) {
    this.gameSubscription = this.gameListService.refreshGame(gameId, this.currentPlayer.id).subscribe(serverData => {
      this.onRefreshGame(serverData);
      this.subscribeToData(gameId);
    });
  }

  private subscribeToData(gameId: number) {
    this.timerSubscription = timer(1000).subscribe(() => this.refreshGameSubscription(gameId));
  }

  private toggleShowChangeRules() {
    this.showChangeRules = !this.showChangeRules;
  }
}
