import { Component, Output, EventEmitter, Input } from "@angular/core";

import { GameBoard } from "src/models/gameBoard.model";
import { House } from "src/models/house.model";
import { GameService } from "src/modules/common/infrastructure/services/game.service";
import { PawnClickParams } from "../../infrastructure/models/pawnClickParams.model";
import { GameBoardService } from "../../infrastructure/services/gameBoard.service";

@Component({
  selector: "got-gamePanel",
  templateUrl: "gamePanel.component.html"
})

export class GamePanelComponent {

  private pawnClickParams: PawnClickParams;
  private gameBoardSettingsChange: number = 0;

  houseDescription: any;

  get pawnClick() {
    return this.pawnClickParams;
  }

  @Input() set pawnClick(params: PawnClickParams) {
    this.pawnClickParams = params;
    this.pawnClickChange.emit(this.pawnClickParams);
  }
  @Output() pawnClickChange = new EventEmitter<PawnClickParams>();

  get settingsModified() {
    return this.gameBoardSettingsChange;
  }

  @Input() set settingsModified(value: number) {
    if (value === undefined) {
      return;
    }
    this.gameBoardSettingsChange = value;
    this.settingsModifiedChange.emit(this.gameBoardSettingsChange);
  }
  @Output() settingsModifiedChange = new EventEmitter<number>();

  @Input() gameBoard: GameBoard;
  @Input() currentHouse: House;

  constructor(private gameService: GameService, private gameBoardService: GameBoardService) {
    this.houseDescription = this.gameService.houseDescription;
    this.gameBoardSettingsChange = 0;
  }

  houseFieldsBtnStyle() {
    if (this.gameBoardService.settings.displayHouseFields) {
      return {
        "background-image": "url(/assets/img/fieldOn.png)"
      };
    } else {
      return {
        "background-image": "url(/assets/img/fieldOff.png)"
      };
    }
  }

  onHouseFieldsClick() {
    this.gameBoardService.settings.displayHouseFields = !this.gameBoardService.settings.displayHouseFields;
    if (this.gameBoardSettingsChange === 1) {
      this.settingsModified--;
    } else {
      this.settingsModified++;
    }
  }

  onPowerTrackBtnClick() {
    this.gameBoardService.settings.displayPowerTracks = !this.gameBoardService.settings.displayPowerTracks;
    if (this.gameBoardSettingsChange === 1) {
      this.settingsModified--;
    } else {
      this.settingsModified++;
    }
  }
}
