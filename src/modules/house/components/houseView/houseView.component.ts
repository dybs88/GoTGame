import { LannisterDescription, StarkDescription, BaratheonDescription } from "./../../infrastructure/consts/houseDescriptions";
import { GreyjoyDescription, TyrellDescription, MartellDescription } from "./../../infrastructure/consts/houseDescriptions";
import { Component, Input, SimpleChanges } from "@angular/core";

@Component({
    selector: "got-houseV",
    templateUrl: "houseView.component.html"
})
export class HouseViewComponent {
    @Input()
    selectedHouse: string;

    houseDescription: any;

    ngOnChanges(changes: SimpleChanges): void {
      const change = changes["selectedHouse"];
      if (change !== undefined) {
        switch (this.selectedHouse) {
          case "Lannister":
          {
            this.houseDescription = LannisterDescription;
            break;
          }
          case "Stark":
          {
            this.houseDescription = StarkDescription;
            break;
          }
          case "Baratheon":
          {
            this.houseDescription = BaratheonDescription;
            break;
          }
          case "Greyjoy":
          {
            this.houseDescription = GreyjoyDescription;
            break;
          }
          case "Tyrell":
          {
            this.houseDescription = TyrellDescription;
            break;
          }
          case "Martell":
          {
            this.houseDescription = MartellDescription;
            break;
          }
          default:
          {
            this.houseDescription = undefined;
            break;
          }
        }
      }
    }
}
