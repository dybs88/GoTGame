import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { ChatService } from "./infrastructure/services/chat.service";
import { CurrentService } from "./infrastructure/services/current.service";
import { GameService } from "./infrastructure/services/game.service";
import { GameListService } from "./infrastructure/services/gameList.service";
import { GameRulesService } from "./infrastructure/services/gameRules.service";
import { LocalizationService } from "./infrastructure/locale/localization.service";
import { PlayerService } from "./infrastructure/services/player.service";
import { UserService } from "./infrastructure/authorization/user.service";
import { AuthComponent } from "./components/auth/auth.component";
import { ChangePlayerComponent } from "./components/changePlayer/changePlayer.component";
import { ChatComponent } from "./components/chat/chat.component";
import { FooterComponent } from "./components/footer/footer.component";
import { GotBaseComponent } from "./components/gotBase.component";
import { LocalizationData } from "./infrastructure/locale/localization.data";
import { LocaleComponent } from "./components/locale/locale.component";
import { MessageBoxComponent } from "./components/messageBox/messageBox.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DisableDirective } from "./infrastructure/directives/disable.directive";
import { MinValueDirective } from "./infrastructure/validators/minValue.directive";
import { MaxValueDirective } from "./infrastructure/validators/maxValue.directive";
import { GeneratePawnDirective, GenerateWindowDirective } from "./infrastructure/directives/generate.directive";
import { MapHelper } from "./infrastructure/helpers/map.helper";

@NgModule({
  imports: [BrowserModule, FormsModule],
  exports: [GotBaseComponent, NavbarComponent, FooterComponent, DisableDirective, MinValueDirective, MaxValueDirective, ChatComponent,
    MessageBoxComponent, GeneratePawnDirective, GenerateWindowDirective],
  declarations: [GotBaseComponent, LocaleComponent, NavbarComponent, FooterComponent, AuthComponent, ChangePlayerComponent,
    DisableDirective, MinValueDirective, MaxValueDirective, ChatComponent, MessageBoxComponent, GeneratePawnDirective,
    GenerateWindowDirective],
  providers: [LocalizationService, LocalizationData, PlayerService, UserService, GameRulesService, ChatService, GameListService,
    CurrentService, GameService, MapHelper]
})
export class CommonModule {

}
