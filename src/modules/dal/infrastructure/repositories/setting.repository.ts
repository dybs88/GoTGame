import { SettingServer } from "../settings.server";
import { Injectable } from "@angular/core";

@Injectable()
export class SettingRepository {
  private settings: any;

  constructor(private settingServer: SettingServer) {
    this.settingServer.getSettings().subscribe(serverData => {
      this.settings = serverData;
    });
   }

  public getSettings(): any {
    return this.settings;
  }
}
