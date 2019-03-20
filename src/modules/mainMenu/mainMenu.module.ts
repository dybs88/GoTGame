import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { ReadyForGameComponent } from "./components/readyForGame/readyForGame.component";
import { GameListComponent } from "./components/gameList/gameList.component";
import { DalModule } from "./../dal/dal.module";
import { MainBoardModule } from "./../mainBoard/mainBoard.module";
import { MainBoardComponent } from "./../mainBoard/components/mainBoard.component";
import { MainMenuComponent } from "./components/mainMenu.component";
import { CommonModule } from "./../common/common.module";
import { GotGuard } from ".//infrastructure/got.guard";
import { JoinGameComponent } from "./components/joinGame/joinGame.component";

@NgModule({
  declarations: [MainMenuComponent, GameListComponent, ReadyForGameComponent, JoinGameComponent],
  imports: [
    MainBoardModule,
    DalModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {path: "mainboard", component: MainBoardComponent, canActivate: [GotGuard] },
    {path: "gamelist", component: GameListComponent, canActivate: [GotGuard]},
    {path: "joingame/:id", component: JoinGameComponent, canActivate: [GotGuard] },
    {path: "readyforgame/:id", component: ReadyForGameComponent, canActivate: [GotGuard]},
    {path: "**", component: MainMenuComponent, canActivate: [GotGuard] }
  ])],
  exports: [MainMenuComponent],
  providers: [GotGuard]
})

export class MainMenuModule {

}
