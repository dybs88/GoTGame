import { Component } from "@angular/core";

import { GameService } from "./../../../common/infrastructure/services/game.service";

@Component({
  selector: "got-game",
  templateUrl: "gameBoard.component.html"
})
export class GameBoardComponent {

  get gameBoard() {
    return this.gameService.gameBoard;
  }

  get currentHouse() {
    return this.gameService.currentHouse;
  }

  constructor(private gameService: GameService) { }
}
