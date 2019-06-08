import { Component, Input } from "@angular/core";

import { GameBoard } from "src/models/gameBoard.model";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";
import { UserService } from "src/modules/common/infrastructure/authorization/user.service";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";

@Component({
  selector: "got-gameInfo",
  templateUrl: "gameInfo.component.html"
})
export class GameInfoComponent extends GotBaseComponent {
  @Input()
  gameBoard: GameBoard;

  constructor(userService: UserService, localizationService: LocalizationService) {
    super(localizationService, userService);
  }
}
