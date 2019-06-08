import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AuthServer } from "./infrastructure/auth.server";
import { ChatServer } from "./infrastructure/chat.server";
import { GameServer } from "./infrastructure/game.server";
import { GameListServer } from "./infrastructure/gameList.server";
import { GameRulesServer } from "./infrastructure/gameRules.server";
import { PlayerServer } from "./infrastructure/player.server";
import { SettingServer } from "./infrastructure/settings.server";
import { SettingRepository } from "./infrastructure/repositories/setting.repository";

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  exports: [],
  declarations: [],
  providers: [GameListServer, SettingServer, SettingRepository, PlayerServer, AuthServer, GameRulesServer, ChatServer, GameListServer,
    GameServer],
  schemas: []
})

export class DalModule { }
