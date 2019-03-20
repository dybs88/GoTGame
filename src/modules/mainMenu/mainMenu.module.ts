import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { JoinGameComponent } from "./components/joinGame/joinGame.component";
import { GameListComponent } from "./components/gameList/gameList.component";
import { DalModule } from "./../dal/dal.module";
import { MainBoardModule } from "./../mainBoard/mainBoard.module";
import { MainBoardComponent } from "./../mainBoard/components/mainBoard.component";
import { MainMenuComponent } from "./components/mainMenu.component";
import { CommonModule } from "./../common/common.module";
import { GotGuard } from ".//infrastructure/got.guard";

@NgModule({
  declarations: [MainMenuComponent, GameListComponent, JoinGameComponent],
  imports: [
    MainBoardModule,
    DalModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
    {path: "mainBoard", component: MainBoardComponent, canActivate: [GotGuard] },
    {path: "gameList", component: GameListComponent, canActivate: [GotGuard]},
    {path: "joinGame/:id", component: JoinGameComponent, canActivate: [GotGuard] },
    {path: "**", component: MainMenuComponent, canActivate: [GotGuard] }
  ])],
  exports: [MainMenuComponent],
  providers: [GotGuard]
})

export class MainMenuModule {

}
