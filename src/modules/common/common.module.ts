import { BrowserModule } from "@angular/platform-browser";

import { NgModule } from "@angular/core";

import { LocalizationData } from "./infrastructure/locale/localization.data";
import { GotBaseComponent } from "./components/gotBase.component";
import { LocalizationService } from "./infrastructure/locale/localization.service";
import { LocaleComponent } from "./components/locale/locale.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PlayerService } from "./infrastructure/authorization/player.service";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  imports: [BrowserModule],
  exports: [GotBaseComponent, NavbarComponent, FooterComponent],
  declarations: [GotBaseComponent, LocaleComponent, NavbarComponent, FooterComponent],
  providers: [LocalizationService, LocalizationData, PlayerService]
})
export class CommonModule {

}
