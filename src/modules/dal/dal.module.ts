import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { GameServer } from "./infrastructure/game.server";
import { AuthServer } from "./infrastructure/auth.server";
import { SettingServer } from "./infrastructure/settings.server";
import { BrowserModule } from "@angular/platform-browser";
import { GameListServer } from "./infrastructure/gameList.server";
import { NgModule } from "@angular/core";
import { SettingRepository } from "./infrastructure/repositories/setting.repository";
import { PlayerServer } from "./infrastructure/player.server";
import { GameRulesServer } from "./infrastructure/gameRules.server";
import { ChatServer } from "./infrastructure/chat.server";

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  exports: [],
  declarations: [],
  providers: [GameListServer, SettingServer, SettingRepository, PlayerServer, AuthServer, GameRulesServer, ChatServer, GameListServer,
    GameServer],
  schemas: []
})

export class DalModule { }
