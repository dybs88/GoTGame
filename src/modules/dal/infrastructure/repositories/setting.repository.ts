import { Observable } from 'rxjs';
import { SettingServer } from "../settings.server";
import { Injectable } from "@angular/core";

@Injectable()
export class SettingRepository {
  constructor(private settingServer: SettingServer) { }

  public getSettings(): Observable<any> {
    return this.settingServer.getSettings();
  }
}
