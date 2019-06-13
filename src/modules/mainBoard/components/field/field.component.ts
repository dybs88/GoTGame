import { Observable } from "rxjs";

import { FieldData } from "./../../../../models/fieldData.model";
import { FieldView } from "../../../../models/fieldView.model";
import { Component, Input, SimpleChanges, Output, EventEmitter } from "@angular/core";
import { MainBoardSettings } from "../../infrastructure/models/mainboard.settings";
import { BaratheonDescription, LannisterDescription, StarkDescription} from "./../../../house/infrastructure/consts/houseDescriptions";
import { GreyjoyDescription, MartellDescription, TyrellDescription } from "./../../../house/infrastructure/consts/houseDescriptions";
import { HouseType } from "src/modules/common/infrastructure/consts/goTEnums";
import { Location } from "src/models/common/location.model";
import { FieldClickParams } from "../../infrastructure/models/fieldClickParams.model";

@Component({
  selector: "got-field",
  templateUrl: "field.component.html",
})

export class FieldComponent {
  @Input() scrollTop: number;
  @Input() displayHouseFields: boolean;
  @Input() settings: Observable<MainBoardSettings>;
  @Input() field: FieldView;
  @Input() fieldData: FieldData;
  @Output() fieldClick = new EventEmitter<FieldClickParams>();

  fillOpacity: number = 0.0;
  fill: string = "#000000";

  imageUrl(): string {
    return `url(/assets/img/${this.field.image})`;
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

  ngOnChanges(changes: SimpleChanges): void {
    const houseFieldsChange = changes["displayHouseFields"];
    if (houseFieldsChange !== undefined && !houseFieldsChange.firstChange) {
      if (houseFieldsChange.currentValue && this.fieldData.controlledHouse !== undefined) {
        this.fillOpacity = 0.5;

      } else {
        this.fillOpacity = 0.0;
      }
    }
  }

  onControlledHouseChange() {

  }

  onClick(event) {
    const params = new FieldClickParams(this.fieldData.id, this.fieldData.name, this.fieldData.type,
      new Location(parseInt(event.clientX, 10) - 15, parseInt(event.clientY, 10) - 65));
    this.fieldClick.emit(params);
  }

  style(): any {
    return {
      "background-image": this.imageUrl()
     };
  }

  transform(): string {
    return `translate(0.000000,${this.field.height.slice(0, this.field.height.indexOf("p"))}) scale(0.100000,-0.100000)`;
  }
}
