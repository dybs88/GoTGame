import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { SettingServer } from "../settings.server";


@Injectable()
export class SettingRepository {
  constructor(private settingServer: SettingServer) { }

  public getSettings(): Observable<any> {
    return this.settingServer.getSettings();
  }
}
