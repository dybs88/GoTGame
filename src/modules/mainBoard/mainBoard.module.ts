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
import { PawnComponent } from "./components/pawn/pawn.component";
import { SelectPawnComponent } from "./components/selectPawn/selectPawn.component";
import { GameBoardService } from "./infrastructure/services/gameBoard.service";
import { TokensComponent } from "./components/tokens/tokens.component";
import { PowerTracksComponent } from "./components/tracks/powerTracks.component";
import { GameBoardViewSettingsService  } from "./infrastructure/services/gameBoardViewSettings.service";

@NgModule({
  declarations: [MainBoardComponent, FieldComponent, GameBoardComponent, GameInfoComponent, GamePanelComponent, PawnComponent,
    SelectPawnComponent, TokensComponent, PowerTracksComponent],
  imports: [BrowserModule, HouseModule, CommonModule],
  exports: [MainBoardComponent],
  providers: [FieldViewRepository, GameBoardService, GameBoardViewSettingsService],
  entryComponents: [PawnComponent, PowerTracksComponent]
})

export class MainBoardModule {

}
