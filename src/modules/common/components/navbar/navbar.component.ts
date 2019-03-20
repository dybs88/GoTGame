import { Component } from "@angular/core";

import { GotBaseComponent } from "./../gotBase.component";
import { LocalizationService } from "../../infrastructure/locale/localization.service";
import { PlayerService } from "../../infrastructure/authorization/player.service";

@Component({
  selector: "got-navbar",
  templateUrl: "navbar.component.html"
})
export class NavbarComponent extends GotBaseComponent {
  private showChangePlayerCard: boolean;

  playerId: string;

  constructor(localeService: LocalizationService,
    private playerService: PlayerService) {
    super(localeService);
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
