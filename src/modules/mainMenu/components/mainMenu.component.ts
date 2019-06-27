import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { GameService } from "./../../common/infrastructure/services/game.service";
import { GotBaseComponent } from "./../../common/components/gotBase.component";
import { LocalizationService } from "src/modules/common/infrastructure/locale/localization.service";
import { UserService } from "src/modules/common/infrastructure/authorization/user.service";
import { FieldData } from "src/models/fieldData.model";
import { MapHelper } from "src/modules/common/infrastructure/helpers/map.helper";
import { GameBoard } from "src/models/gameBoard.model";

@Component({
  selector: "got-mainmenu",
  templateUrl: "mainMenu.component.html"
})

export class MainMenuComponent extends GotBaseComponent {

  constructor(private gameService: GameService,
    private router: Router,
    private mapHelper: MapHelper,
    userService: UserService,
    localizationService: LocalizationService) {
    super(localizationService, userService);
  }

  quickStart() {
    this.gameService.quickStart().subscribe(response => {
      this.gameService.currentGame = this.mapHelper.mapOnGame(response.game);
      this.gameService.gameBoard = this.mapHelper.mapOnGameBoard(response.gameBoard);
      this.router.navigate(["/gameboard", response.game.id]);
    });
  }
}
