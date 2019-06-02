import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { GameService } from "./../../common/infrastructure/services/game.service";
import { GotBaseComponent } from "./../../common/components/gotBase.component";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { UserService } from "src/modules/common/infrastructure/authorization/user.service";

@Component({
  selector: "got-mainmenu",
  templateUrl: "mainMenu.component.html"
})

export class MainMenuComponent extends GotBaseComponent {

  constructor(private gameService: GameService,
    private router: Router,
    userService: UserService,
    localizationService: LocalizationService) {
    super(localizationService, userService);
  }

  quickStart() {
    this.gameService.quickStart().subscribe(response => {
      this.gameService.setGameBoard(response.gameBoard);
      this.router.navigate(["/gameboard", response.game.id]);
    });
  }
}
