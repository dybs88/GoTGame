import { Field } from "./../../../models/field.model";
import { FieldRepository } from "src/models/field.repository";
import { Component } from "@angular/core";

@Component({
  selector: "got-mainboard",
  templateUrl: "mainBoard.component.html"
})

export class MainBoardComponent {
  constructor(private data: FieldRepository) { }

  get fields(): Field[] {
    return this.data.fields;
  }
}
