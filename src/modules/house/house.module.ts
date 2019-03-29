import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {HouseViewComponent } from "./components/houseView/houseView.component";
import {BaratheonHouseViewComponent } from "./components/houseView/baratheonHouseView.component";
import {StarkHouseViewComponent } from "./components/houseView/starkHouseView.component";
import {LannisterHouseViewComponent } from "./components/houseView/lannisterHouseView.component";
import {GreyjoyHouseViewComponent } from "./components/houseView/greyjoyHouseView.component";
import {TyrellHouseViewComponent } from "./components/houseView/tyrellHouseView.component";
import {MartellHouseViewComponent } from "./components/houseView/martellHouseView.component";

@NgModule({
  declarations: [HouseViewComponent, BaratheonHouseViewComponent, StarkHouseViewComponent, LannisterHouseViewComponent,
    GreyjoyHouseViewComponent, TyrellHouseViewComponent, MartellHouseViewComponent],
  imports: [BrowserModule, FormsModule],
  exports: [HouseViewComponent, BaratheonHouseViewComponent, StarkHouseViewComponent, LannisterHouseViewComponent,
    GreyjoyHouseViewComponent, TyrellHouseViewComponent, MartellHouseViewComponent],
  providers: []
})
export class HouseModule { }
