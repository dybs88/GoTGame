import { NgForm } from "@angular/forms";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { GameListService } from "../../../common/infrastructure/services/gameList.service";
import { Game } from "src/models/game.model";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";
import { PlayerService } from "src/modules/common/infrastructure/services/player.service";
import { Player } from "src/models/player.model";
import { UserService } from "src/modules/common/infrastructure/authorization/user.service";
import { GameRules } from "src/models/gameRules.model";
import { GameRulesService } from "src/modules/common/infrastructure/services/gameRules.service";

@Component({
  templateUrl: "gameList.component.html"
})

export class GameListComponent extends GotBaseComponent {
  private player: Player;
  games: Game[];
  selectedGame: Game;
  rejoiningGameId: number;
  rejoiningGameIsPrivate: boolean;
  password: string;
  passwordVerified: boolean;
  showPasswordVerification: boolean;
  actionBtnDisabled: boolean = false;

  constructor(private gameService: GameListService,
    private router: Router,
    private playerService: PlayerService,
    private gameRulesService: GameRulesService,
    userService: UserService,
    localizationService: LocalizationService) {
    super(localizationService, userService);
    this.gameService.getGames().subscribe(serverData => {
      this.games = serverData;
    });
   }

  createGame() {
    this.gameRulesService.setGameRules(new GameRules());
    this.router.navigate(["/newgame"]);
  }

  getGame(gameId: number) {
    return this.games.find(g => g.id === gameId);
  }

  hideMessageBox() {
    this.actionBtnDisabled = true;
    super.hideMessageBox();
  }

  joinGame(gameId: number, isPrivate: boolean) {
    if (this.playerService.currentPlayer !== undefined && this.playerService.currentPlayer !== null) {
      if (this.playerService.currentPlayer.gameId === gameId) {
        if (this.playerService.currentPlayer.status === "Joining") {
          this.router.navigate(["/joingame", gameId]);
        } else {
          this.router.navigate(["/readyforgame", gameId]);
        }
      } else {
        this.rejoiningGameId = gameId;
        this.rejoiningGameIsPrivate = isPrivate;
        this.showMessageBox(this.getTranslation(this.localKeys.rejoiningMsg), "YesNo", null, this.rejoinGame, this.hideMessageBox);
      }
    } else {
      if (isPrivate) {
        if (!this.passwordVerified) {
          this.rejoiningGameId = gameId;
          this.toogleShowPasswordVerification();
          return;
        }
      }
      this.gameService.joinGame(gameId).subscribe(serverData => {
        if (serverData.playerAdded) {
          this.player = serverData.newPlayer;
          this.playerService.joinGame(this.getGame(gameId), this.player);
          this.router.navigate(["/joingame", gameId]);
        }
      });
    }
  }

  rejoinGame() {
    this.hideMessageBox();
    this.playerService.deletePlayer().subscribe(serverData => {
      this.playerService.clearPlayer();
      this.joinGame(this.rejoiningGameId, this.rejoiningGameIsPrivate);
    });
  }

  refreshGames() {
    this.gameService.refreshGames().subscribe(serverData => {
      this.games = serverData;
    });
  }

  selectGame(gameId: number) {
    this.selectedGame = this.games.find(g => g.id === gameId);
  }

  toogleShowPasswordVerification() {
    this.actionBtnDisabled = !this.actionBtnDisabled;
    this.showPasswordVerification = !this.showPasswordVerification;
  }

  verifyPassword(form: NgForm) {
    if (form.valid) {
      this.gameService.verifyPassword(this.rejoiningGameId, this.password).subscribe(response => {
        this.passwordVerified = response;
        this.joinGame(this.rejoiningGameId, true);
      });
    }
  }
}
