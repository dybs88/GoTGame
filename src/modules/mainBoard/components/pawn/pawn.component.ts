import { Component, Input, Output, EventEmitter, ViewChild, TemplateRef, ViewRef, OnInit } from "@angular/core";
import { PawnView } from "src/models/pawnView.model";
import { GoTObject } from "src/models/abstract/got.object";

@Component({
  selector: "got-pawn",
  templateUrl: "pawn.component.html"
})
export class PawnComponent implements GoTObject {

  @Input() goTObject: PawnView;
  @Output() clickEvent = new EventEmitter<ViewRef>();

  imageUrl(): string {
    return `url(${this.goTObject.image})`;
  }

  style(): any {
    return {
      "background-image": this.imageUrl(),
      "position": "absolute",
      "left": `${this.goTObject.location.x}px`,
      "top": `${this.goTObject.location.y}px`,
      "z-index": 1030
     };
  }

  transform(): string {
    return `translate(0.000000,${this.goTObject.size.height.slice(0, this.goTObject.size.height.indexOf("p"))}) scale(0.100000,-0.100000)`;
  }
}
