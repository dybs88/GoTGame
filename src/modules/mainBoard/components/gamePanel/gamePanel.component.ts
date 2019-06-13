import { Component, Output, EventEmitter, Input, ElementRef, ViewRef } from "@angular/core";

import { GameBoard } from "src/models/gameBoard.model";
import { House } from "src/models/house.model";
import { GameService } from "src/modules/common/infrastructure/services/game.service";
import { PawnType, PawnMode } from "src/modules/common/infrastructure/consts/goTEnums";
import { PawnClickParams } from "../../infrastructure/models/pawnClickParams.model";

@Component({
  selector: "got-gamePanel",
  templateUrl: "gamePanel.component.html"
})

export class GamePanelComponent {

  houseDescription: any;

  @Input() gameBoard: GameBoard;
  @Input() currentHouse: House;
  @Output() houseFieldsMode = new EventEmitter();
  @Output() pawnClickEvent = new EventEmitter<PawnClickParams>();

  constructor(private gameService: GameService) {
    this.houseDescription = this.gameService.houseDescription;
   }

  onHouseFieldsClick() {
    this.houseFieldsMode.emit();
  }

  onPawnClick(pawnType: PawnType) {
    const pawnId = this.gameService.currentHouse.pawns.find(p => p.mode === PawnMode.OutGame && p.type === pawnType).id;
    this.pawnClickEvent.emit(new PawnClickParams(pawnId, this.gameService.currentHouse.type, pawnType));
  }
}
