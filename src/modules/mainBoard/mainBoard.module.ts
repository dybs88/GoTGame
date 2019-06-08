import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { CommonModule } from "./../common/common.module";
import { HouseModule } from "./../house/house.module";
import { GameBoardComponent } from "./components/gameView/gameBoard.component";
import { GameInfoComponent } from "./components/gameInfo/gameInfo.component";
import { GamePanelComponent } from "./components/gamePanel/gamePanel.component";
import { FieldComponent } from "./components/field/field.component";
import { MainBoardComponent } from "./components/mainBoard.component";
import { FieldViewRepository } from "./infrastructure/repositories/fieldView.repository";

@NgModule({
  declarations: [MainBoardComponent, FieldComponent, GameBoardComponent, GameInfoComponent, GamePanelComponent],
  imports: [BrowserModule, HouseModule, CommonModule],
  exports: [MainBoardComponent],
  providers: [FieldViewRepository]
})

export class MainBoardModule {

}
