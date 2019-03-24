import { AuthServer } from "./infrastructure/auth.server";
import { SettingServer } from "./infrastructure/settings.server";
import { BrowserModule } from "@angular/platform-browser";
import { GameRepository } from "./infrastructure/repositories/game.repository";
import { GameServer } from "./infrastructure/gameList.server";
import { NgModule } from "@angular/core";
import { SettingRepository } from "./infrastructure/repositories/setting.repository";
import { PlayerServer } from "./infrastructure/player.server";

@NgModule({
  imports: [BrowserModule],
  exports: [],
  declarations: [],
  providers: [GameServer, GameRepository, SettingServer, SettingRepository, PlayerServer, AuthServer],
  schemas: []
})

export class DalModule { }
