import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { FieldData } from "./../../../models/fieldData.model";
import { GameService } from "./../../common/infrastructure/services/game.service";
import { FieldView } from "../../../models/fieldView.model";
import { FieldViewRepository } from "../infrastructure/repositories/fieldView.repository";
import { GameBoard } from "src/models/gameBoard.model";
import { MainBoardSettings } from "../infrastructure/models/mainboard.settings";

@Component({
  selector: "got-mainboard",
  templateUrl: "mainBoard.component.html"
})

export class MainBoardComponent {
  private gameBoard: GameBoard;
  displayHouseFields: boolean;

  constructor(private data: FieldViewRepository, private gameService: GameService) {
    this.gameBoard = this.gameService.gameBoard;
   }


  get fields(): FieldView[] {
    return this.data.fieldViews;
  }

  public getFieldData(fieldId: number): FieldData {
    return this.gameBoard.fields.find(f => f.id === fieldId);
  }

  public toggleShowHouseFields() {
    this.displayHouseFields = !this.displayHouseFields;
  }
}
