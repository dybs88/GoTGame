import { FieldClickParams } from './../infrastructure/models/fieldClickParams.model';
import { Component, Output, EventEmitter, Input } from "@angular/core";

import { FieldData } from "./../../../models/fieldData.model";
import { GameService } from "./../../common/infrastructure/services/game.service";
import { FieldView } from "../../../models/fieldView.model";
import { FieldViewRepository } from "../infrastructure/repositories/fieldView.repository";
import { GameBoard } from "src/models/gameBoard.model";
import { Location } from "src/models/common/location.model";

@Component({
  selector: "got-mainboard",
  templateUrl: "mainBoard.component.html"
})

export class MainBoardComponent {
  private gameBoard: GameBoard;
  displayHouseFields: boolean;
  @Input() scrollTop: number;
  @Output() fieldClick = new EventEmitter<FieldClickParams>();

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

  onFieldClick(params: FieldClickParams) {
    this.fieldClick.emit(params);
  }

  fieldStyle(field: FieldView) {
    return {
      "pointer-events": "none",
      "width": field.width,
      "height": field.height,
      "position": "absolute",
      "left": `${field.location.x}px`,
      "top": `${field.location.y}px`
    };
  }
}
