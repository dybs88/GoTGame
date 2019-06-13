import { Component, Input } from "@angular/core";

@Component({
  selector: "got-selectPawn",
  templateUrl: "selectPawn.component.html"
})
export class SelectPawnComponent {
  private isClicked: boolean = false;

  @Input() imageSrc: string;


  onClick(event) {
    this.isClicked = !this.isClicked;
  }

  style() {
    const style = {
      "border": "2px",
      "border-style": "inset",
      "width": "70px",
      "height": "70px",
      "background-image": `url(${this.imageSrc})`
    };

    if (this.isClicked) {
      style["background-color"] = "greenyellow";
      style["border-color"] = "greenyellow";
    }

    return style;
  }
}
