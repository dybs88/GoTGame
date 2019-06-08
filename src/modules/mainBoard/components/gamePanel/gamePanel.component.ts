import { Component, Output, EventEmitter, Input } from "@angular/core";

import { GameBoard } from "src/models/gameBoard.model";
import { House } from "src/models/house.model";

@Component({
  selector: "got-gamePanel",
  templateUrl: "gamePanel.component.html"
})

export class GamePanelComponent {
  @Input()
  gameBoard: GameBoard;

  @Input()
  currentHouse: House;

  @Output()
  houseFieldsMode = new EventEmitter();

  onHouseFieldsClick() {
    this.houseFieldsMode.emit();
  }
}
