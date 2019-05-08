import { Component, Input } from "@angular/core";

import { LocalizationService } from "./../../../common/infrastructure/locale/localization.service";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";
import { Game } from "src/models/game.model";
import { UserService } from "src/modules/common/infrastructure/authorization/user.service";

@Component({
  selector: "got-gameDetailsV",
  templateUrl: "gameDetailsView.component.html"
})
export class GameDetailsViewComponent extends GotBaseComponent {

  constructor(localService: LocalizationService, userService: UserService) {
    super(localService, userService);
  }

  @Input()
  game: Game;
}
