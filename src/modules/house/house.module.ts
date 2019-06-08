import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { HouseViewComponent } from "./components/houseView/houseView.component";

@NgModule({
  declarations: [HouseViewComponent],
  imports: [BrowserModule, FormsModule],
  exports: [HouseViewComponent],
  providers: []
})
export class HouseModule { }
