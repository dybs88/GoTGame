import { MainBoardModule } from './../mainBoard/mainBoard.module';
import { MainBoardComponent } from './../mainBoard/components/mainBoard.component';
import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { MainMenuComponent } from "./components/mainMenu.component";

@NgModule({
  declarations: [MainMenuComponent],
  imports: [
    MainBoardModule,
    RouterModule.forRoot([
    {path: "mainBoard", component: MainBoardComponent}
  ])],
  exports: [MainMenuComponent],
  providers: []
})

export class MainMenuModule {

}
