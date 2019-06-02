
import { Component } from "@angular/core";

import { GotBaseComponent } from "./../gotBase.component";
import { PlayerService } from "../../infrastructure/services/player.service";
import { LocalizationService } from "../../infrastructure/locale/localization.service";
import { UserService } from "../../infrastructure/authorization/user.service";
import { CurrentService } from "../../infrastructure/services/current.service";

@Component({
    selector: "got-changePlayer",
    templateUrl: "changePlayer.component.html"
})
export class ChangePlayerComponent extends GotBaseComponent {
  showChangePlayerCard: boolean;
  playerId: string;

  constructor(private playerService: PlayerService,
    localeService: LocalizationService,
    userService: UserService) {
    super(localeService, userService);
    const playerId = localStorage.getItem("player_id");
    if (playerId !== "undefined" && playerId !== null) {
      playerService.setPlayerById(parseInt(playerId, 10));
    }
   }

   changePlayerId() {
    localStorage.setItem("player_id", this.playerId);
    this.toggleChangePlayerCard();
    this.playerService.setPlayerById(parseInt(this.playerId, 10));
  }

  clearPlayer() {
    localStorage.setItem("player_id", "");
    this.toggleChangePlayerCard();
    this.playerService.clearPlayer();
  }

  setPlayerId(value: string) {
    this.playerId = value;
  }

  toggleChangePlayerCard() {
    this.showChangePlayerCard = !this.showChangePlayerCard;
    this.playerId = localStorage.getItem("player_id") ? localStorage.getItem("player_id") : "";
  }
}
