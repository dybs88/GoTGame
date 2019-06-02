import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { GameService } from "./infrastructure/services/game.service";
import { LocalizationData } from "./infrastructure/locale/localization.data";
import { GotBaseComponent } from "./components/gotBase.component";
import { LocalizationService } from "./infrastructure/locale/localization.service";
import { LocaleComponent } from "./components/locale/locale.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PlayerService } from "./infrastructure/services/player.service";
import { FooterComponent } from "./components/footer/footer.component";
import { AuthComponent } from "./components/auth/auth.component";
import { UserService } from "./infrastructure/authorization/user.service";
import { ChangePlayerComponent } from "./components/changePlayer/changePlayer.component";
import { DisableDirective } from "./infrastructure/directives/disable.directive";
import { MinValueDirective } from "./infrastructure/validators/minValue.directive";
import { GameRulesService } from "./infrastructure/services/gameRules.service";
import { MaxValueDirective } from "./infrastructure/validators/maxValue.directive";
import { ChatService } from "./infrastructure/services/chat.service";
import { ChatComponent } from "./components/chat/chat.component";
import { GameListService } from "./infrastructure/services/gameList.service";
import { CurrentService } from "./infrastructure/services/current.service";
import { MessageBoxComponent } from "./components/messageBox/messageBox.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  exports: [GotBaseComponent, NavbarComponent, FooterComponent, DisableDirective, MinValueDirective, MaxValueDirective, ChatComponent,
    MessageBoxComponent],
  declarations: [GotBaseComponent, LocaleComponent, NavbarComponent, FooterComponent, AuthComponent, ChangePlayerComponent,
    DisableDirective, MinValueDirective, MaxValueDirective, ChatComponent, MessageBoxComponent],
  providers: [LocalizationService, LocalizationData, PlayerService, UserService, GameRulesService, ChatService, GameListService,
    CurrentService, GameService]
})
export class CommonModule {

}
