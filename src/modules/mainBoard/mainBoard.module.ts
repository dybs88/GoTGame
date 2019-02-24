import { BrowserModule } from "@angular/platform-browser";
import { MainBoardComponent } from "./components/mainBoard.component";
import { NgModule } from "@angular/core";
import { FieldComponent } from "./components/field/field.component";
import { FieldRepository } from "src/models/field.repository";

@NgModule({
  declarations: [MainBoardComponent, FieldComponent],
  imports: [BrowserModule],
  exports: [MainBoardComponent],
  providers: [FieldRepository]
})

export class MainBoardModule {

}
