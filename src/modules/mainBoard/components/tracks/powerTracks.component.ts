import { GameService } from "src/modules/common/infrastructure/services/game.service";
import { Component } from "@angular/core";
import { Tracks } from "src/models/tracks.model";
import { HouseType } from "./../../../common/infrastructure/consts/goTEnums";

@Component({
  selector: "got-powerTracks",
  templateUrl: "powerTracks.component.html"
})
export class PowerTracksComponent {
  tracks: Tracks;

  constructor(private gameService: GameService) {
    this.tracks = gameService.gameBoard.tracks;
  }

  tokenSrc(houseType: HouseType) {
    if (houseType === HouseType.Baratheon) {
      return "assets/img/HouseBaratheonShield.png";
    } else if (houseType === HouseType.Lannister) {
      return "assets/img/HouseLannisterShield.png";
    } else if (houseType === HouseType.Stark) {
      return "assets/img/HouseStarkShield.png";
    } else if (houseType === HouseType.Greyjoy) {
      return "assets/img/HouseGreyjoyShield.png";
    } else if (houseType === HouseType.Martell) {
      return "assets/img/HouseMartellShield.png";
    } else if (houseType === HouseType.Tyrell) {
      return "assets/img/HouseTyrellShield.png";
    }
  }
}
