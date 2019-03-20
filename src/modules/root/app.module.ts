import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { FooterComponent } from "./components/footer.component";
import { MainMenuComponent } from "./../mainMenu/components/mainMenu.component";
import { MainMenuModule } from "./../mainMenu/mainMenu.module";
import { CommonModule } from "./../common/common.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    MainMenuModule,
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "**", component: MainMenuComponent }
    ])
  ],
  providers: [{ provide: LOCALE_ID, useValue: localStorage.getItem("locale_id")}],
  bootstrap: [AppComponent]
})
export class AppModule { }
