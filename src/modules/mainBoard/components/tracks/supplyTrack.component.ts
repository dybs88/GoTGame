import { Component } from "@angular/core";
import { GameService } from "src/modules/common/infrastructure/services/game.service";
import { SupplyTrackItem } from "src/models/supplyTrackItem.model";
import { HouseType } from "src/modules/common/infrastructure/consts/goTEnums";
import { Army } from "src/models/army.model";
import { SupplyTrackRules } from "src/models/supplyTrackRules.model";

@Component({
  selector: "got-supplyTrack",
  templateUrl: "supplyTrack.component.html"
})
export class SupplyTrackComponent {
  supplyTrack: SupplyTrackItem[];
  armies: Army[];
  supplyRules: SupplyTrackRules;
  currentHouseSupplyPosition: number;

  constructor (private gameService: GameService) {
    this.supplyTrack = gameService.gameBoard.tracks.supplyTrack;
    this.armies = gameService.currentHouse.armies;
    this.supplyRules = new SupplyTrackRules();

    for (let s = 0; s < this.supplyTrack.length; s++) {
      if (this.supplyTrack[s].houseTypes.find(ht => ht === gameService.currentHouse.type) !== undefined) {
        this.currentHouseSupplyPosition = s;
        s = this.supplyTrack.length;
      }
    }

    this.supplyRules.calculateAvaibleArmies(this.currentHouseSupplyPosition, this.armies);
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

  suppliedArmiesCount(): number {
    return this.armies.filter(a => a.pawns.length > 1).length;
  }

  toggleBackgroundColor(supplyLvl: number, condition: boolean) {
    return (this.currentHouseSupplyPosition === supplyLvl && condition);
  }
}
