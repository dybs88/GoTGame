import { GameRulesService } from './infrastructure/services/gameRules.service';
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { LocalizationData } from "./infrastructure/locale/localization.data";
import { GotBaseComponent } from "./components/gotBase.component";
import { LocalizationService } from "./infrastructure/locale/localization.service";
import { LocaleComponent } from "./components/locale/locale.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PlayerService } from "./infrastructure/authorization/player.service";
import { FooterComponent } from "./components/footer/footer.component";
import { AuthComponent } from "./components/auth/auth.component";
import { UserService } from "./infrastructure/authorization/user.service";
import { ChangePlayerComponent } from "./components/changePlayer/changePlayer.component";
import { DisableDirective } from "./infrastructure/directives/disable.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  exports: [GotBaseComponent, NavbarComponent, FooterComponent, DisableDirective],
  declarations: [GotBaseComponent, LocaleComponent, NavbarComponent, FooterComponent, AuthComponent, ChangePlayerComponent,
    DisableDirective],
  providers: [LocalizationService, LocalizationData, PlayerService, UserService, GameRulesService]
})
export class CommonModule {

}
