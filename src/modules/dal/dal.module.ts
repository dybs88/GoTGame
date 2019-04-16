import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { AuthServer } from "./infrastructure/auth.server";
import { SettingServer } from "./infrastructure/settings.server";
import { BrowserModule } from "@angular/platform-browser";
import { GameRepository } from "./infrastructure/repositories/game.repository";
import { GameServer } from "./infrastructure/gameList.server";
import { NgModule } from "@angular/core";
import { SettingRepository } from "./infrastructure/repositories/setting.repository";
import { PlayerServer } from "./infrastructure/player.server";
import { GameRulesServer } from "./infrastructure/gameRules.server";
import { ChatServer } from "./infrastructure/chat.server";

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  exports: [],
  declarations: [],
  providers: [GameServer, GameRepository, SettingServer, SettingRepository, PlayerServer, AuthServer, GameRulesServer, ChatServer],
  schemas: []
})

export class DalModule { }
