import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "got-housePanel",
  templateUrl: "housePanel.component.html"
})

export class HousePanelComponent {
  @Output()
  houseFieldsMode = new EventEmitter();

  onHouseFieldsClick() {
    this.houseFieldsMode.emit();
  }
}
