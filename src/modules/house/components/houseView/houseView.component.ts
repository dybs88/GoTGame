import { Component, Input, SimpleChanges, OnChanges } from "@angular/core";

import { LannisterDescription, StarkDescription, BaratheonDescription } from "./../../infrastructure/consts/houseDescriptions";
import { GreyjoyDescription, TyrellDescription, MartellDescription } from "./../../infrastructure/consts/houseDescriptions";
import { GotBaseComponent } from "./../../../common/components/gotBase.component";

@Component({
    selector: "got-houseV",
    templateUrl: "houseView.component.html"
})
export class HouseViewComponent extends GotBaseComponent  {
    @Input()
    selectedHouse: string;
 }
