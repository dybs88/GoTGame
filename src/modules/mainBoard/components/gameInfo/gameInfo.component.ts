import { Component, Input } from "@angular/core";

import { GameBoard } from "src/models/gameBoard.model";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";
import { UserService } from "src/modules/common/infrastructure/authorization/user.service";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { GameService } from "src/modules/common/infrastructure/services/game.service";

@Component({
  selector: "got-gameInfo",
  templateUrl: "gameInfo.component.html"
})
export class GameInfoComponent extends GotBaseComponent {
  @Input()
  gameBoard: GameBoard;

  houseDescription: any;
  get houses() { return this.gameService.gameBoard.houses; }
  get currentHouse() { return this.gameService.currentHouse; }

  constructor(private gameService: GameService,
    userService: UserService,
    localizationService: LocalizationService) {
    super(localizationService, userService);
    this.houseDescription = this.gameService.currentHouse.description;
  }

  castleTranslation(castlesCount: number) {
    if (castlesCount === 1) {
      return this.getTranslation(this.localKeys.castleLbl);
    } else if (castlesCount > 1 && castlesCount <= 4) {
      return this.getTranslation(this.localKeys.castles1Lbl);
    } else {
      return this.getTranslation(this.localKeys.castles2Lbl);
    }
  }

  winningMenuItemStyle(description: any) {
    const result = {
      "background-color": description.styles.firstColor,
      "color": description.styles.secondColor,
      "font-size": "small"
    };

    if (description.type === this.houseDescription.type) {
      result["font-weight"] = "700";
    }

    return result;
  }
}
