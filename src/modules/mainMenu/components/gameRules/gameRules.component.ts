import { Component, Output, EventEmitter } from "@angular/core";

import { UserService } from "src/modules/common/infrastructure/authorization/user.service";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";
import { GameRulesService } from "./../../../common/infrastructure/services/gameRules.service";
import { WinCondition } from "src/modules/common/infrastructure/consts/goTEnums";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { GameRules } from "src/models/gameRules.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "got-gameRules",
  templateUrl: "gameRules.component.html"
})
export class GameRulesComponent extends GotBaseComponent {
  maxPlayers: number = 3;
  allHouses: boolean = false;
  randomHouses: boolean = false;
  roundsCount: number = 10;
  winCastlesCount: number = 7;
  winPointsCount: number = 15;
  standardRules: boolean = true;
  winUnlimitedRounds: boolean = false;
  isWinCastles: boolean = true;
  isModified: boolean = false;
  canLookPlayerCard: boolean = true;
  largeCastleDefence: boolean = false;
  smallCastleDefence: boolean = false;
  mercenaryAvaible: boolean = false;

  gameRules: GameRules;

  @Output("rulesConfirmed")
  rulesConfirmed = new EventEmitter();

  constructor(private gameRulesService: GameRulesService,
    userService: UserService,
    localService: LocalizationService) {
      super(localService, userService);
      this.gameRules = gameRulesService.rules;
      if (this.gameRules !== undefined && this.gameRules.id !== 0) {
        this.isModified = true;
        this.standardRules = false;
        this.maxPlayers = this.gameRules.maxPlayers;
        this.allHouses = this.gameRules.allHouses;
        this.randomHouses = this.gameRules.randomHouses;
        this.roundsCount = this.gameRules.roundsCount;
        this.winCastlesCount = this.gameRules.winCastlesCount;
        this.winPointsCount = this.gameRules.winPointsCount;
        this.canLookPlayerCard = this.gameRules.canLookPlayerCard;
        this.largeCastleDefence = this.gameRules.largeCastleDefence;
        this.smallCastleDefence = this.gameRules.smallCastleDefence;
        this.mercenaryAvaible = this.gameRules.mercenaryAvaible;
      }

      this.winUnlimitedRounds = this.gameRules.roundsCount === 999 ? true : false;
      this.isWinCastles = this.gameRules.winCondition === WinCondition.Castles ? true : false;
  }

  roundsCountRadioChange(target: any) {
    if (target.id === "roundLimit") {
      this.winUnlimitedRounds = false;
    } else {
      this.winUnlimitedRounds = true;
    }
  }

  winConditionRaioChange(target: any) {
    if (target.id === "winCastleCount") {
      this.isWinCastles = true;
    } else {
      this.isWinCastles = false;
    }
  }

  confirm(form: NgForm) {
    if (form.valid) {
      if (this.standardRules) {
        this.gameRules = new GameRules();
        this.gameRules.maxPlayers = this.maxPlayers;
      } else {
        this.mapGameRules();
      }

      this.gameRulesService.setGameRules(this.gameRules);
      this.rulesConfirmed.emit("");
    }
  }

  private mapGameRules() {
    this.gameRules.maxPlayers = this.maxPlayers;
    this.gameRules.winCondition = this.isWinCastles ? WinCondition.Castles : WinCondition.Points;
    this.gameRules.roundsCount = this.winUnlimitedRounds ? 999 : this.roundsCount;
    this.gameRules.allHouses = this.allHouses;
    this.gameRules.randomHouses = this.randomHouses;
    this.gameRules.winCastlesCount = this.winCastlesCount;
    this.gameRules.winPointsCount = this.winPointsCount;
    this.gameRules.canLookPlayerCard = this.canLookPlayerCard;
    this.gameRules.largeCastleDefence = this.largeCastleDefence;
    this.gameRules.smallCastleDefence = this.smallCastleDefence;
    this.gameRules.mercenaryAvaible = this.mercenaryAvaible;
  }
}
