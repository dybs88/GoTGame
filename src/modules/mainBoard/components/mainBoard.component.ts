import { Component, Output, EventEmitter, Input, SimpleChanges } from "@angular/core";

import { FieldData } from "./../../../models/fieldData.model";
import { GameService } from "./../../common/infrastructure/services/game.service";
import { FieldView } from "../../../models/fieldView.model";
import { FieldViewRepository } from "../infrastructure/repositories/fieldView.repository";
import { GameBoard } from "src/models/gameBoard.model";
import { FieldClickParams } from "./../infrastructure/models/fieldClickParams.model";

@Component({
  selector: "got-mainboard",
  templateUrl: "mainBoard.component.html"
})

export class MainBoardComponent {
  private gameBoard: GameBoard;
  private fieldClickParams: FieldClickParams;

  @Input() set fieldClick(params: FieldClickParams) {
    this.fieldClickParams = params;
    this.fieldClickChange.emit(this.fieldClickParams);
  }
  @Output() fieldClickChange = new EventEmitter<FieldClickParams>();
  get fieldClick() {
    return this.fieldClickParams;
  }
  get fields(): FieldView[] {
    return this.data.fieldViews;
  }

  constructor(private data: FieldViewRepository, private gameService: GameService) {
    this.gameBoard = this.gameService.gameBoard;
  }

  public getFieldData(fieldId: number): FieldData {
    return this.gameBoard.fields.find(f => f.id === fieldId);
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
