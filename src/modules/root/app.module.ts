import { MainMenuComponent } from "./../mainMenu/components/mainMenu.component";
import { MainMenuModule } from "./../mainMenu/mainMenu.module";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: "*", component: MainMenuComponent }
    ]),
    MainMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
