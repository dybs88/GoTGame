import { Field } from "./../../../../models/field.model";
import { Component, Input } from "@angular/core";

@Component({
  selector: "got-field",
  templateUrl: "field.component.html"
})

export class FieldComponent {
  @Input()
  field: Field;

  imageUrl(): string {
    return `url(/src/img/${this.field.image})`;
  }

  style(): any {
    return {
      "background-image": this.imageUrl(),
      "position": "absolute",
      "left": this.field.location.x,
      "top": this.field.location.y
     };
  }

  transform(): string {
    return `translate(0.000000,${this.field.height.slice(0, this.field.height.indexOf("p"))}) scale(0.100000,-0.100000)`;
  }
}
