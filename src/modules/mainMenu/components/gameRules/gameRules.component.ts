import { Component, Output, EventEmitter } from "@angular/core";

import { UserService } from "src/modules/common/infrastructure/authorization/user.service";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";
import { GameRulesService } from "./../../../common/infrastructure/services/gameRules.service";
import { WinCondition } from "src/modules/common/infrastructure/consts/goTEnums";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";

@Component({
  selector: "got-gameRules",
  templateUrl: "gameRules.component.html"
})
export class GameRulesComponent extends GotBaseComponent {
  maxPlayers: number = 3;

  standardRules: boolean = true;
  allHouses: boolean = false;
  randomHouses: boolean = false;

  winRoundCount: number = 10;
  winUnlimitedRounds: boolean = false;
  winCastles: number = 7;
  isWinCastles: boolean = true;
  winPoints: number = 20;

  constructor(private gameRulesService: GameRulesService,
    userService: UserService,
    localService: LocalizationService) {
      super(localService, userService);
     }

  @Output("rulesConfirmed")
  rulesConfirmed = new EventEmitter();


  confirm() {
    if (this.standardRules) {
      const gameRules = { maxPlayers: this.maxPlayers,
        allHouses: false,
        randomHouses: false,
        roundCount: 10,
        winCodition: WinCondition.Castles,
        winCastlesCount: 7,
        winPointsCount: 0};

        this.gameRulesService.getRules(gameRules);
    } else {
      const gameRules = {
        maxPlayers: this.maxPlayers,
        allHouses: this.allHouses,
        randomHouses: this.randomHouses,
        roundCount: this.winUnlimitedRounds ? 999 : this.winRoundCount,
        winCondition: this.isWinCastles ? WinCondition.Castles : WinCondition.Points,
        winCastlesCount: this.winCastles,
        winPointsCount: this.winPoints
      };

      this.gameRulesService.getRules(gameRules);
      this.rulesConfirmed.emit("");
    }
  }
}
