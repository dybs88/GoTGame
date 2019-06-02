import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HousePanelComponent } from "./components/housePanel/housePanel.component";
import {HouseViewComponent } from "./components/houseView/houseView.component";

@NgModule({
  declarations: [HouseViewComponent, HousePanelComponent],
  imports: [BrowserModule, FormsModule],
  exports: [HouseViewComponent, HousePanelComponent],
  providers: []
})
export class HouseModule { }
