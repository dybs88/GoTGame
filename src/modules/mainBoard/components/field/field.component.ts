import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges, OnChanges } from "@angular/core";

import { FieldData } from "./../../../../models/fieldData.model";
import { FieldView } from "../../../../models/fieldView.model";
import { BaratheonDescription, LannisterDescription, StarkDescription} from "./../../../house/infrastructure/consts/houseDescriptions";
import { GreyjoyDescription, MartellDescription, TyrellDescription } from "./../../../house/infrastructure/consts/houseDescriptions";
import { HouseType } from "src/modules/common/infrastructure/consts/goTEnums";
import { Location } from "src/models/common/location.model";
import { FieldClickParams } from "../../infrastructure/models/fieldClickParams.model";
import { GameBoardViewSettings } from "../../infrastructure/models/gameBoardView.settings";
import { GameBoardService } from "../../infrastructure/services/gameBoard.service";

@Component({
  selector: "got-field",
  templateUrl: "field.component.html",
})

export class FieldComponent implements OnInit, OnChanges {
  fillOpacity: number = 0.0;
  fill: string = "#000000";

  @Input() field: FieldView;
  @Input() fieldData: FieldData;
  @Input() settingsModified: number;
  @Input() fieldClick: FieldClickParams;
  @Output() fieldClickChange = new EventEmitter<FieldClickParams>();

  constructor(private gameBoardService: GameBoardService) { }

  manageFieldView() {
    if (this.gameBoardService.settings.displayHouseFields !== undefined) {
      if (this.gameBoardService.settings.displayHouseFields && this.fieldData.controlledHouse !== undefined) {
        this.fillOpacity = 0.5;
      } else {
        this.fillOpacity = 0.0;
      }
    }
  }

  ngOnInit(): void {
    if (this.fieldData.controlledHouse !== undefined) {
      if (this.fieldData.controlledHouse === HouseType.Baratheon) {
        this.fill = BaratheonDescription.backgroundColor;
      } else if (this.fieldData.controlledHouse === HouseType.Lannister) {
        this.fill = LannisterDescription.backgroundColor;
      } else if (this.fieldData.controlledHouse === HouseType.Stark) {
        this.fill = StarkDescription.backgroundColor;
      } else if (this.fieldData.controlledHouse === HouseType.Greyjoy) {
        this.fill = GreyjoyDescription.backgroundColor;
      } else if (this.fieldData.controlledHouse === HouseType.Martell) {
        this.fill = MartellDescription.backgroundColor;
      } else if (this.fieldData.controlledHouse === HouseType.Tyrell) {
        this.fill = TyrellDescription.backgroundColor;
      }
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    const change = changes["settingsModified"];
    if (change !== undefined && !change.isFirstChange()) {
      this.manageFieldView();
    }
  }

  onClick(event) {
    this.fieldClick = new FieldClickParams(this.fieldData.id, this.fieldData.name, this.fieldData.type,
      new Location(parseInt(event.clientX, 10) - 15, parseInt(event.clientY, 10) - 65));
    this.fieldClickChange.emit(this.fieldClick);
  }

  style(): any {
    return {
      "background-image": `url(/assets/img/${this.field.image})`
     };
  }

  transform(): string {
    return `translate(0.000000,${this.field.height.slice(0, this.field.height.indexOf("p"))}) scale(0.100000,-0.100000)`;
  }
}
