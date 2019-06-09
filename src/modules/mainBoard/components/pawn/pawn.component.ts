import { Component, Input, Output, EventEmitter } from "@angular/core";
import { PawnView } from "src/models/pawnView.model";
import { GoTObject } from "src/models/abstract/got.object";

@Component({
  selector: "got-pawn",
  templateUrl: "pawn.component.html"
})
export class PawnComponent implements GoTObject {

  @Input()
  goTObject: PawnView;

  @Output()
  clickEvent = new EventEmitter<any>();

  imageUrl(): string {
    return `url(${this.goTObject.image})`;
  }

  onClick(event) {
    this.clickEvent.emit(event.currentTarget);
  }

  style(): any {
    return {
      "background-image": this.imageUrl(),
      "position": "absolute"
     };
  }

  transform(): string {
    return `translate(0.000000,${this.goTObject.size.height.slice(0, this.goTObject.size.height.indexOf("p"))}) scale(0.100000,-0.100000)`;
  }
}
