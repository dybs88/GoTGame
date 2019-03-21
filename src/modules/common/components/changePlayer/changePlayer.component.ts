
import { Component } from "@angular/core";

import { GotBaseComponent } from "./../gotBase.component";
import { PlayerService } from "./../../infrastructure/authorization/player.service";
import { LocalizationService } from "../../infrastructure/locale/localization.service";
import { UserService } from "../../infrastructure/authorization/user.service";

@Component({
    selector: "got-changePlayer",
    templateUrl: "changePlayer.component.html"
})
export class ChangePlayerComponent extends GotBaseComponent{
  private showChangePlayerCard: boolean;
  playerId: string;

  constructor(private playerService: PlayerService,
    localeService: LocalizationService,
    userService: UserService) {
    super(localeService, userService);
    this.playerId = localStorage.getItem("player_id");
   }

  toggleChangePlayerCard() {
    this.showChangePlayerCard = !this.showChangePlayerCard;
  }

  setPlayerId(value: string) {
    this.playerId = value;
  }

  changePlayerId() {
    localStorage.setItem("player_id", this.playerId);
    this.toggleChangePlayerCard();
    this.playerService.updatePlayerById(parseInt(this.playerId, 10));
  }
}
