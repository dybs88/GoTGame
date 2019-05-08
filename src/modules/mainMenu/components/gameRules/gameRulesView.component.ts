import { Component, Input } from "@angular/core";

import { GotBaseComponent } from "./../../../common/components/gotBase.component";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { UserService } from "src/modules/common/infrastructure/authorization/user.service";
import { GameRules } from "src/models/gameRules.model";

@Component({
  selector: "got-gameRulesV",
  templateUrl: "gameRulesView.component.html"
})
export class GameRulesViewComponent extends GotBaseComponent {

  @Input()
  gameRules: GameRules;


  constructor(localService: LocalizationService, userService: UserService) {
    super(localService, userService);
  }
}
