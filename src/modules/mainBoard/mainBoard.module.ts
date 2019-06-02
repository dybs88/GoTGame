import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HouseModule } from "./../house/house.module";
import { GameViewComponent } from "./components/gameView/gameView.component";
import { MainBoardComponent } from "./components/mainBoard.component";
import { FieldComponent } from "./components/field/field.component";
import { FieldViewRepository } from "./infrastructure/repositories/fieldView.repository";

@NgModule({
  declarations: [MainBoardComponent, FieldComponent, GameViewComponent],
  imports: [BrowserModule, HouseModule],
  exports: [MainBoardComponent],
  providers: [FieldViewRepository]
})

export class MainBoardModule {

}
