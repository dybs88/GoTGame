import { Component } from "@angular/core";
import { GameService } from "src/modules/common/infrastructure/services/game.service";

@Component({
    selector: "got-tokens",
    templateUrl: "tokens.component.html"
})
export class TokensComponent {
  houseDescription: any;

  throneStrokeWidth = 5;
  courtStrokeWidth = 5;
  vassalsStrokeWidth = 5;

  constructor(private gameService: GameService) {
    this.houseDescription = gameService.currentHouse.description;
   }

  throneTokenStyle() {
    const result = {};
    if (this.gameService.gameBoard.tracks.throneTrack[0] === this.gameService.currentHouse.type) {
      result["background-image"] = `url(/assets/img/ThroneToken.png)`;
      this.throneStrokeWidth = 0;
    }

    return result;
  }

  courtTokenStyle() {
    const result = {};
    if (this.gameService.gameBoard.tracks.courtTrack[0] === this.gameService.currentHouse.type) {
      result["background-image"] = `url(/assets/img/RavenToken.png)`;
      this.courtStrokeWidth = 0;
    }

    return result;
  }

  vassalsTokenStyle() {
    const result = {};
    if (this.gameService.gameBoard.tracks.vassalsTrack[0] === this.gameService.currentHouse.type) {
      result["background-image"] = `url(/assets/img/SwordToken.png)`;
      this.vassalsStrokeWidth = 0;
    }

    return result;
  }

}
