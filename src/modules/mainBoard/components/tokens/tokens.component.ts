import { Component } from "@angular/core";
import { GameService } from "src/modules/common/infrastructure/services/game.service";

@Component({
    selector: "got-tokens",
    templateUrl: "tokens.component.html"
})
export class TokensComponent {

  constructor(private gameService: GameService) { }

  throneTokenStyle() {
    const result = {};
    if (this.gameService.gameBoard.tracks.throneTrack[0] === this.gameService.currentHouse.type) {
      result["background-image"] = `url(/assets/img/ThroneToken.png)`;
    }

    return result;
  }

  courtTokenStyle() {
    const result = {};
    if (this.gameService.gameBoard.tracks.courtTrack[0] === this.gameService.currentHouse.type) {
      result["background-image"] = `url(/assets/img/RavenToken.png)`;
    }

    return result;
  }

  vassalsTokenStyle() {
    const result = {};
    if (this.gameService.gameBoard.tracks.vassalsTrack[0] === this.gameService.currentHouse.type) {
      result["background-image"] = `url(/assets/img/SwordToken.png)`;
    }

    return result;
  }

}
