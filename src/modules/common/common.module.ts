import { NgModule } from "@angular/core";

import { LocalizationData } from "./infrastructure/locale/localization.data";
import { GotBaseComponent } from "./components/gotBase.component";
import { LocalizationService } from "./infrastructure/locale/localization.service";
import { LocaleComponent } from "./components/locale/locale.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  imports: [],
  exports: [GotBaseComponent, NavbarComponent],
  declarations: [GotBaseComponent, LocaleComponent, NavbarComponent],
  providers: [LocalizationService, LocalizationData]
})
export class CommonModule {

}
