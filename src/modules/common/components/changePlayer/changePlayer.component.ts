
import { Component } from "@angular/core";

import { GotBaseComponent } from "./../gotBase.component";
import { PlayerService } from "../../infrastructure/services/player.service";
import { LocalizationService } from "../../infrastructure/locale/localization.service";
import { UserService } from "../../infrastructure/authorization/user.service";


@Component({
    selector: "got-changePlayer",
    templateUrl: "changePlayer.component.html"
})
export class ChangePlayerComponent extends GotBaseComponent {
  showChangePlayerCard: boolean;

  get playerId() {
    return this.playerService.currentPlayer !== undefined ? this.playerService.currentPlayer.id.toString() : "";
  }

  constructor(private playerService: PlayerService,
    localeService: LocalizationService,
    userService: UserService) {
    super(localeService, userService);
   }

   changePlayerById(playerId: string) {
    this.toggleChangePlayerCard();
    this.playerService.setPlayerById(parseInt(playerId, 10));
  }

  clearPlayer() {
    this.toggleChangePlayerCard();
    this.playerService.clearPlayer();
  }

  toggleChangePlayerCard() {
    this.showChangePlayerCard = !this.showChangePlayerCard;
  }
}
