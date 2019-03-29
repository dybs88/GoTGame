import { Component, Input } from "@angular/core";

@Component({
    selector: "got-houseV",
    templateUrl: "houseView.component.html"
})
export class HouseViewComponent {
    @Input()
    selectedHouse: string;
}
